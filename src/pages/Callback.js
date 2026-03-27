import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleCallback } from "../api/api";

// function Callback() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const processCallback = async () => {
//       try {
//         await handleCallback();   // stores user + token
//         navigate("/");            // go to Home
//       } catch (err) {
//         console.error("Login failed", err);
//       }
//     };

//     processCallback();
//   }, [navigate]);

//   return <p>Signing you in...</p>;
// }
function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const processCallback = async () => {
      try {
        const user = await handleCallback();

        // Get original route
        const returnUrl = user?.state?.returnUrl || "/";

        navigate(returnUrl);
      } catch (err) {
        console.error("Login failed", err);
        navigate("/");
      }
    };

    processCallback();
  }, [navigate]);

  return <p>Signing you in...</p>;
}
export default Callback;