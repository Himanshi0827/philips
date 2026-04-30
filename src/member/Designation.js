
import React, { useState,useEffect } from "react";
import "../Designation.css"
import {  useLocation } from "react-router-dom";

import MemberSearch from "../components/MemberSearch";
import { getAccounts,getMembershipAgreements ,createGPODesignateChange} from "../api/member"; 
import {getAgreementById} from "../api/api";
import { queryGetAgreementDetails } from "../api/queryAgreementLineItemsByAgreement"; 

import { toast } from "react-toastify";
export default function Designation() {

const agreementId = sessionStorage.getItem("agreementId");
  const [member, setMember] = useState(null);

 const [selectedGPO, setSelectedGPO] = useState(null);
 const showDesignationHeader = !!member?.Id;

 const [rows, setRows] = useState([]);

  const today = new Date().toISOString().split("T")[0];
const [effectiveDate, setEffectiveDate] = useState(today);
  const [tier, setTier] = useState("Tier 1");
   const [Acc,setAcc] = useState(null);
  const [options, setOptions] = useState([]);
const [designated, setDesignated] = useState(null);
const [showCheckBox, setShowCheckBox] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);
const clearForm = () => {
  setRows([]);
  setMember(null);
  setSelectedGPO(null);
  setEffectiveDate(today);
  setTier("Tier 1");
  setOptions([]);
  setDesignated(null);
  setShowCheckBox(false);
};
useEffect(() => {
   loadData();
   console.log("account",Acc);
   if (Acc && Acc.length > 0) {
    const accRecord = Acc[0]?.Account;

    if (accRecord) {
      setSelectedGPO({
        Id: accRecord.Id,
        Name: accRecord.Name
      });
    }
  }
  if (!member?.Name) return;

  const load = async () => {
    const data = await getAccounts({
      filters: {
        Market_c: "North America",
        Country_c: "United States",
        Inactive_Flag_c: false,
        Golden_Record_Key_c: { notNull: true },
        Name: member.Name // EXACT MATCH
      }
    });
console.log("dataoption",data);
    const mapped = data.map(rec => ({
      label: `${rec.Designated_GPO_c?.Name || "No GPO"} ${
        rec.Designated_GPO_c ? "(Designated)" : ""
      }`,
      value: rec.Id
    }));
 console.log("hdshe",mapped);
    setOptions(mapped);
     console.log("hdshe",options);
  };

  load();
}, [member],[Acc]);
   const loadData = async () => {
      try {       
const trying = await queryGetAgreementDetails(agreementId);
  console.log(trying);
  setAcc(trying);


      } catch (err) {
        console.error(err);
      } 
    };
 const handleAddRow = () => {
  if (!member || !selectedGPO) {
    alert("Select Member and GPO");
    return;
  }

  const newRow = {
    id: Date.now(),
    memberName: member.Name,
    memberId: member.Id,
    gpoName: selectedGPO.Name,
    gpoId: selectedGPO.Id,
    effectiveDate,
    tier
  };

  setRows((prev) => [...prev, newRow]);
};

