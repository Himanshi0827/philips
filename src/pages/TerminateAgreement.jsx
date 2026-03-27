import { useState, useEffect } from "react";
import { getAgreementById, updateAgreement,SubmitForApproval } from "../api/api";
import {useParams, useNavigate, useLocation } from "react-router-dom";
//import "./AgreementExtension.css";

export default function TerminateAgreement() {

  //const location = useLocation();
  const navigate = useNavigate();

  // const id =
  //   location.state?.agreementId ||
  //   "c6fb1c12-5f42-4012-8c44-adf46ce98b8c";
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
  const [terminationReason, setTerminationReason] = useState("");

  useEffect(() => {
    loadAgreement();
  }, []);

  const loadAgreement = async () => {
    const data = await getAgreementById(id);
    setAgreement(data[0]);
  };

  // const handleTerminate = async () => {

  //   if (!terminationReason) {
  //     alert("Termination Reason is required");
  //     return;
  //   }

  //   const payload = {
  //     TerminationComments: terminationReason,
  //     StatusCategory: "In Effect",
  //     Status: "Being Terminated",
  //     ApprovalStatus: "Approval Required"
  //   };

  //   try {

  //     await updateAgreement(id, payload);

  //     alert("Agreement termination initiated");

  //     navigate(`/agreement/${id}`);

  //   } catch (err) {

  //     console.error(err);
  //     alert("Error terminating agreement");

  //   }
  // };

  const handleTerminate = async () => {

  if (!terminationReason) {
    alert("Termination Reason is required");
    return;
  }

  const payload = {
    TerminationComments: terminationReason,
    StatusCategory: "In Effect",
    Status: "Being Terminated",
    ApprovalStatus: "Approval Required"
  };

  const approvalPayload = {
    ObjectId: id,
    ObjectType: "Agreement",
    Comments: terminationReason
  };

  try {

    // Update Agreement
    await updateAgreement(id, payload);

    //  Submit for Approval
    await SubmitForApproval(approvalPayload);

    alert("Agreement termination submitted for approval");
    
    window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`;
    // navigate(`/agreement/${id}`);

  } catch (err) {

    console.error(err);
    alert("Error terminating agreement");

  }
};

  if (!agreement) return <div>Loading...</div>;

  return (
    <div className="agreement-page">

      <div className="header">
        <h1>Terminate Agreement</h1>

        <div className="header-buttons">
          <button className="btn primary" onClick={handleTerminate}>
            Continue
          </button>

          <button className="btn"  onClick={() => window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`}>
            Cancel
          </button>
        </div>
      </div>

      <div className="section">

        <div className="section-header">
          <span className="arrow">▾</span>
          <span>Termination Details</span>
        </div>

        <div className="form-container">

          <div className="form-row">
            <label>Termination Reason</label>

            <textarea
              value={terminationReason}
              onChange={(e) => setTerminationReason(e.target.value)}
              required
            />
          </div>

          <div className="bottom-buttons">
            <button className="btn primary" onClick={handleTerminate}>
              Continue
            </button>

            <button className="btn"  onClick={() => window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${id}`}>
              Cancel
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}