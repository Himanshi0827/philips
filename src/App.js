import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewAgreement from "./pages/NewAgreement";
import Callback from "./pages/Callback";
import EditAgreement from "./Edit Page/EditAgreement";
import CloneAgreementLineItems from "./pages/CloneAgreementLineItems";
import NewALIfromQuotes from "./pages/NewALIfromQuotes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgreementExtension from "./pages/AgreementExtension";
import TerminateAgreement from "./pages/TerminateAgreement";
import AgreementAmendAddendum from "./pages/AgreementAmendAddendum";

import Membership from "./pages/Membership";
import CloneMembers from "./member/CloneMembers";
import MemberDetail from "./member/MemberDetail";
function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000}/>
    <BrowserRouter>
      <Routes>
        <Route path="/:agreementId" element={<Home />} />
        <Route path="/new-agreement/:agreementId" element={<NewAgreement />} />
        <Route path="/edit/:agreementId" element={<EditAgreement />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/clone/:agreementId" element={<CloneAgreementLineItems />} />
        <Route path="/newALIfromquote" element={<NewALIfromQuotes />} />
      
        <Route path= "/extension/:agreementId" element={<AgreementExtension/>}/>
        <Route path= "/terminate/:agreementId" element={<TerminateAgreement/>}/>
        <Route path= "/amend/:agreementId" element={<AgreementAmendAddendum/>}/>
        <Route path="/member/:agreementId" element={<Membership />} />
        <Route path="/clone-members/:agreementId" element={<CloneMembers />} />
        <Route path="/member-detail/:memberId" element={<MemberDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
