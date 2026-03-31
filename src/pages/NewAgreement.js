import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { createAgreementLineItem, getAgreementById } from "../api/api"; //head
import "../FormLayout.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import AgreementGroupForm from "../forms/AgreementGroupForm";
import ProductSelectionForm from "../forms/ProductSelectionForm";
import DiscountPricingStrategyForm from "../forms/DiscountPricingStrategyForm";
import AgreementHeaderInformationForm from "../forms/AgreementHeaderInformationForm";
import InformationForm from "../forms/InformationForm";
import BillingPlanForm from "../forms/BillingPlanForm";
import { toast } from "react-toastify";

function NewAgreement() {
  const navigate = useNavigate();
  //head
  // const location = useLocation();
  // // 🔥 STATIC DEV MODE (remove later)
  // const agreementId =
  //   location.state?.agreementId || "c6fb1c12-5f42-4012-8c44-adf46ce98b8c";
const { agreementId } = useParams();   // 👈 from URL
const location = useLocation();
 
const id =
  agreementId ||                      // ✅ FIRST priority (URL)
  location.state?.agreementId ||     // fallback (navigation)
  null;
 
if (!id) {
  console.error("Agreement ID not found in URL or state");
}
  // const agreementName = location.state?.agreementName ;
  const agreementName =sessionStorage.getItem("agreementName") ;
  const [agreementHeader, setAgreementHeader] = useState([]);
  useEffect(() => {
    const fetchAgreement = async () => {
      try {
        const data = await getAgreementById(id);
        console.log("Agreement Header:", data);
        setAgreementHeader(data?.[0] || null);
        console.log("Agreement Header:", agreementHeader);
      } catch (err) {
        console.error("Failed to fetch agreement:", err);
      }
    };

    fetchAgreement();
  }, [id]);

  // const agreementId = location.state?.agreementId;
  // const agreementHeader = location.state?.agreementHeader;
  //head
  const [payload, setPayload] = useState({
    agreementGroup: {
      AgreementLineItemName: "",
      agreementGroupId: "",
      agreementGroup: "",
    },

    productSelection: {
      LineType: "",
      MatchProductsBy: "",
      Field: "", // API field name (MPG/Product/etc)
      selectedRecords: [], // [{ Id, Name }, { Id, Name }]
      selectedProducts: [],
      selectedParentProducts: [],
    },
    discountPricing: {
      DiscountType: "",
      tierDiscounts: ["", "", "", "", ""],
      scaledTier: ["", "", "", "", ""],
      scaledDiscounts: ["", "", "", "", ""],
      volumeT: ["", "", "", "", ""],
    },
    agreementHeaderInfo: {
      AdministrationFee: "",
      AFPaymentSchedule: "",
      PriceUpdateRule: "",
      AFison: "",
      UpperBandwidth: "",
      LowerBandwidth: "",
      NetPriceODiscount: "",
      ExcludedAF: false,
      InheritHdiscount: false,
      ExcludefromContractP: false,
    },
    information: {
      ActivationDate: "",
      ExpirationDate: "",
      Description: "",
      ItemSequence: "",
      LineNumber: "",
    },
    billingPlan: {},
  });

  const updatePayload = (section, data) => {
    setPayload((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }));
  };

  // const addIfNumber = (obj, fieldName, value) => {
  //   if (value !== "" && value !== null && value !== undefined) {
  //     obj[fieldName] = Number(value);
  //   }
  // };
  //head
  const getHeaderValue = (formValue, agreementValue) => {
    if (formValue !== "" && formValue !== null && formValue !== undefined) {
      return formValue;
    }
    return agreementValue;
  };

  const addIfValid = (obj, fieldName, value) => {
    // Only add the key if value is not empty string, null, or undefined
    if (value !== "" && value !== null && value !== undefined) {
      obj[fieldName] = value;
    }
  };

  const addIfNumber = (obj, fieldName, value) => {
    // Convert to Number and only add if it's a valid number
    if (value !== "" && value !== null && value !== undefined) {
      const num = Number(value);
      if (!isNaN(num)) {
        obj[fieldName] = num;
      }
    }
  };

