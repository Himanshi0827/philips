import axios from "axios";
import { getAccessToken } from "./api";

export const searchLookupRecords = async (criteria, objectName) => {
  const token = await getAccessToken();

  const response = await axios.post(
    
    "https://preview-rls09.congacloud.com/api/search/v1/objects/" +
      objectName +
      "/query?includeTotalCount=true",
    {
      ObjectName: objectName,
      Criteria: criteria,
      SearchType: "TypeAhead",
      Limit: 10,
      Skip: 0,
      Select: [],
      AdditionalTypeAheadFilterCriteria: "",
    },
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        // "User-Id": "6cfff136-e62b-d435-133d-455fb809c836",
        "Content-Type": "application/json",
      },
    },
  );

  return response.data?.Data || [];
};
