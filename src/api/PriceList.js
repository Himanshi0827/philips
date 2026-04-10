import { getAccessToken } from "./api";

export async function getPriceListById(id) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/PriceList";
 
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

export async function updatePriceList(id, payload) {
  try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/PriceList";
 
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
 