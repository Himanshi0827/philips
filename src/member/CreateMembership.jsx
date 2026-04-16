import { useEffect, useState } from "react";
import LookupTypeAhead from "../components/LookupTypeAhead";
import { searchLookupRecords } from "../api/SearchLookup";
import { createMember } from "../api/member"; // you will create this
import { getPicklistOptions } from "./getPicklistOptions";
import Designation from "./Designation";
export default function CreateMembership({ onBack , agreementDetails}) {
  console.log("details",agreementDetails);
  const agreementId = sessionStorage.getItem("agreementId");
const [form, setForm] = useState({
  member: null,
  agreementGroup: null,
  memberType: "",
  startDate: "",
  endDate: "",
  oitValue: "",
  currentOverAchievement: "",
  volumeTier: "",
  syncToSAP: "",
  oitStartDate: "",
  oitEndDate: "",
  externalId: "",
  lockedUntil: "",
  autoTierReview: false,
  lockedForTier: false
});
  // const [form, setForm] = useState({
  //   member: null,
  //   agreement: null,
  //   agreementGroup: null,
  //   startDate: "",
  //   endDate: "",
  //   syncToSAP: "Yes",
  //   externalId: "",
  //   excludeCommitment: false
  // });
const [memberTypes, setMemberTypes] = useState([]);
const [volumeTiers, setVolumeTiers] = useState([]);
const [syncOptions, setSyncOptions] = useState([]);

useEffect(() => {
  loadPicklists();
}, []);

const loadPicklists = async () => {
  try {
    const mt = await getPicklistOptions("APTS_Member_Type_c");
    const vt = await getPicklistOptions("APTS_Volume_Tier_c");
    const sync = await getPicklistOptions("APTS_Sync_to_SAP_c");

    setMemberTypes(mt);
    setVolumeTiers(vt);
    setSyncOptions(sync);
  } catch (e) {
    console.error(e);
  }
};
  const handleSave = async () => {
    console.log("group",form.agreementGroup?.Id);
    console.log("group",form.agreementGroup?.Name);
    try {
      const payload = {
  Name: form.member?.Name || "New Member",

  APTS_Member_c: form.member?.Id,
  APTS_Related_Agreement_c: agreementId,
  APTS_Agreement_Group_c: {Id:form.agreementGroup?.Id, Name:form.agreementGroup?.Name},

  APTS_Member_Type_c: form.memberType,
  APTS_Start_Date_c: form.startDate,
  APTS_End_Date_c: form.endDate,

  APTS_OIT_Value_c: Number(form.oitValue),
  APTS_Current_over_achievement_c: Number(form.currentOverAchievement),

  APTS_Volume_Tier_c: form.volumeTier,
  APTS_Sync_to_SAP_c: form.syncToSAP,

  APTS_OIT_start_date_c: form.oitStartDate,
  APTS_OIT_end_date_c: form.oitEndDate,

  APTS_External_Identifier_c: form.externalId,
  APTS_Locked_Until_date_c: form.lockedUntil,

  APTS_Automatic_Tier_Review_c: form.autoTierReview,
  APTS_locked_for_tier_changes_c: form.lockedForTier
};
      // const payload = {
      //   Name:"him",
      //   APTS_Member__c: form.member?.Id,
      //   APTS_Related_Agreement__c: agreementId,
      //   APTS_Agreement_Group__c: form.agreementGroup?.Id,
      //   APTS_Start_Date__c: form.startDate,
      //   APTS_End_Date__c: form.endDate,
      //   APTS_Sync_To_SAP__c: form.syncToSAP === "Yes",
      //   APTS_External_Identifier__c: form.externalId,
      //   APTS_Excluded_From_Commitment__c: form.excludeCommitment
      // };
console.log("member",payload);
      await createMember(payload);
      alert("Member created successfully");
      onBack();
    } catch (err) {
      console.error(err);
      alert("Error creating member");
    }
  };
 const isGPOFramework =
    agreementDetails?.RecordType === "GPO Framework" &&
    agreementDetails?.APTS_Sales_Area_c === "United States" &&
    agreementDetails?.Apttus_Market_c === "North America" &&
    agreementDetails?.StatusCategory === "In Effect";

  // 👇 SWITCH UI HERE
  if (isGPOFramework) {
    return <Designation />;
  }

  return (
    <div className="members-container">

      {/* HEADER */}
      <div className="top-header">   
        <div className="header-left">
          <span className="brand">PHILIPS</span>
          <span className="agreement">
  Agreement: {agreementDetails?.Name || "Loading..."}
</span>
          {/* <span className="agreement">Agreement: 8888</span> */}
        </div>
      <div className="header-actions">

        <button onClick={onBack}>Back To List</button>
        <button className="primary" onClick={handleSave}>
          Save New Member
        </button>
      </div>
</div>
      <div className="section-title">Member Details</div>

     <div className="form-grid">

  {/* Row 1 */}
  <div className="field full">
    <label>* Select Member</label>
    <LookupTypeAhead
      field={{ DisplayName: "Member", LookupObjectName: "Account" }}
      value={form.member}
      onChange={(rec) => setForm({ ...form, member: rec })}
      searchFn={searchLookupRecords}
    />
  </div>

  <div className="field full">
    <label>* Related Agreement</label>
    <input value={agreementDetails?.Name || agreementId} disabled />
  </div>

  {/* Row 2 */}
  <div className="field full">
    <label>Member Type</label>
    <select
      value={form.memberType}
      onChange={(e) => setForm({ ...form, memberType: e.target.value })}
    >
      <option value="">Select an Option</option>
      {memberTypes.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>

  <div className="field full">
    <label>Agreement Group</label>
    <LookupTypeAhead
      field={{
        DisplayName: "Agreement Group",
        LookupObjectName: "APTS_Agreement_Groups_c",
        AgreementId: agreementId
      }}
      value={form.agreementGroup}
      onChange={(rec) => setForm({ ...form, agreementGroup: rec })}
      searchFn={searchLookupRecords}
    />
  </div>

  {/* Row 3 */}
  <div className="field full">
    <label>Start Date</label>
    <input type="date" onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
  </div>

  <div className="field full">
    <label>End Date</label>
    <input type="date" onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
  </div>

  {/* Row 4 */}
  <div className="field full">
    <label>* OIT Value</label>
    <input
      type="number"
      value={form.oitValue}
      onChange={(e) => setForm({ ...form, oitValue: e.target.value })}
    />
  </div>

  <div className="field full">
    <label>* Current over achievement</label>
    <input
      type="number"
      value={form.currentOverAchievement}
      onChange={(e) =>
        setForm({ ...form, currentOverAchievement: e.target.value })
      }
    />
  </div>

  {/* Row 5 */}
  <div className="field full">
    <label>Order Intake Volume Tier</label>
    <select
      value={form.volumeTier}
      onChange={(e) => setForm({ ...form, volumeTier: e.target.value })}
    >
      <option value="">Select an Option</option>
      {volumeTiers.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>

  <div className="field full">
    <label>Sync to SAP</label>
    <select
      value={form.syncToSAP}
      onChange={(e) => setForm({ ...form, syncToSAP: e.target.value })}
    >
      <option value="">Select an Option</option>
      {syncOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>

  {/* Row 6 */}
  <div className="field full">
    <label>OIT start date</label>
    <input type="date" onChange={(e) => setForm({ ...form, oitStartDate: e.target.value })} />
  </div>

  <div className="field full">
    <label>OIT end date</label>
    <input type="date" onChange={(e) => setForm({ ...form, oitEndDate: e.target.value })} />
  </div>

  {/* Row 7 */}
  <div className="field full">
    <label>External Identifier</label>
    <input
      type="text"
      onChange={(e) => setForm({ ...form, externalId: e.target.value })}
    />
  </div>

  <div className="field full">
    <label>Locked Until date</label>
    <input
      type="date"
      onChange={(e) => setForm({ ...form, lockedUntil: e.target.value })}
    />
  </div>

  {/* Row 8 (Checkbox row like screenshot) */}
  <div className="checkbox-container">
    <input
      type="checkbox"
      onChange={(e) =>
        setForm({ ...form, autoTierReview: e.target.checked })
      }
    />
    <label>Automatic Tier Review</label>
  </div>

  <div className="checkbox-container">
    <input
      type="checkbox"
      onChange={(e) =>
        setForm({ ...form, lockedForTier: e.target.checked })
      }
    />
    <label>Locked for Tier changes</label>
  </div>

</div>
    </div>
  );
}