// Inside NewAgreement.js
useEffect(() => {
  const ps = payload.productSelection;
  let isValidFlag = false;

  if (ps.MatchProductsBy === "Hierarchy") {
    isValidFlag = ps.selectedBUs?.length > 0;
  } 
  else if (ps.MatchProductsBy === "Product") {
    const hasBaseProducts = ps.selectedProducts?.length > 0;
    
    // 🔥 FIX: Check if every "Option" has a selected parent
    const options = ps.selectedProducts.filter(p => p.Configuration === "Option");
    const allOptionsHaveParents = options.every(opt => 
      ps.selectedParentProducts?.some(parent => parent.ChildId === opt.Id)
    );

    isValidFlag = hasBaseProducts && allOptionsHaveParents;
  }

  setHasProducts(isValidFlag);

  if (isValidFlag) {
    setCompletedTabs([...tabs]);
  } else {
    // Keep only the first two tabs unlocked if invalid
    setCompletedTabs((prev) => prev.filter((tab) => tabs.indexOf(tab) < 1));
  }
}, [
  payload.productSelection.selectedBUs, 
  payload.productSelection.selectedProducts, 
  payload.productSelection.selectedParentProducts,
  payload.productSelection.MatchProductsBy
]);

  //head
  const handleFinalSubmit = async () => {
    if (!id) {
      alert("Agreement context missing. Please go back and reopen.");
      return;
    }
    const {
      selectedProducts,
      selectedParentProducts,
      MatchProductsBy,
      selectedRecords,
      Field,
    } = payload.productSelection;

    let requests = [];

    // --- CASE 1: MATCH BY PRODUCT ---
    if (MatchProductsBy === "Product") {
      requests = selectedProducts.map(async (childProduct) => {
        // 1. Find if this child has a selected parent
        const parentRecord = selectedParentProducts?.find(
          (p) => p.ChildId === childProduct.Id,
        );
        console.log("ex", payload.agreementHeaderInfo.ExcludedAF);
        console.log("ex", payload.agreementHeaderInfo.ExcludefromContractP);
        console.log("ex", payload.agreementHeaderInfo.InheritHdiscount);
        // 2. Determine which discount to use
        // Priority: Parent Discount (if exists) > Child Discount
        const hasParentDiscount =
          parentRecord?.Discounts && parentRecord.Discounts.length > 0;
        const hasChildDiscount =
          childProduct.Discounts && childProduct.Discounts.length > 0;

        const activeDiscountSource = hasParentDiscount
          ? parentRecord
          : childProduct;
        const discountType = activeDiscountSource.DiscountType;
        const discounts = activeDiscountSource.Discounts;
       console.log('non discountable',childProduct?.nonDiscountable);
        const lineItemPayload = {
          Name: payload.agreementGroup.AgreementLineItemName,
          Agreement: id, //head
          //Agreement: "a1cdb476-909d-484c-b686-8852a7f994f9", // Static ID from your code
        //  APTS_Not_Discountable_c: childProduct?.nonDiscountable|| false,
        
//APTS_Not_Discountable_c: activeDiscountSource?.nonDiscountable ||payload.discountPricing.nonDiscountable|| false,
APTS_Not_Discountable_c: activeDiscountSource?.nonDiscountable || !activeDiscountSource?.IsDiscountable ||payload.discountPricing.nonDiscountable|| false,
         // APTS_Not_Discountable_c:payload.discountPricing.nonDiscountable ||false,
          // Product IDs
          Product: { Id: childProduct.Id, Name: childProduct.Name },
          ...(parentRecord && {
            APTS_Parent_Product_c: {
              Id: parentRecord.Id,
              Name: parentRecord.Name,
            },
          }),

          APTS_Agreement_Group_c: {
            Id: payload.agreementGroup.agreementGroupId,
            Name: payload.agreementGroup.agreementGroup.Name,
          },

          // APTS_BillingPlan_c: childProduct.BillingPlan || "",
          Line_Type_c: payload.productSelection.LineType,
          APTS_Match_Products_By_c: MatchProductsBy,

          APTS_Discount_Type_c: discountType,
        };
        const ah = payload.agreementHeaderInfo;
        addIfValid(
          lineItemPayload,
          "APTS_GPO_Admin_fee_payment_schedule_c",
          ah.AFPaymentSchedule,
        );
        addIfValid(
          lineItemPayload,
          "APTS_Country_pricelist_update_rule_c",
          ah.APTS_Country_pricelist_update_rule_c,
        );
        addIfValid(
          lineItemPayload,
          "APTS_GPO_Admin_fee_is_based_on_c",
          ah.AFison,
        );
        addIfValid(
          lineItemPayload,
          "APTS_GPO_Administration_fee_c",
          ah.AdministrationFee,
        );
        addIfValid(lineItemPayload, "APTS_Upper_Bandwith_c", ah.UpperBandwidth);
        addIfValid(lineItemPayload, "APTS_Lower_Bandwith_c", ah.LowerBandwidth);
        addIfValid(
          lineItemPayload,
          "APTS_Contract_Net_Price_c",
          ah.NetPriceODiscount,
        );
        addIfValid(
          lineItemPayload,
          "APTS_BillingPlan_c",
          childProduct.BillingPlan,
        );
        // Booleans
        lineItemPayload.APTS_Exclude_GPO_Administration_Fees_c =
          !!ah.ExcludedAF;
        lineItemPayload.APTS_Exclude_From_Contract_Pricelists_c =
          !!ah.ExcludefromContractP;
        lineItemPayload.APTS_Inherit_hierarchy_discount_c =
          !!ah.InheritHdiscount;

        // 4. Information Section (Cleaned)
        const info = payload.information;
        addIfValid(
          lineItemPayload,
          "APTS_Activation_Date_c",
          info.ActivationDate,
        );
        addIfValid(
          lineItemPayload,
          "APTS_Expiration_Date_c",
          info.ExpirationDate,
        );
        addIfValid(lineItemPayload, "Description", info.Description);
        addIfNumber(lineItemPayload, "ItemSequence", info.ItemSequence);
        addIfNumber(lineItemPayload, "LineNumber", info.LineNumber);

        // 5. Discounts
        addIfValid(lineItemPayload, "APTS_Discount_Type_c", discountType);
        mapDiscountsToPayload(lineItemPayload, discountType, discounts);
        // Helper to map tiered data from the structured objects we built in previous steps
        mapDiscountsToPayload(lineItemPayload, discountType, discounts);
        // try {
        //   const result =  await createAgreementLineItem(lineItemPayload);
        //   console.log("resultshgdwy", result);
        //   if (result.Success) {
        //     toast.success("Agreement line item created successfully");
        //   }
        // } catch (err) {
        //   toast.error(err.Errors[0].Message);
        // }

         return createAgreementLineItem(lineItemPayload);
      });
    }
    // --- CASE 2: MATCH BY HIERARCHY (Existing Logic) ---
    else {
      requests = selectedRecords.map(async(record) => {
        const discount = payload.discountPricing;

        // 1️⃣ Find the full Product data from the productSelection list
        // to access its BU, MAG, and AG names
        const productDetail = payload.productSelection.productData?.find(
          (p) => p.Id === record.Id,
        );

        let selectedBillingPlan = "";

        if (productDetail) {
          // 2️⃣ Determine which "Key" in the billingPlan state matches this product.
          // We check in order: Article Group -> Main Article Group -> Business Unit
          // This matches the logic you used to build the list in BillingPlanForm.

          const buName = productDetail.Business_Unit_Name_c;
          const magName = productDetail.Main_Article_Group_Name_c;
          const agName = productDetail.Article_Group_Name_c;

          // Look up the value from our billingPlan object
          selectedBillingPlan =
            payload.billingPlan[agName] ||
            payload.billingPlan[magName] ||
            payload.billingPlan[buName];
        }

        const lineItemPayload = {
          Name: payload.agreementGroup.AgreementLineItemName,
          // Agreement: "a1cdb476-909d-484c-b686-8852a7f994f9",
          Agreement: id, //head
          // 3️⃣ Assign the mapped Billing Plan
          // APTS_BillingPlan_c: selectedBillingPlan || "",
          APTS_Not_Discountable_c:payload.discountPricing.non_Disc_Hierarchy ||false,

          APTS_Agreement_Group_c: {
            Id: payload.agreementGroup.agreementGroupId,
            Name: payload.agreementGroup.agreementGroup.Name,
          },
          Line_Type_c: payload.productSelection.LineType,
          APTS_Match_Products_By_c: payload.productSelection.MatchProductsBy,

          ...(payload.productSelection.Field && {
            [payload.productSelection.Field]: {
              Id: record.Id,
              Name: record.Name,
            },
          }),

          APTS_Discount_Type_c: discount.DiscountType,
        };
        const ah = payload.agreementHeaderInfo;
        addIfValid(
          lineItemPayload,
          "APTS_GPO_Admin_fee_payment_schedule_c",
          ah.AFPaymentSchedule,
        );
        addIfValid(
          lineItemPayload,
          "APTS_Country_pricelist_update_rule_c",
          ah.PriceUpdateRule,
        );
        addIfValid(
          lineItemPayload,
          "APTS_GPO_Admin_fee_is_based_on_c",
          ah.AFison,
        );
        addIfValid(
          lineItemPayload,
          "APTS_GPO_Administration_fee_c",
          ah.AdministrationFee,
        );
        addIfValid(lineItemPayload, "APTS_Upper_Bandwith_c", ah.UpperBandwidth);
        addIfValid(lineItemPayload, "APTS_Lower_Bandwith_c", ah.LowerBandwidth);
        addIfValid(
          lineItemPayload,
          "APTS_Contract_Net_Price_c",
          ah.NetPriceODiscount,
        );
        addIfValid(lineItemPayload, "APTS_BillingPlan_c", selectedBillingPlan);
        lineItemPayload.APTS_Exclude_GPO_Administration_Fees_c =
          !!ah.ExcludedAF;
        lineItemPayload.APTS_Exclude_From_Contract_Pricelists_c =
          !!ah.ExcludefromContractP;
        lineItemPayload.APTS_Inherit_hierarchy_discount_c =
          !!ah.InheritHdiscount;

        // 3. Information Section (Cleaned)
        const info = payload.information;
        addIfValid(
          lineItemPayload,
          "APTS_Activation_Date_c",
          info.ActivationDate,
        );
        addIfValid(
          lineItemPayload,
          "APTS_Expiration_Date_c",
          info.ExpirationDate,
        );
        addIfValid(lineItemPayload, "Description", info.Description);
        addIfNumber(lineItemPayload, "ItemSequence", info.ItemSequence);
        addIfNumber(lineItemPayload, "LineNumber", info.LineNumber);
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_1_c",
          discount.tierDiscounts?.[0],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_2_c",
          discount.tierDiscounts?.[1],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_3_c",
          discount.tierDiscounts?.[2],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_4_c",
          discount.tierDiscounts?.[3],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_5_c",
          discount.tierDiscounts?.[4],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_1_c",
          discount.scaledTier?.[0],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_2_c",
          discount.scaledTier?.[1],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_3_c",
          discount.scaledTier?.[2],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_4_c",
          discount.scaledTier?.[3],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Discount_Tier_5_c",
          discount.scaledTier?.[4],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Scaled_Discount_Percent_Tier_1_c",
          discount.scaledDiscounts?.[0],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Scaled_Discount_Percent_Tier_2_c",
          discount.scaledDiscounts?.[1],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Scaled_Discount_Percent_Tier_3_c",
          discount.scaledDiscounts?.[2],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Scaled_Discount_Percent_Tier_4_c",
          discount.scaledDiscounts?.[3],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Scaled_Discount_Percent_Tier_5_c",
          discount.scaledDiscounts?.[4],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Volume_Threshold_1_c",
          discount.volumeT?.[0],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Volume_Threshold_2_c",
          discount.volumeT?.[1],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Volume_Threshold_3_c",
          discount.volumeT?.[2],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Volume_Threshold_4_c",
          discount.volumeT?.[3],
        );
        addIfNumber(
          lineItemPayload,
          "APTS_Volume_Threshold_5_c",
          discount.volumeT?.[4],
        );

        return createAgreementLineItem(lineItemPayload);
        // try {
        //   const result =  await createAgreementLineItem(lineItemPayload);
        //   console.log("resultshgdwy", result);
        //   if (result.Success) {
        //     toast.success("Agreement line item created successfully");
        //   }
        // } catch (err) {
        //   toast.error(err.Errors[0].Message);
        // }
      });
    }

    // try {
    //   await Promise.all(requests);

    //   //head
    //   navigate("/", {
    //     state: {
    //       agreementId,
    //       agreementName: "Trial",
    //     },
    //   });

    //   // navigate("/");
    // } catch (err) {
    //   console.error("Submission failed:", err);
    // }

    try {
  const results = await Promise.all(requests);

  const allSuccessful = results.every(r => r?.Success);

  if (allSuccessful) {
    toast.success("All Agreement Line Items created successfully");
  } else {
    toast.error("Some Agreement Line Items failed to create");
    return;
  }

  navigate(`/${agreementId}`, {
    state: {
      id,
      agreementName: "Philips Trial",
    },
  });

} catch (err) {
  console.error("Submission failed:", err);
  toast.error("Error while creating Agreement Line Items");
}
  };

  /**
   * Helper to extract values from the complex Discount objects
   * we created in the Discount Pricing Strategy step.
   */
  const mapDiscountsToPayload = (payload, type, discounts) => {
    if (!discounts || discounts.length === 0) return;

    if (type === "Tier Discount" || type === "Net Price Override") {
      discounts.forEach((val, i) => {
        const field =
          type === "Tier Discount"
            ? `APTS_Discount_Tier_${i + 1}_c`
            : `APTS_NPO_Tier_${i + 1}_c`; // adjust NPO field names as per your API
        addIfNumber(payload, field, val);
      });
    } else if (type === "Tier Discount % + Scaled") {
      // discounts[0] = TierDiscount array, [1] = scaledDiscount array, [2] = Volume array
      discounts[0]?.TierDiscount?.forEach((val, i) =>
        addIfNumber(payload, `APTS_Discount_Tier_${i + 1}_c`, val),
      );
      discounts[1]?.scaledDiscount?.forEach((val, i) =>
        addIfNumber(
          payload,
          `APTS_Scaled_Discount_Percent_Tier_${i + 1}_c`,
          val,
        ),
      );
      discounts[2]?.VolumeThreshold?.forEach((val, i) =>
        addIfNumber(payload, `APTS_Volume_Threshold_${i + 1}_c`, val),
      );
    } else if (type === "Net Price Override + Scaled") {
      discounts[0]?.NetPrice?.forEach((val, i) =>
        addIfNumber(payload, `APTS_NPO_Tier_${i + 1}_c`, val),
      );
      discounts[1]?.ScaledDiscountAmt?.forEach((val, i) =>
        addIfNumber(
          payload,
          `APTS_Scaled_Discount_Amount_Tier_${i + 1}_c`,
          val,
        ),
      );
      discounts[2]?.VolumeThreshold?.forEach((val, i) =>
        addIfNumber(payload, `APTS_Volume_Threshold_${i + 1}_c`, val),
      );
    }
  };

  const tabs = [
    "Agreement Group",
    "Product Selection",
    "Discount Pricing Strategy",
    "Agreement Header Information",
    "Information",
    "Billing Plan",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [completedTabs, setCompletedTabs] = useState([]);
  const [hasProducts, setHasProducts] = useState(false);

  useEffect(() => {
    // If products exist → unlock all tabs
    if (hasProducts) {
      console.log("hello",hasProducts);
      setCompletedTabs([...tabs]);
      return;
    }

    // If products removed → lock back to step flow
    setCompletedTabs((prev) => prev.filter((tab) => tabs.indexOf(tab) <= 1));

    // If user is on locked tab → move back to 2nd tab
    const currentIndex = tabs.indexOf(activeTab);

    if (currentIndex > 1) {
      setActiveTab(tabs[1]);
    }
  }, [hasProducts]);
  // Prevent jumping to locked tabs

  useEffect(() => {
    const ag = payload.agreementGroup;

    const isValid =
      ag.AgreementLineItemName && ag.agreementGroup && ag.agreementGroupId;

    if (isValid && !completedTabs.includes("Agreement Group")) {
      setCompletedTabs((prev) => [...prev, "Agreement Group"]);
    }
  }, [payload.agreementGroup]);

  const handleTabSelect = (tab) => {
  const index = tabs.indexOf(tab);

  // If we have a valid selection (Hierarchy or Product), allow jumping anywhere
  if (hasProducts) {
    setActiveTab(tab);
    return;
  }

  // Fallback to sequential flow if no products/hierarchy selected yet
  if (index === 0) {
    setActiveTab(tab);
    return;
  }

  const previousTab = tabs[index - 1];
  if (completedTabs.includes(previousTab)) {
    setActiveTab(tab);
  }
};
  // const handleTabSelect = (tab) => {
  //   const index = tabs.indexOf(tab);

  //   //  Global unlock
  //   const isUnlocked = activeTab === tabs[1] && hasProducts;

  //   if (isUnlocked) {
  //     setActiveTab(tab);
  //     return;
  //   }

  //   if (index === 0) {
  //     setActiveTab(tab);
  //     return;
  //   }

  //   const previousTab = tabs[index - 1];

  //   if (completedTabs.includes(previousTab)) {
  //     setActiveTab(tab);
  //   }
  // };

  const handleBack = () => {
    const index = tabs.indexOf(activeTab);
    if (index > 0) {
      setActiveTab(tabs[index - 1]);
    }
  };
  const markCompletedAndNext = () => {
    setCompletedTabs((prev) =>
      prev.includes(activeTab) ? prev : [...prev, activeTab],
    );

    const index = tabs.indexOf(activeTab);
    if (index < tabs.length - 1) {
      setActiveTab(tabs[index + 1]);
    }
  };
  // const markCompletedAndNext = () => {
  //   setCompletedTabs((prev) =>
  //     prev.includes(activeTab) ? prev : [...prev, activeTab],
  //   );

  //   const index = tabs.indexOf(activeTab);

  //   if (index < tabs.length - 1) {
  //     setActiveTab(tabs[index + 1]);
  //   }
  // };

  console.log(payload.productSelection.selectedProducts);
  console.log(payload.productSelection.selectedParentProducts);
  const handleSave = () => {
    alert("Agreement saved");
  };

  const renderForm = () => {
    switch (activeTab) {
      case "Agreement Group":
        return (
          <AgreementGroupForm
            onComplete={markCompletedAndNext}
            data={payload.agreementGroup}
            onChange={(data) => updatePayload("agreementGroup", data)}
          />
        );
  //       case "Product Selection":
  // return (
  //   <ProductSelectionForm
  //     onComplete={markCompletedAndNext}
  //     onProductsChange={(products) => {
  //       const ps = payload.productSelection;
  //       // If Hierarchy: We care about BUs
  //       if (ps.MatchProductsBy === "Hierarchy") {
  //         setHasProducts(ps.selectedBUs?.length > 0);
  //       } else {
  //         // If Product: We care about the products array passed up
  //         setHasProducts(products.length > 0);
  //       }
  //     }}
  //     data={payload.productSelection}
  //     onChange={(data) => updatePayload("productSelection", data)}
  //   />
  // );
// Change this in NewAgreement.js
case "Product Selection":
  return (
    <ProductSelectionForm
      onComplete={markCompletedAndNext}
      // Remove the manual setHasProducts here to prevent conflicts
      onProductsChange={(products) => {}} 
      data={payload.productSelection}
      onChange={(data) => updatePayload("productSelection", data)}
    />
  );
      // case "Product Selection":
      //   return (
      //     <ProductSelectionForm
      //       onComplete={markCompletedAndNext}
      //       onProductsChange={(products) => {
      //         setHasProducts(products.length > 0);
      //       }}
      //       data={payload.productSelection}
      //       onChange={(data) => updatePayload("productSelection", data)}
      //     />
      //   );

      case "Discount Pricing Strategy":
        return (
          <DiscountPricingStrategyForm
            onComplete={markCompletedAndNext}
            prev={payload.productSelection}
            data={payload.discountPricing}
            onChange={(data) => updatePayload("discountPricing", data)}
            onChangeProduct={(data) => updatePayload("productSelection", data)}
          />
        );

      case "Agreement Header Information":
        return (
          //head
          <AgreementHeaderInformationForm
            agreementHeader={agreementHeader} // ✅ ADD THIS
            onComplete={markCompletedAndNext}
            data={payload.agreementHeaderInfo}
            // data={payload.agreementHeaderInfo}
            onChange={(data) => updatePayload("agreementHeaderInfo", data)}
          />

          //head
          // <AgreementHeaderInformationForm
          //   onComplete={markCompletedAndNext}
          //   data={payload.agreementHeaderInfo}
          //   onChange={(data) => updatePayload("agreementHeaderInfo", data)}
          // />
        );

      case "Information":
        return (
          <InformationForm
            onComplete={markCompletedAndNext}
            data={payload.information}
            onChange={(data) => updatePayload("information", data)}
          />
        );

      case "Billing Plan":
        return (
          <BillingPlanForm
            onComplete={markCompletedAndNext}
            product={payload.productSelection}
            data={payload.billingPlan}
            onChange={(data) => updatePayload("billingPlan", data)}
            onSubmit={handleFinalSubmit}
            onChangeProduct={(data) => updatePayload("productSelection", data)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        // tabs={tabs}
        activeTab={activeTab}
        completedTabs={completedTabs}
        onSelect={handleTabSelect}
      />

      <div style={{ flex: 1 }}>
       
        <TopBar
          title={activeTab}
          agreementHeader={agreementName}
          mode="agreement"
          activeTab={activeTab}
          completedTabs={completedTabs}
          onAddProduct={() => setActiveTab("Product Selection")}
          onAddDiscount={() => setActiveTab("Discount Pricing Strategy")}
          onAddBilling={() => setActiveTab("Billing Plan")}
          onSubmitAgreement={handleFinalSubmit}
          agreementId={agreementId}
        />
     
        <div style={{ padding: "20px" }}>{renderForm()}</div>
      </div>
    </div>
  );
}

export default NewAgreement;
