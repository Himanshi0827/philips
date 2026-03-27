import { Navigate, useNavigate } from "react-router-dom";
function TopBar({
  title,
  onSave,
  agreementHeader,
  mode,
  agreementId, 
  activeTab = "",
  completedTabs = [],
  onAddProduct,
  onAddDiscount,
  onAddBilling,
  onSubmitAgreement
})

{
  const navigate = useNavigate();

  const isAgreementCompleted = completedTabs.includes("Agreement Group");
  const isProductCompleted = completedTabs.includes("Product Selection");
  const isDiscountCompleted = completedTabs.includes("Discount Pricing Strategy");
  const isBillingCompleted = completedTabs.includes("Billing Plan");

  return (
    <>
      <div className="app-header">
        <div className="header-left">
          <span className="logo">PHILIPS</span>
          {mode === "agreement" && (
            <span className="agreement-title">
              Agreement: {agreementHeader}
            </span>
          )}
        </div>

        <div className="header-right">
          <button
             onClick={() => navigate(`/${agreementId}`)}
            //  onClick={() => navigate("/")}
            className="btn secondary"
          >
            Back to List
          </button>

          {mode === "agreement" ? (
            <>
              {/* STEP 1 */}
              {activeTab === "Agreement Group" && (
  <button
    className="btn primary"
    disabled={!isAgreementCompleted}
    onClick={() => {
      onAddProduct();
    }}
  >
    Add Product
  </button>
)}
             

              {/* STEP 2 */}
              {activeTab === "Product Selection" && (
                <button
                  className="btn primary"
                  disabled={!isProductCompleted}
                  onClick={onAddDiscount}
                >
                  Add Discount
                </button>
              )}

              {/* STEP 3 */}
              {activeTab === "Discount Pricing Strategy" && (
                <button
                  className="btn primary"
                  disabled={!isDiscountCompleted}
                  onClick={onAddBilling}
                >
                  Add Billing
                </button>
              )}

              {/* FINAL STEP */}
              {activeTab === "Billing Plan" && (
                <button
                  className="btn success"
                  disabled={!isBillingCompleted}
                  onClick={onSubmitAgreement}
                >
                  Create Agreement Line Items
                </button>
              )}
            </>
          ):(
  <button className="btn primary" onClick={onSave}>
    Save Agreement Line Items
  </button>
)}
        </div>
      </div>

      <div className="section-header">{title}</div>
    </>
  );
}

export default TopBar;