const checkMembershipAgreements = async (memberId, newGpoId) => {
  try {
    // Step 1: Get contracts by member
    const contracts = await getMembershipAgreements(memberId);
console.log("contracts", contracts);
console.log("contractsData", contracts[0].APTS_Related_Agreement_c);
console.log("contracts length", contracts.length);
    if (contracts.length === 0) return 0;


    const agreements = await getAgreementById(contracts[0].APTS_Related_Agreement_c);
console.log("agreements", agreements);
    const today = new Date();

    // Step 4: Apply Apex-like filters
    const validAgreements = agreements.filter(agr => {
      return (
        new Date(agr.ContractEndDate) > today &&
        agr.APTS_Member_SAP_Status_c === "In Progress" && // adjust if needed
        agr.Account === newGpoId &&
        agr.Status === "Activated" &&
        agr.StatusCategory === "In Effect"
      );
    });

    return validAgreements.length;

  } catch (e) {
    console.error("Error in membership check", e);
    return 0;
  }
};
const handleConfirmYes = async () => {
  try {
    for (let r of rows) {
      const payload = {
        Name: `Change Designation - ${r.memberName} to ${r.gpoName}`,
        APTS_Member_Account_c:{Id: r.memberId,Name: r.memberName},
        APTS_Designated_GPO_c: {Id: r.gpoId, Name: r.gpoName},
        APTS_Start_date_c: r.effectiveDate,
        APTS_Order_Intake_Volume_Tier_c: r.tier,
        APTS_Un_designate_c: showCheckBox && designated === r.memberId ? true : false,
        APTS_Customer_MP1_Id_c: member.MP1_Customer_id_1_c,
        APTS_Status_c: "Not Processed"
      };

      await createGPODesignateChange(payload);
    }

    toast.success("GPO Designation Change Created!");

    //  Clear everything
    clearForm();

    // close modal
    setShowConfirm(false);

  } catch (e) {
    console.error(e);
    toast.error("Failed to create designation");
  }
};
  return (
    <div className="page-container">
      
      {/* HEADER */}
      <div className="header" style={{justifyContent:"center"}}>Designation Page</div>
 
      {/* FILTER SECTION */}
      <div className="filter-container">
  <div className="filter-group">
    <label>Filter By Market</label>
    <select>
      <option>North America</option>
    </select>
  </div>
 
  <div className="filter-group">
    <label>Filter By Sales Area</label>
    <select>
      <option>United States</option>
    </select>
  </div>
 
  <div className="filter-group">
    <label>Select Member</label>
    <MemberSearch
  value={member}
  onChange={(rec) => {
    setMember(rec);
    console.log("selected member", rec);
    console.log("member", member);
  }}
  type="MEMBER"
/>
   
  </div>
</div>
 
      {/* CONDITIONAL DESIGNATION HEADER */}
      {showDesignationHeader && (
        <>
        <div className="designation" >
     Designation Form Header
        </div>
        <div className="designation-header">
          <table className="designation-table">
            <th>Existing Membership </th>
            <th>Effective Date</th>
            <th>Order Intake Volume Tier</th>
            <th>Add New GPO Membership</th>
            <tbody>
              <tr>
                <td>The list below shows all existing Membership records. The selected one is the currently designated one. If none of them are selected, then the member is not designated to any GPO.
                  {options.length > 0 && (
  <div>
   
    {options.map(opt => (
      <label key={opt.value}>
        <input
          type="radio"
          name="designation"
          value={opt.value}
          onChange={(e) => {
            const val = e.target.value;
            setDesignated(val);

            const selected = options.find(o => o.value === val);

            if (selected.label.includes("Designated")) {
              setShowCheckBox(true);
            } else {
              setShowCheckBox(false);
            }
          }}
        />
        {opt.label}
      </label>
    ))}
  </div>
)}
                </td>
                <td><input
                type="date"
                value={effectiveDate}
                onChange={(e) => setEffectiveDate(e.target.value)}
              /></td>
              <td>
              <select value={tier} onChange={(e) => setTier(e.target.value)} className="select">
                <option>Tier 1</option>
                <option>Tier 2</option>
              </select>
              </td>
              <td>
You can create new membership records and designate the member to the select GPO.
<div className="filter-group">
  <label>Select GPO</label>
  
  <MemberSearch
  value={selectedGPO}
  onChange={setSelectedGPO}
  type="GPO"
/>
</div>
</td>
              </tr>
            </tbody>
          </table>
          <div className="button-container">
          <button
  className="btn-primary"
  onClick={async () => {
    if (!member || !selectedGPO) {
      toast.error("Select Member and GPO");
      return;
    }

    if (effectiveDate < today) {
      toast.error("Please select future date");
      return;
    }
console.log("memberId", member.Id);
console.log("selectedGPOId", selectedGPO.Id);
    const count = await checkMembershipAgreements(
      member.Id,
      selectedGPO.Id
    );
console.log("valid agreement count", count);
    if (count > 0) {
      console.log("Existing valid agreements found:", count);
      toast.error(
        "Member SAP status In Progress. Please try after sometime"
      );
      return;
    }

    //  Only after validation
    handleAddRow();
  }}
>
  Submit Designated Change Request
</button></div>
           
        </div>
        </>
      )}
 {showConfirm && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h3>Confirmation</h3>
      <p>Are you sure that you want to add/change the GPO Designation?</p>

      <div className="modal-actions">
        <button
          className="btn-primary"
          onClick={handleConfirmYes}
        >
          Yes
        </button>

        <button
          className="btn-secondary"
          onClick={() => setShowConfirm(false)}
        >
          No
        </button>
      </div>
    </div>
  </div>
)}
      {/* TABLE SECTION */}
      { showDesignationHeader &&
      <>
      <div className="table-section">
        <h4>Designated Form Request</h4>
 
        <table>
          <thead>
            <tr>
              <th>Member Account</th>
              <th>Designated GPO</th>
              <th>Effective Date</th>
              <th>Order Intake Volume Tier</th>
              <th>Delete</th>
            </tr>
          </thead>
 
        
          <tbody>
  {rows.length === 0 ? (
    <tr>
      <td colSpan="5" style={{ textAlign: "center" }}>
        No Data
      </td>
    </tr>
  ) : (
    rows.map((r) => (
      <tr key={r.id}>
        <td>{r.memberName}</td>
        <td>{r.gpoName}</td>
        <td>{r.effectiveDate}</td>
        <td>{r.tier}</td>
        <td>
          <button onClick={() =>
            setRows(rows.filter((x) => x.id !== r.id))
          }>
            ❌
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
        </table>
      </div>
 
      {/* FOOTER ACTIONS */}
      <div className="footer">
      
 
        <div style={{ margin: "10px" }}>
         
          <button
className="btn-primary"
disabled={rows.length === 0}
  onClick={() => setShowConfirm(true)}
>
  Designate
</button>
       
<button
 className="btn-primary"
  onClick={clearForm}
  style={{ margin: "10px" }}
>
  Clear Form
</button>

        </div>
      </div>
      </>
  }
    </div>
  );
}