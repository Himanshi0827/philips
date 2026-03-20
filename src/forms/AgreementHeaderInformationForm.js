
import { useState,useEffect } from "react";
import { GetPicklist } from "../api/GetPicklist";

function AgreementHeaderInformationForm({ data,onChange,onComplete ,agreementHeader}) { //head

  const [AFPaymentSchedules,setAFPaymentSchedule]= useState([]);
  const [PriceUpdateRules,setPriceUpdateRule] =useState([]);
  const [AFison,setAFison] =useState([]);

  useEffect(()=>
  {
  const handleAgreement = async ()=>
  {
    try{
      const res1= await GetPicklist("APTS_GPO_Admin_fee_payment_schedule_c");
      const res2= await GetPicklist("APTS_Country_pricelist_update_rule_c");
      const res3= await GetPicklist("APTS_GPO_Admin_fee_is_based_on_c");
      if(res1.Success)
      {
        setAFPaymentSchedule(res1.Data.PicklistMetadata[0].PicklistEntries);
      }
      if(res2.Success)
      {
        setPriceUpdateRule(res2.Data.PicklistMetadata[0].PicklistEntries);
      }
      if(res3.Success)
      {
        setAFison(res3.Data.PicklistMetadata[0].PicklistEntries);
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

//head
const handleChange = (e) => {
  const { name, value } = e.target;

  onChange({
    [name]: value
  });
};

//head
  const handleNext = () => {

    // Minimal required validation
    if (
      !data.AdministrationFee ||
      !data.AFPaymentSchedule ||
      !data.PriceUpdateRule ||
      !data.AFison
    ) {
      setError("Please fill all required fields before proceeding.");
      return;
    }

    setError("");
    onComplete(); // ✅ mark tab completed & move to next tab
  };
if (!agreementHeader) {
  return <div>Loading agreement header...</div>;
}

  return (
    <div className="form-card">

      {/* SECTION 1 */}
      <div className="section-header">
        Agreement Header Details
      </div>

      <div className="two-column">
        <div className="field">
          <label>Administration Fee %</label>
          {/* head */}
          <input
  type="number"
  value={agreementHeader?.APTS_GPO_Administration_fee_percents_c || ""}
  disabled
/>

          {/* <input type="number" value="3" disabled /> */}
        </div>

        <div className="field toggle-field">
          <label>Exclude Administration Fees</label>
          {/* head */}
          <input
  type="checkbox"
  checked={!!agreementHeader?.APTS_Exclude_Administration_Fees_c}
  disabled
/>


          {/* <input type="checkbox" disabled /> */}
        </div>

        <div className="field">
          <label>Administration Fee Payment Schedule</label>
           {/* head */}
           <input
  type="text"
  value={agreementHeader?.APTS_GPO_Admin_fee_payment_schedule_c || ""}
  disabled
/>

          {/* <input type="text" value="Monthly" disabled /> */}
        </div>

        <div className="field">
          <label>Administration Fee is calculated on</label>
           {/* head */}
           <input
  type="text"
  value={agreementHeader?.APTS_GPO_Admin_fee_based_on_c || ""}
  disabled
/>

          {/* <input type="text" value="Ship to invoice date" disabled /> */}
        </div>

        <div className="field full">
     
          <label>Default Country Pricelist Update Rule</label>

                {/* head */}
                <input
  type="text"
  value={agreementHeader?.APTS_Country_pricelist_update_rule_c || ""}
  disabled
/>

          {/* <input type="text" value="Falling Ceiling" disabled /> */}
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-header mt">
        Agreement Line Item Configuration
        <span className="subtext">
          — overrides the agreement header configuration for this ALI
        </span>
      </div>

      <div className="two-column">
        <div className="field">
          <label>Administration Fee % *</label>
          <input
            type="number"
            name="AdministrationFee"
            value={data.AdministrationFee}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Administration Fee Payment Schedule *</label>
          <select
            name="AFPaymentSchedule"
            value={data.AFPaymentSchedule}
            onChange={handleChange}
          >
         <option value="">---None---</option>
            {AFPaymentSchedules.map(paymentschedule => (
                  <option>
                  {paymentschedule.Value}
                  </option>
                ))}
          </select>
        </div>

        <div className="field">
          <label>Price Update Rule *</label>
          <select
            name="PriceUpdateRule"
            value={data.PriceUpdateRule}
            onChange={handleChange}
          >
            <option value="">---None---</option>
            {PriceUpdateRules.map(priceUpdateRule => (
                  <option>
                  {priceUpdateRule.Value}
                  </option>
                ))}
          </select>
        </div>

        <div className="field">
          <label>Administration Fee is calculated on *</label>
          <select
            name="AFison"
            value={data.AFison}
            onChange={handleChange}
          >
            <option value="">---None---</option>
            {AFison.map(Af => (
                  <option>
                  {Af.Value}
                  </option>
                ))}
          </select>
        </div>

        <div className="field">
          <label>Upper Bandwidth</label>
          <input
            type="number"
            name="UpperBandwidth"
            value={data.UpperBandwidth}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Lower Bandwidth</label>
          <input
            type="number"
            name="LowerBandwidth"
            value={data.LowerBandwidth}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Net Price Override As % Discount</label>
          <input
            type="number"
            name="NetPriceODiscount"
            value={data.NetPriceODiscount}
            onChange={handleChange}
          />
        </div>

        <div className="field toggle-field">
          <label>Exclude Administration Fees</label>
          <input type="checkbox" name="ExcludedAF" checked={!!data?.ExcludedAF} onChange={(e)=>
          {
            onChange({[e.target.name]:e.target.checked});
            console.log(e.target.name,e.target.checked);
          }}/>
         
        </div>

        <div className="field toggle-field">
          <label>Inherit hierarchy discounts</label>
          <input type="checkbox" name="InheritHdiscount" checked={!!data?.InheritHdiscount} onChange={(e)=>
          {
            onChange({[e.target.name]:e.target.checked});
            console.log(e.target.name,e.target.checked);
          }}/>
         
        </div>

        <div className="field toggle-field">
          <label>Exclude From Contract Pricelists</label>
          <input type="checkbox" name="ExcludefromContractP" checked={!!data?.ExcludefromContractP} onChange={(e)=>
          {
            onChange({[e.target.name]:e.target.checked});
            console.log(e.target.name,e.target.checked);
          }}/>
         
        </div>
      </div>

      {error && (
        <div style={{ color: "red", marginTop: "12px" }}>
          {error}
        </div>
      )}

      {/* <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button className="btn primary" onClick={handleNext}>
           Add Billing
        </button>
      </div> */}
    </div>
  );
}

export default AgreementHeaderInformationForm;