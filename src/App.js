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
//import ConfirmationPage from "./components/ConfirmationPage";


function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-agreement" element={<NewAgreement />} />
        <Route path="/edit" element={<EditAgreement />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/clone" element={<CloneAgreementLineItems />} />
        <Route path="/newALIfromquote" element={<NewALIfromQuotes />} />
        {/* <Route path="/confirmation" element={<ConfirmationPage/>} /> */}
        <Route path= "/extension" element={<AgreementExtension/>}/>
        <Route path= "/terminate" element={<TerminateAgreement/>}/>
        <Route path= "/amend" element={<AgreementAmendAddendum/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
