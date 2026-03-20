import { useEffect, useState } from "react";
import { GetPicklist } from "../api/GetPicklist";

function EditBillingPlanForm({ data, onChange, onComplete }) {
  const [billingOptions, setBillingOptions] = useState([]);
//   const [error, setError] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await GetPicklist("APTS_BillingPlan_c");
        if (res?.Success) {
          setBillingOptions(res.Data.PicklistMetadata[0].PicklistEntries);
        }
      } catch (err) {
        console.error("Billing picklist error:", err);
      }
    };

    fetchOptions();
  }, []);

  return (
    <div className="form-card">
      <div className="section-header">Billing Plan</div>
  <table className="data-table billing-table">
        <thead>
          <tr>
            <th>Product Name</th>
          
            <th>Billing Plan</th>
          </tr>
        </thead>
        <tbody>
         <tr>
              <td>{data.APTS_Match_Products_By_c==='Hierarchy'? data?.Matching_c 
                  :data.APTS_Match_Products_By_c==='Product'?data.Product.Name:''}</td>
            {/* <td>{data?.Matching_c} {data?.Code_c}</td> */}
            <td><div className="field">
        <label>Billing Plan *</label>
        <select
          value={data.APTS_BillingPlan_c || ""}
          onChange={(e) =>
            onChange("APTS_BillingPlan_c", e.target.value)
          }
        >
          <option value="">Select</option>
          {billingOptions.map((opt) => (
            <option key={opt.Value} value={opt.Value}>
              {opt.Label || opt.Value}
            </option>
          ))}
        </select>
      </div></td>
         </tr>
        </tbody>
      </table>
      

    </div>
  );
}

export default EditBillingPlanForm;
