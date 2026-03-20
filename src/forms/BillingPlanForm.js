import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { GetPicklist } from "../api/GetPicklist"; 
 
function BillingPlanForm({ data, product, onComplete, onSubmit, onChange, onChangeProduct }) {
 // const navigate = useNavigate();
  const [billingOptions, setBillingOptions] = useState([]);
  const [error, setError] = useState("");
  const [billingList, setBillingList] = useState([]);
  const parentFlag = (product?.selectedParentProducts).length >0?true :false;
  console.log("Parent Info",parentFlag);
  // 1. Fetch Picklist
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await GetPicklist("APTS_BillingPlan_c");
        if (res && res.Success) {
          setBillingOptions(res.Data.PicklistMetadata[0].PicklistEntries);
        }
      } catch (err) {
        console.error("Failed to fetch Billing Plan picklist", err);
      }
    };
    fetchOptions();
  }, []);
 
  // 2. Build Hierarchy List (for MatchProductsBy === 'Hierarchy')
  useEffect(() => {
    const buildHierarchyList = (prod) => {
      const final = [];
      prod.selectedBUs?.forEach((bu) => {
        const matchedMAGs = prod.selectedMAGs?.filter(
          (mag) => mag.Business_Unit_ID_c === bu.Business_Unit_ID_c
        ) || [];
        if (matchedMAGs.length === 0) {
          final.push(bu.Business_Unit_Name_c);
        } else {
          matchedMAGs.forEach((mag) => {
            const matchedAG = prod.selectedAGs?.find(
              (ag) => ag.Main_Article_Group_ID_c === mag.Main_Article_Group_ID_c
            );
            final.push(matchedAG ? matchedAG.Article_Group_Name_c : mag.Main_Article_Group_Name_c);
          });
        }
      });
      return [...new Set(final)];
    };
    if (product.MatchProductsBy === 'Hierarchy') {
      setBillingList(buildHierarchyList(product));
    }
  }, [product]);
 
  const handleSelectChange = (name, value) => {
    onChange({ ...data, [name]: value });
  };
 
  const handleProductBilling = (index, value) => {
    const prod = [...product.selectedProducts];
    prod[index].BillingPlan = value;
    onChangeProduct({ selectedProducts: prod });
  };
 
  const handleSave = () => {
    let isAllSelected = true;
    if (product.MatchProductsBy === 'Hierarchy') {
      isAllSelected = billingList.every(name => data[name] && data[name] !== "");
    } else if( product.MatchProductsBy === 'Product') {
      isAllSelected = product.selectedProducts.every(p => p.BillingPlan && p.BillingPlan !== "");
    }
 
    // if (!isAllSelected) {
    //   setError("Error: One or more items are missing a selected Billing Plan.");
    //   return;
    // }
    setError("");
    onSubmit();
  };
 
  return (
    <div className="form-card">
      <div className="section-header">Select Billing Plan</div>
 
      <table className="data-table billing-table">
        <thead>
          <tr>
            <th>Product Name</th>
            {/* Show Parent columns only in Product mode */}
            {product.MatchProductsBy === 'Product' && parentFlag && (
              <>
                <th>Parent Product Name</th>
                <th>Parent Product Code</th>
              </>
            )}
            <th>Billing Plan</th>
          </tr>
        </thead>
        <tbody>
          {/* --- HIERARCHY MODE --- */}
          {product.MatchProductsBy === 'Hierarchy' && billingList.map((name, index) => (
            <tr key={`hier-${index}`}>
              <td>{name}</td>
              <td>
                <select value={data[name] || ""} className={`custom-select ${data[name]?"has=value":""}`} onChange={(e) => handleSelectChange(name, e.target.value)}>
                <option value="" hidden>Select BillingPlan for {name}</option>
                <option value="1">-- None --</option>
                  {billingOptions.map((opt) => (
                    <option key={opt.Value} value={opt.Value}>{opt.Label || opt.Value}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
 
          {/* --- PRODUCT MODE (With Parent/Child Logic) --- */}
          {product.MatchProductsBy === 'Product' && product.selectedProducts.map((p, index) => {
            // Match current child product (p) with the selectedParentProducts array
            const parentInfo = product.selectedParentProducts?.find(
              (parent) => parent.ChildId === p.Id
            );
 
            return (
              <tr key={`prod-${p.Id || index}`}>
                <td>{p.Name}</td>
                {/* Use parentInfo data or leave blank if no parent selected */}
                {parentFlag &&
                  <>
                  <td style={{ backgroundColor: parentInfo ? '#f0f7ff' : 'transparent' }}>
                  {parentInfo?.Name}
                </td>
                <td style={{ backgroundColor: parentInfo ? '#f0f7ff' : 'transparent' }}>
                  {parentInfo?.ProductCode }
                </td>
                </>}
                <td>
                  <select
                    value={p?.BillingPlan || ""}
                    className={`custom-select ${p?.BillingPlan?"has=value":""}`}
                    onChange={(e) => handleProductBilling(index, e.target.value)}
                  >
                    <option value="" hidden>Select Billing Plan for {p.Name}</option>
                    <option value="1" >-- None  --</option>
                    {billingOptions.map((opt) => (
                      <option key={opt.Value} value={opt.Value}>{opt.Label || opt.Value}</option>
                    ))}
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
 
      {error && <div className="error-text" style={{ color: "red", marginTop: "12px" }}>{error}</div>}
 
      {/* <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button className="btn primary" onClick={handleSave}>Submit Agreement</button>
      </div> */}
    </div>
  );
}
 
export default BillingPlanForm;