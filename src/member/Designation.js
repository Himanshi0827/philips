// import React, { useState } from "react";
// import "../Designation.css"
 
// export default function Designation() {
//   const [market, setMarket] = useState("North America");
//   const [salesArea, setSalesArea] = useState("United States");
//   const [member, setMember] = useState("Global Smiles Foundation");
 
//   const [showDesignationHeader, setShowDesignationHeader] = useState(true);
 
//   const [effectiveDate, setEffectiveDate] = useState("2026-04-15");
//   const [tier, setTier] = useState("Tier 1");
 
//   return (
//     <div className="page-container">
      
//       {/* HEADER */}
//       <div className="header" style={{justifyContent:"center"}}>Designation Page</div>
 
//       {/* FILTER SECTION */}
//       <div className="filter-container">
//   <div className="filter-group">
//     <label>Filter By Market</label>
//     <select>
//       <option>North America</option>
//     </select>
//   </div>
 
//   <div className="filter-group">
//     <label>Filter By Sales Area</label>
//     <select>
//       <option>United States</option>
//     </select>
//   </div>
 
//   <div className="filter-group">
//     <label>Select Member</label>
//     <input type="text" value="Global Smiles Foundation" />
//   </div>
// </div>
 
//       {/* CONDITIONAL DESIGNATION HEADER */}
//       {showDesignationHeader && (
//         <>
//         <div className="designation">
//         <p>Designation Form Header</p>
//         </div>
//         <div className="designation-header">
//           <table className="designation-table">
//             <th>Existing Membership </th>
//             <th>Effective Date</th>
//             <th>Order Intake Volume Tier</th>
//             <th>Add New GPO Membership</th>
//             <tbody>
//               <tr>
//                 <td>The list below shows all existing Membership records. The selected one is the currently designated one. If none of them are selected, then the member is not designated to any GPO.</td>
//                 <td><input
//                 type="date"
//                 value={effectiveDate}
//                 onChange={(e) => setEffectiveDate(e.target.value)}
//               /></td>
//               <td>
//               <select value={tier} onChange={(e) => setTier(e.target.value)} className="select">
//                 <option>Tier 1</option>
//                 <option>Tier 2</option>
//               </select>
//               </td>
//               <td>
// You can create new membership records and designate the member to the select GPO.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         </>
//       )}
 
//       {/* TABLE SECTION */}
//       { showDesignationHeader &&
//       <>
//       <div className="table-section">
//         <h4>Designated Form Request</h4>
 
//         <table>
//           <thead>
//             <tr>
//               <th>Member Account</th>
//               <th>Designated GPO</th>
//               <th>Effective Date</th>
//               <th>Order Intake Volume Tier</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
 
//           <tbody>
//             {/* Dynamic rows later */}
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center" }}>
//                 No Data
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
 
//       {/* FOOTER ACTIONS */}
//       <div className="footer">
//         <button className="btn-primary">Submit Designated Change Request</button>
 
//         <div style={{ marginTop: "10px" }}>
//           <button className="btn-secondary">Designate</button>
//           <button className="btn-secondary">Clear Form</button>
//         </div>
//       </div>
//       </>
//   }
//     </div>
//   );
// }




import React, { useState } from "react";
import "../Designation.css"
import { createMember,updateMember } from "../api/member"; 
 import LookupTypeAhead from "../components/LookupTypeAhead";
import { searchLookupRecords } from "../api/SearchLookup";
export default function Designation() {
  const [market, setMarket] = useState("North America");
  const [salesArea, setSalesArea] = useState("United States");
  const [member, setMember] = useState("Global Smiles Foundation");
 const [selectedGPO, setSelectedGPO] = useState(null);
  const [showDesignationHeader, setShowDesignationHeader] = useState(true);
 const [rows, setRows] = useState([]);
  const [effectiveDate, setEffectiveDate] = useState("2026-04-15");
  const [tier, setTier] = useState("Tier 1");
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

const validateDesignation = () => {
  const isCFA = false; // call API

  if (isCFA) {
    const proceed = window.confirm(
      "Member belongs to CFA. Continue will remove existing assignments."
    );
    return proceed;
  }

  return true;
};

const handleSubmit = async () => {
  try {
    for (let r of rows) {
      await createMember({
        APTS_Member_c: r.memberId,
        APTS_Designation_GPO_c: r.gpoId,
        APTS_Start_Date_c: r.effectiveDate,
        APTS_Volume_Tier_c: r.tier
      });
    }

    alert("Designation submitted!");
    setRows([]);

  } catch (e) {
    console.error(e);
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
    <LookupTypeAhead
  field={{ DisplayName: "Member", LookupObjectName: "Account" }}
  value={member}
  onChange={(rec) => setMember(rec)}
  searchFn={searchLookupRecords}
/>
    {/* <input type="text" value="Global Smiles Foundation" /> */}
  </div>
</div>
 
      {/* CONDITIONAL DESIGNATION HEADER */}
      {showDesignationHeader && (
        <>
        <div className="designation">
        <p>Designation Form Header</p>
        </div>
        <div className="designation-header">
          <table className="designation-table">
            <th>Existing Membership </th>
            <th>Effective Date</th>
            <th>Order Intake Volume Tier</th>
            <th>Add New GPO Membership</th>
            <tbody>
              <tr>
                <td>The list below shows all existing Membership records. The selected one is the currently designated one. If none of them are selected, then the member is not designated to any GPO.</td>
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
  <LookupTypeAhead
    field={{ DisplayName: "GPO", LookupObjectName: "Account" }}
    value={selectedGPO}
    onChange={(rec) => setSelectedGPO(rec)}
    searchFn={searchLookupRecords}
  />
</div>
</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
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
 
          {/* <tbody>
        
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          </tbody> */}
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
        <button className="btn-primary">Submit Designated Change Request</button>
 
        <div style={{ marginTop: "10px" }}>
          {/* <button className="btn-secondary">Designate</button> */}
          <button className="btn-secondary" onClick={handleAddRow}>
  Designate
</button>

<button
  className="btn-secondary"
  onClick={() => setRows([])}
>
  Clear Form
</button>
          {/* <button className="btn-secondary">Clear Form</button> */}
        </div>
      </div>
      </>
  }
    </div>
  );
}