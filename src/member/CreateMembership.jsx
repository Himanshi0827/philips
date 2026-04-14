import { useState } from "react";
import LookupTypeAhead from "../components/LookupTypeAhead";
import { searchLookupRecords } from "../api/SearchLookup";
import { createMember } from "../api/member"; // you will create this

export default function CreateMembership({ onBack }) {
  const agreementId = sessionStorage.getItem("agreementId");

  const [form, setForm] = useState({
    member: null,
    agreement: null,
    agreementGroup: null,
    startDate: "",
    endDate: "",
    syncToSAP: "Yes",
    externalId: "",
    excludeCommitment: false
  });

  const handleSave = async () => {
    try {
      const payload = {
        Name:"him",
        // APTS_Member__c: form.member?.Id,
        // APTS_Related_Agreement__c: agreementId,
        // APTS_Agreement_Group__c: form.agreementGroup?.Id,
        // APTS_Start_Date__c: form.startDate,
        // APTS_End_Date__c: form.endDate,
        // APTS_Sync_To_SAP__c: form.syncToSAP === "Yes",
        // APTS_External_Identifier__c: form.externalId,
        // APTS_Excluded_From_Commitment__c: form.excludeCommitment
      };
console.log("member",payload);
      await createMember(payload);
      alert("Member created successfully");
      onBack();
    } catch (err) {
      console.error(err);
      alert("Error creating member");
    }
  };

  return (
    <div className="form-container">

      {/* HEADER */}
      <div className="form-header">
        <button onClick={onBack}>Back To List</button>
        <button className="primary" onClick={handleSave}>
          Save New Member
        </button>
      </div>

      <div className="section-title">Member Details</div>

      <div className="form-grid">

        {/* SELECT MEMBER */}
        <div>
          <label>* Select Member</label>
          <LookupTypeAhead
            field={{
              DisplayName: "Member",
              LookupObjectName: "Account"
            }}
            value={form.member}
            onChange={(rec) => setForm({ ...form, member: rec })}
            searchFn={searchLookupRecords}
          />
        </div>

        {/* RELATED AGREEMENT */}
        <div>
          <label>* Related Agreement</label>
          <input value={agreementId} disabled />
        </div>

        {/* AGREEMENT GROUP */}
        <div className="full-width">
          <label>Agreement Group</label>
          <LookupTypeAhead
            field={{
              DisplayName: "Agreement Group",
              LookupObjectName: "APTS_Agreement_Groups_c",
              AgreementId: agreementId
            }}
            value={form.agreementGroup}
            onChange={(rec) =>
              setForm({ ...form, agreementGroup: rec })
            }
            searchFn={searchLookupRecords}
          />
        </div>

        {/* DATES */}
        <div>
          <label>Start Date</label>
          <input
            type="date"
            onChange={(e) =>
              setForm({ ...form, startDate: e.target.value })
            }
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            onChange={(e) =>
              setForm({ ...form, endDate: e.target.value })
            }
          />
        </div>

        {/* SYNC */}
        <div>
          <label>Sync to SAP</label>
          <select
            onChange={(e) =>
              setForm({ ...form, syncToSAP: e.target.value })
            }
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* CHECKBOX */}
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              setForm({
                ...form,
                excludeCommitment: e.target.checked
              })
            }
          />
          <label>Excluded from Commitment</label>
        </div>

        {/* EXTERNAL ID */}
        <div className="full-width">
          <label>External Identifier</label>
          <input
            type="text"
            onChange={(e) =>
              setForm({ ...form, externalId: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}