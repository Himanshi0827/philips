

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

export async function getFilteredAccounts() {
  try {
    const token = await getAccessToken();

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
          Criteria: `
           Market_c = 'North America'  AND Country_c = 'United States'  AND MP1_Customer_id_1_c != null    AND Inactive_Flag_c = false   AND ERP_Account_Group_c = '0001 - SOLD TO PARTY'
          `,
          Select: ["*"],
        }),
      }
    );

    const result = await response.json();
    return result.Data || [];

  } catch (err) {
    console.error(err);
    return [];
  }
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



export async function getAccounts({
  filters = {},
  likeFields = [],
  searchText = ""
}) {
  try {
    const token = await getAccessToken();

    const criteria = buildCriteria(filters);

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
          Criteria: criteria,
          Select: ["*"],
        }),
      }
    );

    const result = await response.json();
    let data = result.Data || [];

    // ✅ CLIENT SIDE SEARCH (WORKS ALWAYS)
    if (searchText) {
      const lower = searchText.toLowerCase();

      data = data.filter(rec =>
        likeFields.some(field =>
          (rec[field] || "")
            .toString()
            .toLowerCase()
            .includes(lower)
        )
      );
    }

    return data;

  } catch (err) {
    console.error(err);
    return [];
  }
}

export const buildCriteria = (filters = {}) => {
  const clauses = [];

  Object.entries(filters).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") return;

    //  HANDLE NOT NULL
    if (typeof value === "object" && value.notNull) {
      clauses.push(`${key} != null`);
    }
    else if (typeof value === "string") {
      clauses.push(`${key} = '${value}'`);
    } 
    else {
      clauses.push(`${key} = ${value}`);
    }
  });

  return clauses.join(" AND ");
};


export async function getMembershipAgreements(memberId) {
  const token = getAccessToken();

  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/APTS_Account_Contract_c",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ObjectName: "APTS_Account_Contract_c",
        Criteria: `
          APTS_Member_c = '${memberId}'
        `,
        Select: ["Id", "Name", "APTS_Related_Agreement_c", "APTS_Member_c"]
      })
    }
  );

  const result = await response.json();
  return result.Data;
}




export async function createGPODesignateChange(payload) {
  const accessToken = getAccessToken();

  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_GPO_Designation_Changes_c",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );
console.log("createGPODesignateChange response", response);
  if (!response.ok) {
    throw new Error("Failed to create GPO designation change");
  }

  return response.json();
}


export async function UpdateGPODesignateChange(id,payload) {
    try {
    const CONTRACT_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/APTS_GPO_Designation_Changes_c";
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


export async function getRetryRecords() {

  const token = getAccessToken();
   const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const formattedDate = sevenDaysAgo.toISOString();
  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/APTS_GPO_Designation_Changes_c",
     {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ObjectName: "APTS_GPO_Designation_Changes_c",
        Criteria: `
          APTS_Status_c = 'Error'
          AND CreatedDate > '${formattedDate}'
        `,
        Select: [
          "Id",
          "APTS_Start_date_c",
          "APTS_Error_Message_c",
          "APTS_Status_c"
        ]
      })
    }
  );

  const result = await response.json();
  return result.Data || [];
}

 