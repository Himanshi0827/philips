import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "../FormLayout.css";
import { getAgreementLineItemById, getAgreementById } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import EditAgreementGroupForm from "./EditAgreementGroupForm";
import EditProductSelectionForm from "./EditProductSelectionForm";
import EditDiscountPricingStrategyForm from "./EditDiscountPricingStrategyForm";
import EditAgreementHeaderInformationForm from "./EditAgreementHeaderInformationForm";
import EditInformationForm from "./EditInformationForm";
import EditBillingPlanForm from "./EditBillingPlan";
import { updateAgreementLineItem } from "../api/api";
import { toast } from "react-toastify";

function EditAgreement() {
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
// const location = useLocation();
//   // 🔥 STATIC DEV MODE (remove later)
//   const agreementId =
//     location.state?.agreementId || "c6fb1c12-5f42-4012-8c44-adf46ce98b8c";
const agreementName =sessionStorage.getItem("agreementName") ;
  const [agreementHeader, setAgreementHeader] = useState([]);
   useEffect(() => {
      const fetchAgreement = async () => {
        try {
          const data = await getAgreementById(agreementId);
          console.log("Agreement Header:", data);
          setAgreementHeader(data?.[0] || null);
          console.log("Agreement Header:", agreementHeader);
        } catch (err) {
          console.error("Failed to fetch agreement:", err);
        }
      };
  
      fetchAgreement();
    }, [agreementId]);
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
  //   setCompletedTabs(tabs);
  const [hasProducts, setHasProducts] = useState(false);
  const [agreement, setAgreement] = useState([]);
  const { state } = useLocation();
  const [originalAgreement, setOriginalAgreement] = useState(null);

  const temp = state.id;
  useEffect(() => {
    const getAgreement = async () => {
      const agree = await getAgreementLineItemById(temp);

      if (agree?.length > 0) {
        console.log(agree);
        setAgreement(agree[0]);
        setOriginalAgreement(agree[0]); //  store original
        setCompletedTabs(tabs);
      }
    };

    getAgreement();
  }, [temp]);

  const handleTabSelect = (tab) => {
    const index = tabs.indexOf(tab);

    // Global unlock
    const isUnlocked = activeTab === tabs[1] && hasProducts;

    if (isUnlocked) {
      setActiveTab(tab);
      return;
    }

    if (index === 0) {
      setActiveTab(tab);
      return;
    }

    const previousTab = tabs[index - 1];

    if (completedTabs.includes(previousTab)) {
      setActiveTab(tab);
    }
  };
  //try

  const handleChange = (field, value) => {
    console.log("Field Changed:", field);
    console.log("Old Value:", agreement?.[field]);
    console.log("New Value:", value);

    setAgreement((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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

  const handleSave = async () => {
    try {
      const payload = {};

      console.log("======== PUT DEBUG ========");
      console.log("Original:", originalAgreement);
      console.log("Updated:", agreement);
      //await updateAgreementLineItem(temp, agreement);

      const response = await updateAgreementLineItem(temp, agreement);
      if (response.Success) {
        toast.success("Agreement Line Item updated successfully");
      }

      //  alert("Agreement updated successfully");
     // navigate("/");
      navigate(`/${agreementId}`);
    } catch (err) {
      toast.error(err.Errors[0].Message);

      console.error("Update failed:", err);
      alert(`Update failed: ${err.message}`);
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "Agreement Group":
        return (
          <EditAgreementGroupForm
            onComplete={markCompletedAndNext}
            data={agreement}
          />
        );

      case "Product Selection":
        return (
          <EditProductSelectionForm
            onComplete={markCompletedAndNext}
            data={agreement}
          />
        );

      case "Discount Pricing Strategy":
        return (
          <EditDiscountPricingStrategyForm
            data={agreement}
            onChange={handleChange}
            onComplete={markCompletedAndNext}
          />
        );

      case "Agreement Header Information":
        return (
          <EditAgreementHeaderInformationForm
            data={agreement}
            onChange={handleChange}
            onComplete={markCompletedAndNext}
            agreementHeader={agreementHeader}
          />
        );

      case "Information":
        return (
          <EditInformationForm
            data={agreement}
            onChange={handleChange}
            onComplete={markCompletedAndNext}
          />
        );

      case "Billing Plan":
        return (
          <EditBillingPlanForm
            data={agreement}
            onChange={handleChange}
            onComplete={markCompletedAndNext}
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
        {/* <TopBar title={activeTab} onBack={handleBack} onSave={handleSave} /> */}
        <TopBar
  title={activeTab}
  onSave={handleSave}
  mode="edit"
  agreementId={agreementId}
/>

        <div style={{ padding: "20px" }}>{renderForm()}</div>
      </div>
    </div>
  );
}

export default EditAgreement;
