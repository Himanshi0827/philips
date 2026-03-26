// src/api/api.js
import { UserManager, Log } from "oidc-client-ts";
 
const API_URL =
  "https://preview-rls09.congacloud.com/api/data/v1/objects/AgreementLineItem";
 const userManager = new UserManager({
  authority: "https://login-rlspreview.congacloud.com/api/v1/auth",
  //client_id:import.meta.env.client_id,
  client_id:"e77fc3cf-b8d0-4c60-a5e0-e0cbf614247f",
// "user-id": "d3076209-7f2f-7a9b-d78d-adfaeda55713",
 // "access-control-allow-origin" : "*",
 // "organization-id":"8ade1b2b-41fb-4045-88c3-05c70b474cd6",
 // "organization-fid":"org-001157-8ade1b2b-41fb-4045-88c3-05c70b474cd6",
  
  //client_id: "05d7c408-393e-42c1-bc4a-3741caa0e131",
  redirect_uri: `${window.location.origin}/callback`,
  response_type: "code",
  scope: "openid",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});
// const userManager = new UserManager({
//   authority: "https://login-rlspreview.congacloud.com/api/v1/auth",
//   client_id:"e77fc3cf-b8d0-4c60-a5e0-e0cbf614247f",
//   //client_id: "05d7c408-393e-42c1-bc4a-3741caa0e131",
//   redirect_uri: "https://localhost:3000/callback",
//   response_type: "code",
//   scope: "openid",
// });
 
Log.setLogger(console);
 
Log.setLevel(Log.DEBUG);
 
/* ---------------- AUTH ---------------- */
 
// Login
export function login() {
  userManager.signinRedirect();
}
 
// Handle callback & store user in session
export async function handleCallback() {
  console.log("Handle callback");
  const user = await userManager.signinRedirectCallback();
  sessionStorage.setItem("user", JSON.stringify(user));
  return user;
}
 
export function getAccessToken() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user || !user.access_token) {
    login();
  }
  return user.access_token;
}
 
// / --
/* ---------------- API CALL ---------------- */
 
export async function getAgreementLineItems() {
  const accessToken = getAccessToken();
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      // "user-id": "83cdd1a7-25f8-c8e4-2ecb-e33c1cd9a2cf",
    },
  });
 
  if (!response.ok) {
    throw new Error("Failed to fetch AgreementLineItem");
  }
 
  return response.json();
}
 
export async function createAgreementLineItem(lineagreement) {
  try {
    const payload = lineagreement;
    console.log(payload);
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/AgreementLineItem";
 
    const accessToken = getAccessToken();
    const response = await fetch(CONTRACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      // const errorText = await response.text();
      // throw new Error(errorText);
      const errorData = await response.json();
      throw errorData;
    }
    console.log("Success");
 
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
 
// get Agreement Line item by the id
export async function getAgreementLineItemById(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/AgreementLineItem";
 
    const accessToken = getAccessToken();
    const response = await fetch(`${CONTRACT_URL}/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
    });
 
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    const result = await response.json();
    return result.Data;
  } catch (err) {
    console.error(err.message);
  }
}
 
export async function updateAgreementLineItem(id, payload) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/AgreementLineItem";
 
    const accessToken = getAccessToken();
    const response = await fetch(`${CONTRACT_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
      // const errorText = await response.text();
      //throw new Error(errorText || "Failed to update agreement");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
 
export async function deleteAgreementLineItem(id) {
  const token = getAccessToken();
 
  const response = await fetch(
    `https://preview-rls09.congacloud.com/api/data/v1/objects/AgreementLineItem/${id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
 
  if (!response.ok) {
    throw new Error("Failed to delete Agreement Line Item");
  }
 
  const result = await response.json();
  console.log(result);
  return result;
}
 
//head
export async function getAgreementById(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement";
 
    const accessToken = getAccessToken();
    const response = await fetch(`${CONTRACT_URL}/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
    });
 
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    const result = await response.json();
    return result.Data;
  } catch (err) {
    console.error(err.message);
  }
}
 
export async function createAgreementGroup(agreementgroup) {
  try {
    // const payload = {"Description":"tru","ListPrice":2026,"Product":{"Id":"ec90cf92-6e6b-46e3-b17a-f06456516267","Name":"Trial Product"},"NetPrice":5000,"Agreement":"a1cdb476-909d-484c-b686-8852a7f994f9","DeltaPrice":78,"Name":"Trial 2026"}
    const payload = agreementgroup;
    console.log(payload);
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_Agreement_Groups_c";
 
    const accessToken = getAccessToken();
    const response = await fetch(CONTRACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      // const errorText = await response.text();
      // throw new Error(errorText);
      const errorData = await response.json();
      throw errorData;
    }
    console.log("Success");
 
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
 
export async function getProductById(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/Product";
 
    const accessToken = getAccessToken();
    const response = await fetch(`${CONTRACT_URL}/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
    });
 
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    const result = await response.json();
    console.log(result.Data);
    return result.Data;
  } catch (err) {
    console.error(err.message);
  }
}
 
export async function updateAgreement(id, payload) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement";
 
    const accessToken = getAccessToken();
    const response = await fetch(`${CONTRACT_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
      // const errorText = await response.text();
      //throw new Error(errorText || "Failed to update agreement");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
 
 
export async function getAmendAgreement(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/clm/v1/contracts";
 
    const accessToken = getAccessToken();
    const response = await fetch(`${CONTRACT_URL}/${id}/amend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
    });
 
    if (!response.ok) {
      // const errorText = await response.text();
      // throw new Error(errorText);
      const errorData = await response.json();
      throw errorData;
    }
    const result = await response.json();
    return result.Data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
 
export async function SubmitForApproval(body) {
  try {
    const payload = body;
    console.log("submit approval payload",payload);
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/approvals/v1/requests/submit";
 
    const accessToken = getAccessToken();
    const response = await fetch(CONTRACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        // "user-id": "6cfff136-e62b-d435-133d-455fb809c836",
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    console.log("Success");
 
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}
 
 export async function createAgreement(lineagreement) {
  try {
    const payload = lineagreement;
    console.log(payload);
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement";
 
    const accessToken = getAccessToken();
    const response = await fetch(CONTRACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      // const errorText = await response.text();
      // throw new Error(errorText);
      const errorData = await response.json();
      throw errorData;
    }
    console.log("Success");
 
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
 
