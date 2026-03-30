import { getAccessToken } from "./api";
export async function queryAgreementLineItemsByAgreement(agreementId) {
  try {
    const token = getAccessToken();

    const response = await fetch(
      "https://preview-rls09.congacloud.com/api/data/v1/query/AgreementLineItem",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ObjectName: "AgreementLineItem",
          Criteria: `Agreement ='${agreementId}'`,
          Select: [
            "*"
//             "Name",
//             // "Line_Type_c",
//             "Description",
//             "Product.Id",
//            "Product.Name",
       
//            "APTS_BillingPlan_c",
//           //  "LineType",
//            "APTS_Agreement_Group_c.Id",
//             "APTS_Agreement_Group_c.Name",
//              "APTS_Country_List_Price_Override_c",
//       "APTS_Country_Pricelist_List_Price_c",
//       "APTS_Country_pricelist_update_rule_c",
//       "APTS_Discount_Tier_1_c",
//       "APTS_Discount_Tier_2_c",
//       "APTS_Discount_Tier_3_c",
//       "APTS_Discount_Tier_4_c",
//       "APTS_Exclude_From_Contract_Pricelists_c",
//       "APTS_Exclude_GPO_Administration_Fees_c",
//       "APTS_Ext_ID_c",
//       "APTS_GPO_Admin_fee_is_based_on_c",
//       "APTS_GPO_Admin_fee_payment_schedule_c",
//       "APTS_GPO_Administration_fee_c",
//       "APTS_MAG_c",
//        "Country_Listprice_Override_As_Discount_c",
//         "APTS_Billing_Plan_c",
//          "APTS_NPO_Tier_1_c",
//       "APTS_NPO_Tier_2_c",
//       "APTS_NPO_Tier_3_c",
//       "APTS_NPO_Tier_4_c",
//       "APTS_NPO_Tier_5_c",
//       "APTS_NPO_Tier_6_c",
//       "APTS_NPO_Tier_7_c",
//       "APTS_Scaled_Discount_Amount_Tier_1_c",
//       "APTS_Scaled_Discount_Amount_Tier_2_c",
//       "APTS_Scaled_Discount_Amount_Tier_3_c",
//       "APTS_Scaled_Discount_Amount_Tier_4_c",
//       "APTS_Scaled_Discount_Amount_Tier_5_c",
//       "APTS_Scaled_Discount_Percent_Tier_1_c",
//       "APTS_Scaled_Discount_Percent_Tier_2_c",
//       "APTS_Scaled_Discount_Percent_Tier_3_c",
//       "APTS_Scaled_Discount_Percent_Tier_4_c",
//       "APTS_Scaled_Discount_Percent_Tier_5_c",
//         "APTS_Volume_Threshold_1_c",
//       "APTS_Volume_Threshold_2_c",
//       "APTS_Volume_Threshold_3_c",
//       "APTS_Volume_Threshold_4_c",
//       "APTS_Volume_Threshold_5_c",
//       "Line_Type_c",
// "CreatedDate",
//  "APTS_Discount_Type_c",
//  "APTS_Match_Products_By_c",
//  "Code_c",
//  "Matching_c",
//  "Agreement",
//  "Hierarchy_c.Id",
//  "Hierarchy_c.Name",
//  "Apts_IsSoftDeleted_c",
//  "APTS_Expiration_Date_c",


 
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
      //throw new Error("Failed to query line items");
    }

    const result = await response.json();
    return result.Data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export async function queryCheckAgreementGroup(agreement_group_Id, name) {
  const token = getAccessToken();
  console.log("trial", agreement_group_Id, name);
  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/APTS_Agreement_Groups_c",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ObjectName: "APTS_Agreement_Groups_c",
        Criteria: `APTS_Agreement_c ='${agreement_group_Id}' AND Name= '${name}'`,
        Select: ["Name", "Id"],
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to query line items");
  }

  const result = await response.json();
  console.log("trial2", result);
  return result.Data;
}






export async function queryGetAgreementDetails(agreement_id) {
  const token = getAccessToken();
 console.log("t",agreement_id);
  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/Agreement",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ObjectName: "Agreement",
        Criteria: `Id ='${agreement_id}'`,
        Select: [
          "Id",
          "Name",
          "Account.Id",
          "Account.Name",
        ]
      })
    }
  );
 
  if (!response.ok) {
    throw new Error("Failed to query line items");
  }
 
  const result = await response.json();
  console.log("result",result);
  return result.Data;
}
 
// export async function queryGetProposal(Account_id) {
//   const token = getAccessToken();
//    console.log("account",Account_id);
//   const response = await fetch(
//     "https://preview-rls09.congacloud.com/api/data/v1/query/Proposal",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         ObjectName: "Proposal",
//         Criteria: `Account.Id ='${Account_id}'`,
//         Select: [
//           "Id",
//           "Name",
//           "Opportunity.Id",
//           "Opportunity.Name",
//           "ProposalNumber",
//           "CreatedDate", 
//           "CreatedBy.Name"
//         ]
//       })
//     }
//   );
 
//   if (!response.ok) {
//     throw new Error("Failed to query line items");
//   }
 
//   const result = await response.json();
//    console.log("result",result);
//   return result.Data;
// }
 export async function queryGetProposal(Account_id, fromDate, toDate) {
  const token = getAccessToken();

  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/Proposal",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ObjectName: "Proposal",
        Criteria: `
          Account.Id ='${Account_id}'
          AND CreatedDate >= '${fromDate}T00:00:00Z'
          AND CreatedDate <= '${toDate}T23:59:59Z'
        `,
        Select: [
          "Id",
          "Name",
          "Opportunity.Id",
          "Opportunity.Name",
          "ProposalNumber",
          "CreatedDate",
          "CreatedBy.Name"
        ]
      })
    }
  );

  if (!response.ok) {
    throw new Error("Failed to query proposals");
  }

  const result = await response.json();
  return result.Data;
}

export async function queryGetQuoteItem(Quote_id) {
  const token = getAccessToken();
 console.log("quote",Quote_id);
  const response = await fetch(
    "https://preview-rls09.congacloud.com/api/data/v1/query/LineItem",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ObjectName: "LineItem",
        Criteria: `Proposal_c ='${Quote_id}'`,
        Select: [
          "Id",
          "Name",
          //  "Product.ProductCode", 
           "Product",
            "APTS_Strategic_Discount_Amount_c_c",
            "APTS_Contract_Discount_Amount_c",
           "APTS_Promotion_Discount_Amount_c_c",
           "Proposal_c",
          "APTS_BillingPlan_c",
          "AdjustmentType",
          "Quantity",
          "APTS_Offered_Price_c_c"
        ]
      })
    }
  );
 
  if (!response.ok) {
    throw new Error("Failed to query line items");
  }
 
  const result = await response.json();
  console.log("result",result);
  return result.Data;
}


//try 
export async function queryAgreementGroupByAgreement(agreementId) {
  try {
    const token = getAccessToken();

    const response = await fetch(
      "https://preview-rls09.congacloud.com/api/data/v1/query/APTS_Agreement_Groups_c",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ObjectName: "APTS_Agreement_Groups_c",
          Criteria: `APTS_Agreement_c ='${agreementId}'`,
          Select: [
            "*"
            // "Name"
      
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
      //throw new Error("Failed to query line items");
    }

    const result = await response.json();
    console.log("agreement Group",result);
    return result.Data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
