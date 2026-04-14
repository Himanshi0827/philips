

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