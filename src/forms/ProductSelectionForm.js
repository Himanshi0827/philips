import HierarchyLookupList from "../components/HierarchyLookupList";
import {GetRecords} from "../api/Records";
import { useState,useEffect } from "react";
import { GetPicklist } from "../api/GetPicklist";
import LookupTypeAhead from "../components/LookupTypeAhead";
import { searchLookupRecords } from "../api/SearchLookup";
import { getParentProduct } from "../api/GetParentProduct";
import { getProductsByParent } from "../api/GetProductsByParent";
import ParentProductLookup from "../components/ParentProductLookup";
import {toast} from "react-toastify";

const isValid=(checkchild=[] ,checkingparent=[])=>
{

  if(checkchild.length===0) return false;
  const filtered= checkchild.filter(r=>r.Configuration==="Option");
  console.log("Filtered",filtered);
  const childId=new Set(filtered.map(c=>c.Id));
  const parentChildIds=new Set(checkingparent.map(p=>p.ChildId));
  const result=[...childId].filter(id=>!parentChildIds.has(id));
  const resultId= new Set(result);
  const final=filtered.filter(c=>resultId.has(c.Id));
  console.log("hello himu",{isValid:result.length===0,
  final});
  return {isValid:result.length===0,
  final};
}
 
function ProductSelectionForm({ data,onProductsChange , onChange,onComplete }) {
  const [form, setForm] = useState({
    LineType: "",
    MatchProductsBy: "",
    SelectMPGs: ""
  });
 
 const [checkParent,setCheckParent]= useState(false);
// Change these lines:
const [parentProduct, setParentProduct] = useState(null);
const [showParentLookup, setShowParentLookup] = useState(false);
const [allowedParentProducts, setAllowedParentProducts] = useState([]);
 
const [selectedBUs, setSelectedBUs] = useState(data.selectedBUs || []);
const [selectedMAGs, setSelectedMAGs] = useState(data.selectedMAGs || []);
const [selectedAGs, setSelectedAGs] = useState(data.selectedAGs || []);
const [selectedMG3, setSelectedMG3] = useState(data.selectedMG3 || "");


const [selectedProducts, setSelectedProducts]=useState(data.selectedProducts ||[]);
  const [linetypes,setLineType]= useState([]);
  const [matchproducts,setMatchProducts]=useState([]);
 const [parentOptions, setParentOptions] = useState([]);
 const [mg3List, setMg3List] = useState([]);
 
 
 
const [product , setProduct]=useState([])
//try

const [children, setChildren] = useState([]);


useEffect(() => {
  const refreshParentOptions = async () => {
    if (data.MatchProductsBy === "Product" && data.selectedProducts?.length > 0) {
      
      const resultsArray = await Promise.all(
        data.selectedProducts.map(record => getParentProduct(record))
      );
      
      const allParentData = resultsArray.flat().filter(item => item && item.Id);

      if (allParentData.length > 0) {
        // 1. Get unique Parent IDs by using a string map instead of a Set of objects
        const parentRequests = allParentData.map(async (item) => {
          const detail = await getProductsByParent(item); // item has Id, ChildId, etc.
          return detail;
        });

        const childrenResults = await Promise.all(parentRequests);
        const flattenedResults = childrenResults.flat();

        // 2. Use a Composite Key (ParentId + ChildId) to ensure uniqueness in the UI
        const uniqueMap = new Map();
        flattenedResults.forEach(p => {
          const compositeKey = `${p.Id}-${p.ChildId}`;
          if (!uniqueMap.has(compositeKey)) {
            uniqueMap.set(compositeKey, {
              ...p,
              CompositeKey: compositeKey
            });
          }
        });

        const finalOptions = Array.from(uniqueMap.values());

        // 3. Update State
        setShowParentLookup(true);
        setParentOptions(finalOptions);
        
        // Note: console.log(parentOptions) here will still show old data.
        // Check your UI or use a separate useEffect to log parentOptions.
      } else {
        setShowParentLookup(false);
      }
    } else {
      setShowParentLookup(false);
      setParentOptions([]);
    }
  };

  refreshParentOptions();
}, [data.selectedProducts, data.MatchProductsBy]);

const handleProductSelect = async (record) => {
  handleAddRecord(record);

  const parentData = await getParentProduct(record);

  if (parentData && Array.isArray(parentData)) {
    const allParentIds = [
      ...new Set(
        parentData
          .filter(item => item.ParentProduct?.Id)
          .map(item => item.ParentProduct.Id)
      )
    ];

    if (allParentIds.length > 0) {
      setShowParentLookup(true);

      const results = await Promise.all(
        allParentIds.map(id => getProductsByParent(id))
      );

      const uniqueParents = Array.from(
        new Map(results.flat().map(p => [p.ChildId, p])).values()
      );
      setParentOptions(uniqueParents);

    } else {
      setShowParentLookup(false);
    }
  }
};


//try
useEffect(() => {
  if (data.MatchProductsBy === "Hierarchy") {
 
    loadHierarchyData();
    setSelectedMG3(data.selectedMG3 || "");
    setSelectedBUs(data.selectedBUs || []);
    setSelectedMAGs(data.selectedMAGs || []);
    setSelectedAGs(data.selectedAGs || []);
  }
}, [data.MatchProductsBy]);
const buildHierarchySelectedRecords = () => {
  const records = product.filter(p => {
 
    // BU must match (mandatory)
    const buMatch = selectedBUs.some(
      bu => bu.Business_Unit_ID_c === p.Business_Unit_ID_c
    );
 
    if (!buMatch) return false;
 
    // CASE 1: Only BU selected
    if (selectedMAGs.length === 0 && selectedAGs.length === 0) {
      return (
        !p.Main_Article_Group_ID_c &&
        !p.Article_Group_ID_c
      );
    }
 
    // CASE 2: BU + MAG selected (AG not selected)
    if (selectedMAGs.length > 0 && selectedAGs.length === 0) {
      return (
        selectedMAGs.some(
          mag => mag.Main_Article_Group_ID_c === p.Main_Article_Group_ID_c
        ) &&
        !p.Article_Group_ID_c
      );
    }
 
    // CASE 3: BU + MAG + AG selected
    if (selectedMAGs.length > 0 && selectedAGs.length > 0) {
      return (
        selectedMAGs.some(
          mag => mag.Main_Article_Group_ID_c === p.Main_Article_Group_ID_c
        ) &&
        selectedAGs.some(
          ag => ag.Article_Group_ID_c === p.Article_Group_ID_c
        )
      );
    }
 
    return false;
  });
 
  const mapped = records.map(p => ({
    Id: p.Id,
    Name: p.Name
  }));
 
  onChange({
    selectedRecords: mapped
  });
};
 

 
const loadHierarchyData = async () => {
  try {
    const mg3 = await GetPicklist("APTS_MG3_Service_c");
    if (mg3?.Success) {
      setMg3List(mg3.Data.PicklistMetadata[0].PicklistEntries);
    }
 
    const products = await GetRecords("Product_Hierarchy_c");
    setProduct(products.Data);
 
    // ADD THIS: Save the full product data to the parent so NewAgreement can use it for mapping
    onChange({ productData: products.Data });
   
  } catch (err) {
    console.error(err);
  }
};

//trial
const businessUnits = product.filter(
  (p, index, self) =>
    p.Business_Unit_ID_c &&
    index === self.findIndex(
      x => x.Business_Unit_ID_c === p.Business_Unit_ID_c
    ) &&
    !selectedBUs.some(bu => bu.Business_Unit_ID_c === p.Business_Unit_ID_c)
);
const mainArticleGroups = product.filter(
  (p, index, self) =>
    selectedBUs.some(
      bu => bu.Business_Unit_ID_c === p.Business_Unit_ID_c
    ) &&
    p.Main_Article_Group_ID_c &&
    index === self.findIndex(
      x =>
        x.Main_Article_Group_ID_c === p.Main_Article_Group_ID_c &&
        x.Business_Unit_ID_c === p.Business_Unit_ID_c
    ) &&
    !selectedMAGs.some(
      mag => mag.Main_Article_Group_ID_c === p.Main_Article_Group_ID_c
    )
);
const articleGroups = product.filter(
  (p, index, self) =>
    selectedMAGs.some(
      mag =>
        mag.Main_Article_Group_ID_c === p.Main_Article_Group_ID_c
    ) &&
    p.Article_Group_ID_c  &&
    !selectedAGs.some(
      ag => ag.Article_Group_ID_c === p.Article_Group_ID_c
    )
);




useEffect(()=>
{
  const result= isValid(
    data?.selectedProducts,
    data?.selectedParentProducts
  );
  setCheckParent(result);
  if(result.isValid)
  {
    onProductsChange( data?.selectedProducts);
  }
  else 
  {
    onProductsChange([]);
    result?.final?.forEach(pr=>{
      if(pr.Configuration==="Option")
      {
        toast.warning(`Please select atleast 1 Parent Product for Option product [${pr.Name}. • ${pr.ProductCode}] to enable Create Button`)}
      }
    );
  }

  console.log("Checking Boolean Value",result);

},[data?.selectedProducts,data?.selectedParentProducts])
 
// const checkerFunc=(parent)=>
// {
  // const unique= new Set(data.selectedProducts.map(c=>c.Id));
  // console.log(unique);
  // const parents=[...data.selectedParentProducts.filter(p=>p.Id !== parent?.Id),parent];
  // console.log(unique.has(parent.ChildId));
  // console.log(parents);
  // const check=parents.every((p)=> unique.has(p.ChildId));
  // console.log("Trying until I lose!!",check);
  // if(check)
  // {
  //   onProductsChange(parents);
  // }
  // else 
  // {
  //   onProductsChange(parents);
  // }
  // setCheckParent(check);
//   const product=data?.selectedProducts??[];
//   const currentparent=data?.selectedParentProducts?? [];
//   const selected_parents=[...currentparent,parent];
//   const parentChilds= new Set( selected_parents.map(p=>p.ChildId));
//   const result=product.every(child=> parentChilds.has(child.Id));
//   console.log("Trying parent",result);
//   if(result)
//   {
//     onProductsChange(selected_parents);
//   }
//   else{
//     onProductsChange([]);
//   }
//   setCheckParent(result);
// }

 
const handleSelectBU = (record) => {
  const newList = [...selectedBUs, record]; // Create the new list first
  setSelectedBUs(newList); // Update local
  onChange({ selectedBUs: newList }); // Sync with parent using the NEW list
  onProductsChange(newList);
};
const handleRemoveBU = (buId) => {
  // 1. Update local state so it reappears in the available list
  const updatedList = selectedBUs.filter(item => item.Business_Unit_ID_c !== buId);
  setSelectedBUs(updatedList);
  onProductsChange(updatedList);
  // 2. Clear dependent selections (MAGs and AGs) because the parent BU is gone
  setSelectedMAGs([]);
  setSelectedAGs([]);
 
  // 3. Notify parent component
  onChange({ selectedBUs: updatedList });
};
const handleSelectMAG = (record) => {
  const newList = [...selectedMAGs, record];
  setSelectedMAGs(newList);
  onChange({ selectedMAGs: newList });
};
 
const handleRemoveMAG = (buId) => {
  // 1. Update local state so it reappears in the available list
  const updatedList = selectedMAGs.filter(item => item.Main_Article_Group_ID_c !== buId);
  setSelectedMAGs(updatedList);
 
  // 2. Clear dependent selections (MAGs and AGs) because the parent BU is gone
  //setSelectedMAGs([]);
  setSelectedAGs([]);
 
  // 3. Notify parent component
  onChange({ selectedMAGs: updatedList });
};
 
const handleSelectAG = (record) => {
  const newList = [...selectedAGs, record];
  setSelectedAGs(newList);
  onChange({ selectedAGs: newList });
};
const handleRemoveAG = (buId) => {
  // 1. Update local state so it reappears in the available list
  const updatedList = selectedAGs.filter(item => item.Article_Group_ID_c!== buId);
  setSelectedAGs(updatedList);
 
  // 2. Clear dependent selections (MAGs and AGs) because the parent BU is gone
 
 
  // 3. Notify parent component
  onChange({ selectedAGs: updatedList });
};
//end
  useEffect(()=>
  {
  const handleAgreement = async ()=>
  {
    try{
      const res1= await GetPicklist("Line_Type_c");
      const res2= await GetPicklist("APTS_Match_Products_By_c");
      if(res1.Success)
      {
        setLineType(res1.Data.PicklistMetadata[0].PicklistEntries);
      }
      if(res2.Success)
      {
        setMatchProducts(res2.Data.PicklistMetadata[0].PicklistEntries);
      }
    }
    catch(err)
    {
      console.error("Failed to fetch ",err);
    }
  };
  handleAgreement();
},[]);
 
  const [error, setError] = useState("");
 
  const handleChange = (e) => {
    onChange({
      [e.target.name]:e.target.value,
    });
    console.log(e.target.value);
    if(e.target.value==="Hierarchy")
    {
      onChange({ selectedProducts: [] });
      onChange({ selectedParentProducts: []});
      
    }
    else if(e.target.value==="Product")
    {
      console.log("working");

      onChange({ selectedBUs:[]});
      onChange({ selectedMAGs:[]});
      onChange({ selectedAGs:[]});
      onChange({ selectedMG3:""});
    }
    setForm({
      ...form,
      [e.target.name]:[e.target.value]
    });
  };
  console.log("Parent Product check ",data?.selectedParentProducts);
 
   const handleAddRecord = (record) => {
    if (!record) return;
 
    // prevent duplicates
    //const exists = data.selectedRecords?.some(r => r.Id === record.Id);
    const exists = data.selectedProducts?.some(r => r.Id === record.Id);
    if (exists) return;
    const newProducts=[...selectedProducts,record];
    setSelectedProducts(newProducts);
   
    
    onChange({
      selectedProducts: [...(data.selectedProducts || []), record]
    });
    console.log(record.Configuration);
    if(record.Configuration==="Option")
    {
      // toast.warning(`Please select atleast 1 Parent Product for Option product [${record.Name}. • ${record.ProductCode}] to enable Create Button`);
      onProductsChange([]);
    }
    else if((record.Configuration==="Bundle" || record.Configuration==="Standalone") && checkParent){
      // onProductsChange(newProducts);
      console.log("bundle check ",checkParent);
      onProductsChange(newProducts);
    }
    
  };
   const handleRemoveRecord=(record) =>
  {
    const newProducts=selectedProducts.filter(item=> item.Id!== record.Id);
    setSelectedProducts(newProducts);
    onChange({selectedProducts:newProducts});
    onProductsChange(newProducts);
  }
 
 
const handleNext = () => {
 
  if (!data.LineType || !data.MatchProductsBy) {
    setError("Please fill all the fields before proceeding.");
    return;
  }
 
  if (data.MatchProductsBy === "Hierarchy") {
    buildHierarchySelectedRecords();
 
    onChange({
      Field: "Hierarchy_c"
    });
  }
 
  setError("");
 
  onComplete();
};
 // Add this useEffect to sync Hierarchy selections automatically
useEffect(() => {
  if (data.MatchProductsBy === "Hierarchy" && selectedBUs.length > 0) {
    buildHierarchySelectedRecords();
    onChange({
      Field: "Hierarchy_c"
    });
  }
}, [selectedBUs, selectedMAGs, selectedAGs]);
  return (
    <div className="form-card">
      <div className="section-header">
        Product Selection
      </div>
 
      <table className="form-table">
        <tbody>
 
          <tr>
            <td className="label">Line Type</td>
            <td>
              <select 
              // className="custom-select"
                name="LineType"
                value={data.LineType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {linetypes.map(linetype => (
                  <option key={linetype.Value}>
                  {linetype.Value}
                  </option>
                ))} </select>
            </td>
          </tr>
 
          <tr>
            <td className="label">Match Products by</td>
            <td>
              <select
                name="MatchProductsBy"
                value={data.MatchProductsBy}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {matchproducts.map(matchproduct => (
                  <option key={matchproduct.Value}>
                  {matchproduct.Value}
                  </option>
                ))}
              </select>
            </td>
          </tr>
 {data.MatchProductsBy === "Hierarchy" && (
  <>
    {/* MG3 */}
    <tr>
      <td className="label">MG3</td>
      <td>
        <select
  value={selectedMG3}
  onChange={(e) => {
    const val = e.target.value;
    setSelectedMG3(val);
    onChange({ selectedMG3: val }); // Save to parent!
  }}
>
        {/* <select
          value={selectedMG3}
          onChange={(e) => setSelectedMG3(e.target.value)}
        > */}
          <option value="">Select</option>
          {mg3List.map(mg => (
            <option key={mg.Value} value={mg.Value}>
              {mg.Value}
            </option>
          ))}
        </select>
      </td>
    </tr>
 
    {/* Hierarchy Search List */}
    <tr>
    <td className="label">Select Business Unit</td>
    <td>
      <HierarchyLookupList
        // BusinessUnits filter will now automatically include items removed from selectedBUs
        records={businessUnits}
        onSelect={handleSelectBU}
        check ='Business Unit'
      />
    </td>
  </tr>
   
   {/* SELECTED BUs DISPLAY */}
  {selectedBUs.length > 0 && (
    <tr>
      <td className="label">Selected Business Units</td>
      <td>
        <div className="list-box">
          {selectedBUs.map((bu) => (
            <div key={bu.Business_Unit_ID_c} className="list-item selected">
              {/* FIX: Showing Name and ID */}
              <span>{bu.Business_Unit_Name_c} /{bu.Business_Unit_ID_c}</span>
              <span
                className="remove"
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
                onClick={() => handleRemoveBU(bu.Business_Unit_ID_c)}
              >
                ✖
              </span>
            </div>
          ))}
        </div>
      </td>
    </tr>
  )}
 
  {/* MAIN ARTICLE GROUP SECTION */}
  {selectedBUs.length > 0 && (
    <tr>
      <td className="label">Main Article Group</td>
      <td>
        <HierarchyLookupList
          records={mainArticleGroups}
          onSelect={handleSelectMAG}
          check='MAG'
        />
      </td>
    </tr>
  )}
 
{selectedMAGs.length > 0 && (
    <tr>
      <td className="label">Selected MAGs</td>
      <td>
        <div className="list-box">
          {selectedMAGs.map((bu) => (
            <div key={bu.Main_Article_Group_ID_c} className="list-item selected">
              {/* FIX: Showing Name and ID */}
             {bu.Main_Article_Group_Name_c} /{bu.Main_Article_Group_ID_c}
              <span
                className="remove"
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
                onClick={() => handleRemoveMAG(bu.Main_Article_Group_ID_c)}
              >
                ✖
              </span>
            </div>
          ))}
        </div>
      </td>
    </tr>
  )}
{selectedMAGs.length > 0 && (
   <tr>
    <td className="label">Article Group</td>
    <td>
  <HierarchyLookupList
    records={articleGroups}
    onSelect={handleSelectAG}
    check='AG'
  />
   </td>
  </tr>
)}
 
{selectedAGs.length > 0 && (
    <tr>
      <td className="label">Selected AGs</td>
      <td>
        <div className="list-box">
          {selectedAGs.map((bu) => (
            <div key={bu.Article_Group_ID_c} className="list-item selected">
              {/* FIX: Showing Name and ID */}
             {bu.Article_Group_Name_c} /{bu.Article_Group_ID_c}
              <span
                className="remove"
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
                onClick={() => handleRemoveAG(bu.Article_Group_ID_c)}
              >
                ✖
              </span>
            </div>
          ))}
        </div>
      </td>
    </tr>
  )}
 
  </>
)}
 
          {data.MatchProductsBy === "MPG" && (
          <tr>
          <td className="label">Select MPGs</td>
          <td>
          <LookupTypeAhead
              field={{
                DisplayName: "Select MPG",
                LookupObjectName: "SelectMPG_c"
                }}
              value={null}   // always empty to allow multi add
              onChange={(record) => {
                  onChange({ Field: "SelectMPGs_c" });
                  handleAddRecord(record);
                }}
              searchFn={searchLookupRecords}
            />
          </td>
        </tr> )}
 
 
       
 
     
 {data.MatchProductsBy === "Product" && (
  <tr>
    <td className="label">Select Product</td>
    <td>
      <LookupTypeAhead
        field={{
          DisplayName: "Select Product",
          LookupObjectName: "Product",
          isProductLookup: true
        }}
        value={null}
        onChange={handleProductSelect}
        searchFn={searchLookupRecords}
      />
    </td>
  </tr>
)}
 
        
{/* {data.selectedRecords?.length > 0 && data.MatchProductsBy === "Product" && ( */}
  {data.selectedProducts?.length > 0 && data.MatchProductsBy === "Product" && (
  <tr className="manual-selection-row">
    <td className="label"> Selected Product</td>
    <td>
      <div className="list-box manual-box">
        {/* {data.selectedRecords.map((r, i) => ( */}
           {data.selectedProducts.map((r, i) => (
          <div key={i} className="list-item manual">
            <span>📦 {r.Name}</span>
            <span
              className="remove"
              onClick={() => {
  const updated = selectedProducts.filter(p => p.Id !== r.Id);
  setSelectedProducts(updated);
  onChange({ selectedProducts: updated });
  onProductsChange(updated);
}}
              
            >✖</span>
          </div>
        ))}
      </div>
    </td>
  </tr>
)}

{data.MatchProductsBy === "Product" && showParentLookup && data.selectedProducts?.length>0 (
  <tr>
    <td className="label">Select Parent Product</td>
    <td>
      <ParentProductLookup
        records={parentOptions}
        onSelect={(parent) => {
      const current = data.selectedParentProducts || [];
      // checkerFunc(parent);
  // Allow selection if this specific Parent-Child pair isn't already there
  if (!current.some(p => p.Id === parent.Id && p.ChildId === parent.ChildId)) {
    onChange({
      selectedParentProducts: [...current, parent]
    });
    // checkerFunc(parent);
    console.log(checkParent);
    if(checkParent)
    {
      onProductsChange(data.selectedProducts);
    }
  }
}}

      />
    </td>
  </tr>
)}


{data.MatchProductsBy === "Product" && data.selectedParentProducts?.length > 0 && (
  <tr>
    <td className="label">Selected Parent Products</td>
    <td>
      <div className="list-box">
        {data.selectedParentProducts.map(p => (
          <div key={p.Id} className="list-item">
            🧩 {p.Name} --{p.ChildName}
            <span
              className="remove"
              onClick={() =>{
                onChange({
                  selectedParentProducts: data.selectedParentProducts.filter(x => x.Id !== p.Id)
                });
                const update=data.selectedParentProducts.filter(x=>x.Id!==p.Id);
                // onProductsChange(update);
                // checkerFunc(update);
                onProductsChange(update);
              }
              }
            >✖</span>
          </div>
        ))}
      </div>
    </td>
  </tr>
)}

 
          {data.MatchProductsBy==="Pricing Family" && <tr>
            <td className="label">Select Pricing Family</td>
            <td>
            <LookupTypeAhead
            field={{
              DisplayName: "Select Pricing Family",
              LookupObjectName: "PricingFamily_c"}}
            value={data.FieldName}   // { Id, Name }
            onChange={(record) =>
              onChange({
                FieldName: record,        // store full object
                FieldId: record?.Id,
                Field:"PricingFamily_c"   // store Id separately if needed
              })}
            searchFn={searchLookupRecords}
            />
            </td>
          </tr>}
 
 
        </tbody>
      </table>
 
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          {error}
        </div>
      )}
 
      
    </div>
  );
}
 
export default ProductSelectionForm;