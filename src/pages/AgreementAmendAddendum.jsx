import { useState, useEffect } from "react";
import { getAgreementById, getAmendAgreement, createAgreementGroup, createAgreementLineItem,  createAgreement,updateAgreement } from "../api/api";
import { queryAgreementLineItemsByAgreement, queryAgreementGroupByAgreement } from "../api/queryAgreementLineItemsByAgreement";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../AgreementExtension.css";
import { toast } from "react-toastify";
 
export default function AgreementAmendAddendum() {
 

    const navigate = useNavigate();
 
    
 const { agreementId } = useParams();   // 👈 from URL
const location = useLocation();
 
const id =
  agreementId ||                      // ✅ FIRST priority (URL)
  location.state?.agreementId ||     // fallback (navigation)
  null;
 
if (!id) {
  console.error("Agreement ID not found in URL or state");
}

    const [agreement, setAgreement] = useState(null);
    const [agreementType, setAgreementType] = useState("Amendment");
    const [pppValue, setPppValue] = useState("");
    const [isDealAgreement, setIsDealAgreement] = useState(false);
 
    useEffect(() => {
        loadAgreement();
    }, []);
    const getErrorMessage = (err) => {
        if (!err) return "Unknown error";
 
        if (typeof err === "string") return err;
 
        if (err.message) return err.message;
 
        if (err.Errors && err.Errors.length > 0) {
            return err.Errors[0].Message;
        }
 
        if (err.error) return err.error;
 
        try {
            return JSON.stringify(err);
        } catch {
            return "Unexpected error occurred";
        }
    };
    const loadAgreement = async () => {
        const data = await getAgreementById(id);
 
        const agr = data[0];
 
        setAgreement(agr);
 
        // Deal agreement check (same as Apex)
        if (agr.RecordType === "Deal") {
            setIsDealAgreement(true);
            setPppValue(agr.SpecialTerms || "");
        }
    };
 
    const handleContinue = async () => {
      //  if(agreementType==="Amendment")
       // {
        try {
 
            if (isDealAgreement && !pppValue) {
                alert("Purpose, Process, Payoff, Spec. Terms is required");
                return;
            }
 
            // 1️⃣ Clone Agreement
            let newAgreementId;

try {

  // Step 1: clone agreement using amend API
  newAgreementId = await getAmendAgreement(id);

  if (!newAgreementId) {
    toast.error("Failed to clone agreement");
    return;
  }

  if (agreementType === "Amendment") {

    toast.success("Agreement amended successfully");

  } else if (agreementType === "Addendum") {

    // Step 2: update only the name
    const updatePayload = {
      Name: `${agreement.Name} Addendum`
    };

    await updateAgreement(newAgreementId, updatePayload);

    toast.success("Agreement Addendum created successfully");
  }

} catch (err) {

  toast.error(getErrorMessage(err));
  return;

}

            //  Fetch old groups
            let oldGroups;
 
            try {
                oldGroups = await queryAgreementGroupByAgreement(id);
                console.log("Old groups",oldGroups);
            } catch (err) {
                toast.error(getErrorMessage(err));
                return;
            }
 
 
            const groupMapping = {};
            let status=false;
            // 3️⃣ Create new groups
            for (const grp of oldGroups) {
 
                try {
 
                    const newGroupPayload = {
                        Name: grp.Name,
                        APTS_Agreement_c: newAgreementId
                    };
 
                    const createdGroup = await createAgreementGroup(newGroupPayload);
                    status= createdGroup?.Success;
                    const newGroupId = createdGroup?.Data;
                    groupMapping[grp.Id] = newGroupId;
 
                } catch (err) {
                    toast.error(getErrorMessage(err));
                    return;
                }
            }
            if(status)
            {
                toast.success("Agreement groups are Amended successfully");
            }
            console.log("Group Mapping", groupMapping);
 
 
            // 4️⃣ Fetch old line items
            let oldLineItems;
 
            try {
                oldLineItems = await queryAgreementLineItemsByAgreement(id);
            } catch (err) {
                alert("Failed to fetch agreement line items: " + getErrorMessage(err));
                return;
            }
            let final_status=false;
            // 5️⃣ Clone line items
            for (const line of oldLineItems) {
 
                try {
 
                    const oldGroupId = line?.APTS_Agreement_Group_c?.Id;
                    const newGroupId = groupMapping[oldGroupId];
 
                    const linePayload = {
                        Name: line.Name,
                        Agreement: newAgreementId,
                        Description: line.Description,
                        APTS_Agreement_Group_c: { Id: newGroupId },
                        APTS_Billing_Plan_c: line.APTS_Billing_Plan_c,
                        APTS_Discount_Type_c: line.APTS_Discount_Type_c,
                        APTS_Match_Products_By_c: line.APTS_Match_Products_By_c,
                        APTS_MG3_Service_c: line.APTS_MG3_Service_c,
                        Line_Type_c: line.Line_Type_c
                    };
 
                    if (line.Product?.Id) {
                        linePayload.Product = { Id: line.Product.Id };
                    }
 
                    if (line.Hierarchy_c?.Id) {
                        linePayload.Hierarchy_c = { Id: line.Hierarchy_c.Id };
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
                        "APTS_Volume_Threshold_5_c"
                    ];
 
                    discountFields.forEach(field => {
                        if (line[field] !== null && line[field] !== undefined) {
                            linePayload[field] = line[field];
                        }
                    });
 
                    const response=await createAgreementLineItem(linePayload);
                    final_status=response?.Success;
                } catch (err) {
                    toast.error(getErrorMessage(err));
                    return;
                }
            }
            if(final_status)
            {
                toast.success("AgreementLineItems are Amended successfully");
            }
         window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`;
            // navigate(`/agreement/${newAgreementId}`);
        } catch (err) {
            alert("Unexpected error: " + getErrorMessage(err));
            console.error(err);
        }
 
    };
    if (!agreement) return <div>Loading...</div>;
 
    return (
        <div className="agreement-page">
 
            <div className="header">
                <h1>Agreement changes: Amendment or Addendum</h1>
 
                <div className="header-buttons">
                    <button className="btn primary" onClick={handleContinue}>
                        Continue
          </button>
 
                    <button className="btn" onClick={() => window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`}>
                        Cancel
          </button>
                </div>
            </div>
 
            <div className="section">
 
                <div className="section-header">
                    <span className="arrow">▾</span>
                    <span>Agreement Change Type</span>
                </div>
 
                <div className="form-container">
 
                    <div className="form-row">
                        <label>Select applicable agreement changes type</label>
 
                        <select
                            value={agreementType}
                            onChange={(e) => setAgreementType(e.target.value)}
                        >
                            <option value="Amendment">Amendment</option>
                            <option value="Addendum">Addendum</option>
                        </select>
                    </div>
 
                    {isDealAgreement && (
                        <div className="form-row">
                            <label>
                                Purpose, Process, Payoff, Spec. Terms
              </label>
 
                            <textarea
                                value={pppValue}
                                onChange={(e) => setPppValue(e.target.value)}
                            />
                        </div>
                    )}
 
                    <div className="bottom-buttons">
                        <button className="btn primary" onClick={handleContinue}>
                            Continue
            </button>
 
                        <button className="btn" onClick={() => window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`}>
                            Cancel
            </button>
                    </div>
 
                </div>
            </div>
 
        </div>
    );
}