

import { getAccessToken } from "./api";

export async function getMemberById(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_Account_Contract_c";
 
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

export async function getMember() {
  const accessToken = getAccessToken();
  const API_URL =
  "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_Account_Contract_c";
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      // "user-id": "83cdd1a7-25f8-c8e4-2ecb-e33c1cd9a2cf",
    },
  });
 
  if (!response.ok) {
    throw new Error("Failed to fetch Member");
  }
 
  return response.json();
}
 

export async function createMember(payload) {
  const accessToken = getAccessToken();

  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_Account_Contract_c",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create member");
  }

  return response.json();
}




export async function getAccountById(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/Account";
 
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



export async function queryGetmember(agreement_id) {
  const token = getAccessToken();
 console.log("agreement",agreement_id);
  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/APTS_Account_Contract_c",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ObjectName: "APTS_Account_Contract_c",
        Criteria: `APTS_Related_Agreement_c ='${agreement_id}'`,
        Select: [
          "*"
        ]
      })
    }
  );
 
  if (!response.ok) {
    throw new Error("Failed to bring members");
  }
   const result = await response.json();
  console.log("result",result);
  return result.Data;
}



export async function getAccountsByIds(ids = []) {
  try {
    if (!ids.length) return [];

    const token = getAccessToken();

    const formattedIds = ids.map(id => `'${id}'`).join(",");

    const response = await fetch(
      "https://preview-rls09.congacloud.com/api/data/v1/query/Account",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ObjectName: "Account",
          Criteria: `Id IN (${formattedIds})`,
          // Select: ["Id", "Name", "MP1_Customer_id_1_c"],
          Select: ["*"],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch accounts");
    }

    const result = await response.json();
    return result.Data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}




export async function queryGetOIT(member_id) {
  const token = getAccessToken();
 console.log("agreement",member_id);
  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/APTS_OIT_Track_Record_c",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ObjectName: "APTS_OIT_Track_Record_c",
        Criteria: `Agreement_Member_c.Id ='${member_id}'`,
        Select: [
          "*"
        ]
      })
    }
  );
 
  if (!response.ok) {
    throw new Error("Failed to bring members");
  }
   const result = await response.json();
  console.log("result",result);
  return result.Data;
}



export async function updateMember(id, payload) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_Account_Contract_c";
 
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
      //throw new Error(errorText || "Failed to update APTS_Account_Contract_c");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}