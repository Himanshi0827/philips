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
       
      },
      body: JSON.stringify(payload),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
     
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
 