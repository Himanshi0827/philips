
import { useNavigate, useLocation } from "react-router-dom";
import "../Dashboard.css";
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getAgreementLineItems } from "../api/api";
import { deleteAgreementLineItem } from "../api/api";
import { queryAgreementLineItemsByAgreement, queryGetAgreementDetails } from "../api/queryAgreementLineItemsByAgreement"; //head
import { updateAgreementLineItem } from "../api/api";
import { getAgreementLineItemById } from "../api/api";
const PAGE_SIZE = 5;

function Home() {
  //const location = useLocation();//head
  const navigate = useNavigate();
  //head
//   const agreementId = location.state?.agreementId;
// const agreementName = location.state?.agreementName;
// const agreementHeader = location.state?.agreementHeader;

// const agreementId =
//   location.state?.agreementId ||
//   "c6fb1c12-5f42-4012-8c44-adf46ce98b8c";

// const agreementName =
//   location.state?.agreementName ||
//   "Philips Trial";
const { agreementId } = useParams();   // 👈 from URL
const location = useLocation();
 sessionStorage.setItem("agreementId",agreementId);
 
const id =
  agreementId ||                      // ✅ FIRST priority (URL)
  location.state?.agreementId ||     // fallback (navigation)
  null;
 
if (!id) {
  console.error("Agreement ID not found in URL or state");
}

const agreementName =sessionStorage.getItem("agreementName") ;
const agreementHeader = location.state?.agreementHeader || null;
//head
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [Acc,setAcc] = useState(null);
   const [searchTerm, setSearchTerm] = useState("");
  console.log(agreements);
  // 🔹 Load Agreement Line Items from Conga
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        //head
        const data = await queryAgreementLineItemsByAgreement(id);  //head
     
        const records = Array.isArray(data?.Data)
  ? data.Data
  : Array.isArray(data)
  ? data
  : [];
  console.log("ty",records[0].Agreement);
const trying = await queryGetAgreementDetails(records[0].Agreement);
  console.log(trying);
  setAcc(trying);
 sessionStorage.setItem("agreementName",trying[0].Name);
// const filtered_agreements = records.sort(
//   (x, y) => new Date(y.CreatedDate) - new Date(x.CreatedDate)
// );

// setAgreements(filtered_agreements);
const activeRecords = records.filter(
  (rec) => !rec.Apts_IsSoftDeleted_c
);

const filtered_agreements = activeRecords.sort(
  (x, y) => new Date(y.CreatedDate) - new Date(x.CreatedDate)
);

setAgreements(filtered_agreements);
//head
      } catch (err) {
        console.error(err);
        // Not authenticated → login
        // login();
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleEdit = (Id) => {
    // navigate("/edit", { state: { id: Id } });
    navigate(`/edit/${agreementId}`, { state: { id: Id } });
  };

  const [page, setPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);
  const filteredAgreements = useMemo(() => {
  if (!searchTerm) return agreements;

  const term = searchTerm.toLowerCase();

  return agreements.filter((item) => {
    return (
      item?.Name?.toLowerCase().includes(term) ||
      item?.Code_c?.toLowerCase().includes(term) ||
      item?.Line_Type_c?.toLowerCase().includes(term) ||
      item?.APTS_Discount_Type_c?.toLowerCase().includes(term) ||
      item?.APTS_Match_Products_By_c?.toLowerCase().includes(term) ||
      item?.APTS_Agreement_Group_c?.Name?.toLowerCase().includes(term) ||
      item?.Product?.Name?.toLowerCase().includes(term) ||
      item?.Matching_c?.toLowerCase().includes(term)
    );
  });
}, [agreements, searchTerm]);
  //const totalPages = Math.ceil(agreements.length / PAGE_SIZE);
//const totalPages = Math.ceil((agreements?.length || 0) / PAGE_SIZE);   //head
const totalPages = Math.ceil((filteredAgreements?.length || 0) / PAGE_SIZE);
  // Slice only rows, NOT columns
  const visibleRows = useMemo(() => {
  if (viewAll) return filteredAgreements;

  const start = (page - 1) * PAGE_SIZE;
  return filteredAgreements.slice(start, start + PAGE_SIZE);
}, [filteredAgreements, page, viewAll]);
  // const visibleRows = useMemo(() => {
  //   if (viewAll) return agreements;

  //   const start = (page - 1) * PAGE_SIZE;
  //   return agreements.slice(start, start + PAGE_SIZE);
  // }, [agreements, page, viewAll]);

  const isFirst = page === 1;
  const isLast = page === totalPages;

const handleDelete = async (id) => {
  try {
    const data = await getAgreementLineItemById(id);
    const existing = Array.isArray(data) ? data[0] : data;

    if (!existing) {
      throw new Error("Record not found");
    }

    const payload = {
      ...existing,
      Apts_IsSoftDeleted_c: true, // ✅ correct API name
    };

    const response = await updateAgreementLineItem(id, payload);

    if (response?.Success) {
      setAgreements((prev) =>
        prev.filter((item) => item.Id !== id)
      );
      setPopup(false);
    } else {
      console.error(response);
      alert(response?.Errors?.[0]?.Message || "Soft delete failed");
    }
  } catch (err) {
    console.error(err);
    alert("Soft delete failed");
  }
};
 
  /* ---------- Navigation ---------- */

  const goFirst = () => setPage(1);
  const goPrev = () => !isFirst && setPage((p) => p - 1);
  const goNext = () => !isLast && setPage((p) => p + 1);
  const goLast = () => setPage(totalPages);

  const handleViewAll = () => setViewAll(true);

  const handleReturn = () => {
    setViewAll(false);
    setPage(1);
  };
  const [popup, setPopup] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const handlePopup = (id) => {
    setPopup(true);
    setDeleteId(id);
  };

  return (
    <div className="dashboard-container">
      {/* Top Header */}
      <div className="top-header">
        <div className="header-left">
          <span className="brand">PHILIPS</span>
          <span className="agreement-name">
            {/* head */}
  Agreement: {agreementName || "No Agreement Selected"}
</span>
          {/* <span className="agreement-name">Agreement: Premier Healthcare</span> */}
        </div>

        <div className="header-actions">
          <button onClick={() => window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`}>Back to Agreement</button>
          <button onClick={() => window.location.reload()}>Refresh</button>
          <button
            className="primary"
            onClick={() =>
  navigate("/newALIfromquote", {
    state: {
      AccountName: Acc?.[0]?.Account?.Name,
      AccountId: Acc?.[0]?.Account?.Id,
      Id: id
    }
  })
}

           // onClick={() => navigate("/newALIfromquote")}
          >
            New ALIs from Quotes
          </button>
             {/* head */}
          <button
            className="primary"
            onClick={() =>
          //    navigate("/clone", {

 navigate(`/clone/${agreementId}`, {
  state: {
    targetAgreementId: id,
    targetAgreementName: agreementName,
    agreementHeader: agreementHeader
  }
})
            //   navigate("/clone", {
            //     state: {
            //       targetAgreementId: "facc622f-2e3d-42c4-9094-06827f132497",
            //       targetAgreementName: "Dummy",
            //     },
            //   })
             }
          >
            Clone Agreement Line Items
          </button>
             {/* head */}
          <button
            className="primary"
            onClick={() =>
              // navigate("/new-agreement", {
               navigate(`/new-agreement/${agreementId}`, {
    state: {
      id,
      agreementName,
      agreementHeader
    }
  })
              // navigate("/new-agreement")
            }
          >
            New Agreement Line Item
          </button>
        </div>
      </div>

      {/* Section Title */}
      <div className="section-title">Agreement Line Items</div>

      {/* Search */}
      <div className="table-toolbar">
      <input
  type="text"
  placeholder="Search all with product, msp, hierarchy etc..."
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
    setPage(1); // reset to first page on search
  }}
/>
       
      </div>

      {/* Loading / Error */}
      {loading && <div className="loader">Loading Agreement Line Items...</div>}
      {error && <div className="error">{error}</div>}

      <div className="page-wrapper">
        <div className="table-container">
          {/* Table */}
          {!loading && (
            <table className="agreement-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Agreement Group</th>
                  <th>Line Type</th>
                  <th>Discount Type</th>
                  <th>Match Products By</th>
                  <th>Code</th>
                  <th>Matching</th>
                  <th>Billing Plan</th>
                  <th>MG3</th>
                  <th>Tier 1</th>
                  <th>Tier 2</th>
                  <th>Tier 3</th>
                  <th>Tier 4</th>
                  <th>Tier 5</th>
                  <th>Scaled Discount %, Tier 1</th>
                  <th>Scaled Discount %, Tier 2</th>
                  <th>Scaled Discount %, Tier 3</th>
                  <th>Scaled Discount %, Tier 4</th>
                  <th>Scaled Discount %, Tier 5</th>
                  <th>Volume Threshold 1</th>
                  <th>Volume Threshold 2</th>
                  <th>Volume Threshold 3</th>
                  <th>Volume Threshold 4</th>
                  <th>Volume Threshold 5</th>
                  <th>NPO1</th>
                  <th>NPO2</th>
                  <th>NPO3</th>
                  <th>NPO4</th>
                  <th>NPO5</th>
                  <th>NPO6</th>
                  <th>NPO7</th>
                  <th>Scale Discount Amt T1</th>
                  <th>Scale Discount Amt T2</th>
                  <th>Scale Discount Amt T3</th>
                  <th>Scale Discount Amt T4</th>
                  <th>Scale Discount Amt T5</th>
                  <th>Expiration Date</th>
                </tr>
              </thead>

              <tbody>
                {visibleRows.map((item) => (
                  <tr key={item.Id}>
                    <td className="actions">
                      <button
                        className="icon-btn"
                        onClick={() => handleEdit(item.Id)}
                      >
                        ✎
                      </button>
                      <button
                        className="icon-btn danger"
                        onClick={() => handlePopup(item.Id)}
                      >
                        🗑
                      </button>
                      {popup && (
                        <>
                          <div className="modal-backdrop">
                            <div className="modal">
                              <div
                                className="modal-header"
                                style={{ textAlign: "center" }}
                              >
                                Confirmation
                              </div>
                              <div className="modal">
                                <h3>
                                  Are you sure you want to delete this Agreement
                                  Line Item?
                                </h3>
                              </div>
                              <div className="modal-footer">
                                <button
                                  onClick={() => {
                                    handleDelete(deleteId);
                                    setPopup(false);
                                  }}
                                  className="modal-btn-save"
                                >
                                  Delete
                                </button>
                                <button
                                  onClick={() => setPopup(false)}
                                  className="modal-btn-cancel"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </td>
                    <td>{item.Name}</td>
                    <td>{item.APTS_Agreement_Group_c?.Name}</td>
                    <td>{item.Line_Type_c}</td>
                    <td>{item.APTS_Discount_Type_c}</td>
                    <td>{item.APTS_Match_Products_By_c}</td>
                    <td>{item.Code_c}</td>

                    <td>
                      {item.APTS_Match_Products_By_c === "Hierarchy"
                        ? item.Matching_c
                        : item.APTS_Match_Products_By_c === "Product"
                          ? item.Product.Name
                          : ""}
                    </td>

                    <td>{item.APTS_BillingPlan_c}</td>
                    <td>{item.APTS_MG3_Service_c}</td>
                    <td>{item.APTS_Discount_Tier_1_c}</td>
                    <td>{item.APTS_Discount_Tier_2_c}</td>
                    <td>{item.APTS_Discount_Tier_3_c}</td>
                    <td>{item.APTS_Discount_Tier_4_c}</td>
                    <td>{item.APTS_Discount_Tier_5_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_1_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_2_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_3_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_4_c}</td>
                    <td>{item.APTS_Scaled_Discount_Percent_Tier_5_c}</td>
                    <td>{item.APTS_Volume_Threshold_1_c}</td>
                    <td>{item.APTS_Volume_Threshold_2_c}</td>
                    <td>{item.APTS_Volume_Threshold_3_c}</td>
                    <td>{item.APTS_Volume_Threshold_4_c}</td>
                    <td>{item.APTS_Volume_Threshold_5_c}</td>
                    <td>{item.APTS_NPO_Tier_1_c?.Value}</td>
                    <td>{item.APTS_NPO_Tier_2_c?.Value}</td>
                    <td>{item.APTS_NPO_Tier_3_c?.Value}</td>
                    <td>{item.APTS_NPO_Tier_4_c?.Value}</td>
                    <td>{item.APTS_NPO_Tier_5_c?.Value}</td>
                    <td>{item.APTS_NPO_Tier_6_c?.Value}</td>
                    <td>{item.APTS_NPO_Tier_7_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_1_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_2_c?.Value}</td>
                    <td>{item.APTS_APTS_Scaled_Discount_Amount_Tier_3_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_4_c?.Value}</td>
                    <td>{item.APTS_Scaled_Discount_Amount_Tier_5_c?.Value}</td>
                    <td>{item.APTS_Expiration_Date_c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* BUTTON BAR */}
        <div className="table-footer pagination">
          {!viewAll ? (
            <>
              <button onClick={goFirst} disabled={isFirst}>
                ⏮ First
              </button>

              <button onClick={goPrev} disabled={isFirst}>
                ◀ Previous
              </button>

              <span className="page-info">
                Page {page} of {totalPages}
              </span>

              <button onClick={goNext} disabled={isLast}>
                Next ▶
              </button>

              <button onClick={goLast} disabled={isLast}>
                Last ⏭
              </button>

              <button className="primary" onClick={handleViewAll}>
                View All
              </button>
            </>
          ) : (
            <button className="primary" onClick={handleReturn}>
              Return
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
