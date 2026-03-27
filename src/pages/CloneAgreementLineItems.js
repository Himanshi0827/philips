
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation,useParams } from "react-router-dom";
import LookupTypeAhead from "../components/LookupTypeAhead";
import { searchLookupRecords } from "../api/SearchLookup";
import {  createAgreementLineItem,createAgreementGroup } from "../api/api";
import { queryAgreementLineItemsByAgreement,queryCheckAgreementGroup } from "../api/queryAgreementLineItemsByAgreement";
import TopBar from "../components/TopBar";
import {toast} from "react-toastify";
 
function CloneAgreementLineItems() {
  const navigate=useNavigate();
 // const location = useLocation();
 
  const { agreementId } = useParams();   // 👈 from URL
const location = useLocation();
 
const targetAgreementId =
  agreementId ||                      // ✅ FIRST priority (URL)
  location.state?.agreementId ||     // fallback (navigation)
  null;
 
if (!targetAgreementId) {
  console.error("Agreement ID not found in URL or state");
}
// 🔥 STATIC DEV MODE (remove later)
const agreementName =
  location.state?.agreementName;
  //  ||
  // "Philips Trial";
 // const targetAgreementId = location.state?.targetAgreementId;
 const targetAgreementName = location.state?.targetAgreementName;
  const [sourceAgreement, setSourceAgreement] = useState(null);
  // const [sourceGroup, setSourceGroup] = useState(null);
  const [targetGroup, setTargetGroup] = useState(null);
const [sourceGroup, setSourceGroup] = useState([]);
 
  const [lineItems, setLineItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
 
  /*  Load Source Line Items  */
useEffect(() => {
  if (!sourceAgreement) return;
 
  const loadLineItems = async () => {
    try {
      const data = await queryAgreementLineItemsByAgreement(
        sourceAgreement.Id
      );
      console.log("data",data)
      setLineItems(data);
    } catch (err) {
      console.error(err);
    }
  };
 
  loadLineItems();
}, [sourceAgreement]);
 
console.log("trial Id",targetAgreementId);
  /*Select Row */
 
  const toggleSelect = (item) => {
    setSelectedItems(prev =>
      prev.includes(item.Id)
        ? prev.filter(id => id !== item.Id)
        : [...prev, item.Id]
    );
  };
 
  /* Clone Logic  */
 
 console.log(sourceGroup);
 const [cloneGroupSameAsSource, setCloneGroupSameAsSource] = useState(false);

const getGroupName = (item) => {
  return (
    item?.APTS_Agreement_Group_c?.Name ||
    item?.AgreementGroupName ||
    item?.Agreement_Group_Name__c ||
    null
  )?.trim();
};

const normalizeKey = (name) => name?.toLowerCase().trim();

const handleClone = async () => {
  try {
    if (!selectedItems?.length) {
      alert("Please select at least one Agreement Line to clone.");
      return;
    }

    if (!targetAgreementId) {
      alert("Select Target Agreement.");
      return;
    }

    if (!cloneGroupSameAsSource && !targetGroup) {
      alert("Select Target Agreement Group.");
      return;
    }

    const itemsToClone = lineItems.filter(line =>
      selectedItems.includes(line.Id)
    );
console.log("item",itemsToClone);
    const groupMapping = {};

    /* ==============================
       STEP 1: Prepare Groups (FINAL)
    ============================== */

    if (cloneGroupSameAsSource) {
      const uniqueGroups = [
        ...new Set(
          itemsToClone
            .map(item => getGroupName(item))
            .filter(Boolean)
        )
      ];

      for (const groupName of uniqueGroups) {
        const key = groupName.toLowerCase().trim();

        // 🔹 STEP 1A — check existing
        const existingCheck = await queryCheckAgreementGroup(
          targetAgreementId,
          groupName
        );

        let groupId =
          existingCheck?.[0]?.Id ||
          existingCheck?.find(g => g?.Name === groupName)?.Id;

        // 🔹 STEP 1B — create if not exists
        if (!groupId) {
          console.log("Creating missing group:", groupName);

          const newGroupPayload = {
            APTS_Agreement_c: targetAgreementId,
            Name: groupName
          };

          await createAgreementGroup(newGroupPayload);

          // 🔥 STEP 1C — RE-QUERY (your requested fix)
          const requery = await queryCheckAgreementGroup(
            targetAgreementId,
            groupName
          );

          groupId =
            requery?.[0]?.Id ||
            requery?.find(g => g?.Name === groupName)?.Id;
        }

        if (!groupId) {
          console.error(
            "Still no groupId after create+query:",
            groupName
          );
          continue;
        }

        groupMapping[key] = groupId;
      }

      console.log("Final groupMapping =", groupMapping);
    }

    /* ==============================
       STEP 2: Clone Line Items
    ============================== */

    for (let item of itemsToClone) {
      let finalGroupId;

      if (cloneGroupSameAsSource) {
        const key = getGroupName(item)?.toLowerCase()?.trim();
        finalGroupId = groupMapping[key];
      } else {
        finalGroupId = targetGroup?.Id;
      }

      if (!finalGroupId) {
        console.warn(
          "No target group found. Skipping item:",
          item.Name
        );
        continue;
      }

      const payload = {
        Name: item.Name,
        Agreement: targetAgreementId,
        APTS_Agreement_Group_c: { Id: finalGroupId },
        Line_Type_c: item.Line_Type_c,
        APTS_Discount_Type_c: item.APTS_Discount_Type_c,
        APTS_Match_Products_By_c: item.APTS_Match_Products_By_c,
        APTS_BillingPlan_c: item.APTS_BillingPlan_c,
        APTS_MG3_Service_c: item.APTS_MG3_Service_c
        
      };
    if (item.Product?.Id) {
      payload.Product = {
        Id: item.Product.Id
      };
    }
    console.log(item.Hierarchy_c);
   if (item.Hierarchy_c?.Id) {
      payload.Hierarchy_c = {
        Id: item.Hierarchy_c.Id
      };
    }
 const discountFields = [
      "APTS_Discount_Tier_1_c",
      "APTS_Discount_Tier_2_c",
      "APTS_Discount_Tier_3_c",
      "APTS_Discount_Tier_4_c",
      "APTS_Discount_Tier_5_c",
      "APTS_Scaled_Discount_Percent_Tier_1_c",
      "APTS_Scaled_Discount_Percent_Tier_2_c",
      "APTS_Scaled_Discount_Percent_Tier_3_c",
      "APTS_Scaled_Discount_Percent_Tier_4_c",
      "APTS_Scaled_Discount_Percent_Tier_5_c",
      "APTS_Volume_Threshold_1_c",
      "APTS_Volume_Threshold_2_c",
      "APTS_Volume_Threshold_3_c",
      "APTS_Volume_Threshold_4_c",
      "APTS_Volume_Threshold_5_c",
      "APTS_NPO_Tier_1_c",
      "APTS_NPO_Tier_2_c",
      "APTS_NPO_Tier_3_c",
      "APTS_NPO_Tier_4_c",
      "APTS_NPO_Tier_5_c",
      "APTS_NPO_Tier_6_c",
      "APTS_NPO_Tier_7_c",
      "APTS_Scaled_Discount_Amount_Tier_1_c",
      "APTS_Scaled_Discount_Amount_Tier_2_c",
      "APTS_APTS_Scaled_Discount_Amount_Tier_3_c",
      "APTS_Scaled_Discount_Amount_Tier_4_c",
      "APTS_Scaled_Discount_Amount_Tier_5_c"
    ];
 
    discountFields.forEach(field => {
      if (item[field] !== null && item[field] !== undefined) {
        payload[field] = item[field];
      }
    });
      await createAgreementLineItem(payload);
    }

    toast.success("Agreement Lines cloned successfully");
    navigate(`/${agreementId}`);

  } catch (error) {
    console.error("Error cloning agreement lines:", error);
    toast.error("Error while cloning Agreement Lines.");
  }
};

  return (<div className="clone-container">
 
  <TopBar
    title="Clone Agreement Line Items"
    onSave={handleClone}
    agreementHeader={agreementName}
    agreementId={agreementId}
  />
 
  <div className="clone-card">
    <div className="clone-grid">
 
      <div>
        <label className="clone-label">Source Agreement</label>
        <LookupTypeAhead
          field={{
            DisplayName: "Agreement",
            LookupObjectName: "Agreement",
            TargetAgreement:targetAgreementId
          }}
          value={sourceAgreement}
          onChange={(record) => {
            if (record?.Id === targetAgreementId) {
              alert("Source cannot be same as Target");
              return;
            }
            console.log("trial",record)
            setSourceAgreement(record);
          }}
          searchFn={searchLookupRecords}
        />
      </div>
 
      <div>
        <label className="clone-label">Target Agreement</label>
        <input value={targetAgreementName} disabled />
      </div>
 
      {sourceAgreement && (
        <>
          <div>
            <label className="clone-label">Source Agreement Group</label>
            <LookupTypeAhead
            field={{
              DisplayName: "Agreement Group",
              LookupObjectName: "APTS_Agreement_Groups_c",
              TargetAgreement: sourceAgreement.Id,
              Part:"Source"
            }}
            value={null}
onChange={(record) => {
  if (!record) return;
 
  setSourceGroup(prev => {
    if (prev.find(g => g.Id === record.Id)) return prev;
    return [...prev, record];
  });
}}
 
            // value={sourceGroup}
            // onChange={(record) => setSourceGroup(record)}
            searchFn={searchLookupRecords}
          />
          </div>
<div className="selected-groups">
  {sourceGroup.map(group => (
    <span key={group.Id} className="group-chip">
      {group.Name}
      <button
        onClick={() =>
          setSourceGroup(prev =>
            prev.filter(g => g.Id !== group.Id)
          )
        }
      >
        ✕
      </button>
    </span>
  ))}
</div>

          <div className="clone-checkbox">
  <label>
    <input
      type="checkbox"
      checked={cloneGroupSameAsSource}
      onChange={(e) => {setCloneGroupSameAsSource(e.target.checked);
      
      setTargetGroup(sourceGroup);}}
    />
    Clone Agreement Group same as Source
  </label>
</div>
{!cloneGroupSameAsSource && (
  <div>
  <label className="clone-label">Target Agreement Group</label>
   <LookupTypeAhead
  field={{
    DisplayName: "Agreement Group",
    LookupObjectName: "APTS_Agreement_Groups_c",
    TargetAgreement:targetAgreementId,
    Part:"Target"
  }}
  value={targetGroup}
  onChange={(record) => setTargetGroup(record)}
  searchFn={searchLookupRecords}
/>
</div>
)}
        </>
      )}
 
    </div>
  </div>
 {sourceAgreement&&(
//   {sourceGroup && (
    <div className="clone-table-wrapper">
      <table className="clone-table">
        <thead>
          <tr>
            {/* <th></th>
            <th>Name</th>
            <th>Line Type</th>
            <th>Discount Type</th>
            <th></th> */}
            <th></th>
              <th>Name</th>
              <th>Agreement Group</th>
              <th>Line Type</th>
              <th>Discount Type</th>
              <th>Match Products By</th>
              {/* <th>Code</th>
              <th>Matching</th> */}
              <th>Billing Plan</th>
              <th>MG3</th>
              <th>Tier 1</th>
              <th>Tier 2</th>
              <th>Tier 3</th>
              <th>Tier 4</th>
              <th>Tier 5</th>
              <th>Scaled Discount %, Tier 1</th>
                <th>Scaled Discount %, Tier 2</th>
                  <th>Scaled Discount %, Tier 3</th>
                    <th>Scaled Discount %, Tier 4</th>
                      <th>Scaled Discount %, Tier 5</th>
                      <th>Volume Threshold 1</th>
                      <th>Volume Threshold 2</th>
                      <th>Volume Threshold 3</th>
                      <th>Volume Threshold 4</th>
                      <th>Volume Threshold 5</th>
                       <th>NPO1</th><th>NPO2</th><th>NPO3</th><th>NPO4</th><th>NPO5</th><th>NPO6</th><th>NPO7</th>
                       <th>Scale Discount Amt T1</th><th>Scale Discount Amt T2</th><th>Scale Discount Amt T3</th><th>Scale Discount Amt T4</th><th>Scale Discount Amt T5</th>
          </tr>
        </thead>
        <tbody>
          {lineItems
          .filter(li => {
      if (sourceGroup.length === 0) return true;
 
      return sourceGroup.some(
        group => group.Id === li.APTS_Agreement_Group_c?.Id
      );
    })
            // .filter(li => li.APTS_Agreement_Group_c?.Id === sourceGroup?.Id)
            .map(item => (
              <tr key={item.Id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => toggleSelect(item)}
                  />
                </td>
                <td>{item.Name}</td>
                <td>{item.APTS_Agreement_Group_c?.Name}</td>
                <td>{item.Line_Type_c}</td>
                <td>{item.APTS_Discount_Type_c}</td>
                <td>{item.APTS_Match_Products_By_c}</td>
              
                <td>{item.APTS_BillingPlan_c}</td>
                <td>{item.APTS_MG3_Service_c}</td>
                <td>{item.APTS_Discount_Tier_1_c}</td>
                <td>{item.APTS_Discount_Tier_2_c}</td>
                <td>{item.APTS_Discount_Tier_3_c}</td>
                <td>{item.APTS_Discount_Tier_4_c}</td>
                 <td>{item.APTS_Discount_Tier_5_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_1_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_2_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_3_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_4_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_5_c}</td>
                    <td>{item.APTS_Volume_Threshold_1_c}</td>
                    <td>{item.APTS_Volume_Threshold_2_c}</td>
                    <td>{item.APTS_Volume_Threshold_3_c}</td>
                    <td>{item.APTS_Volume_Threshold_4_c}</td>
                    <td>{item.APTS_Volume_Threshold_5_c}</td>
                    <td>{item.APTS_NPO_Tier_1_c?.Value}</td>
                     <td>{item.APTS_NPO_Tier_2_c?.Value}</td>
                      <td>{item.APTS_NPO_Tier_3_c?.Value}</td>
                       <td>{item.APTS_NPO_Tier_4_c?.Value}</td>
                        <td>{item.APTS_NPO_Tier_5_c?.Value}</td>
                         <td>{item.APTS_NPO_Tier_6_c?.Value}</td>
                          <td>{item.APTS_NPO_Tier_7_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_1_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_2_c?.Value}</td>
                    <td>{item.APTS_APTS_Scaled_Discount_Amount_Tier_3_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_4_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_5_c?.Value}</td>
 
                {/* <td>{item.Name}</td>
                <td>{item.Line_Type_c}</td>
                <td>{item.APTS_Discount_Type_c}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )}
 
  {selectedItems.length > 0 && (
    <div className="clone-actions">
      <button className="primary-btn" onClick={handleClone}>
        Clone Selected
      </button>
    </div>
  )}
 
</div>
 
  );}
 
export default CloneAgreementLineItems;