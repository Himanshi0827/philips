import { useEffect, useState, useMemo } from "react";
import { getMember,queryGetmember,getAccountById ,getAccountsByIds} from "../api/member"; // your functions
// import LookupTypeAhead from "../components/LookupTypeAhead";
import AgreementGroupSelector from "../components/AgreementGroupSelector";
import { searchLookupRecords } from "../api/SearchLookup";
import "./Members.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import CreateMembership from "../member/CreateMembership";
import { queryGetAgreementDetails } from "../api/queryAgreementLineItemsByAgreement";
const PAGE_SIZE = 5;

export default function Membership() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [agreementGroup, setAgreementGroup] = useState(null);
  const [agreementGroup, setAgreementGroup] = useState([]);
  const { agreementId } = useParams();
   sessionStorage.setItem("agreementId",agreementId);
  const [showCreate, setShowCreate] = useState(false);
  // const agreementId =sessionStorage.getItem("agreementId)") ;
  const [agreementDetails, setAgreementDetails] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    loadMembers();
      loadAgreement();
  }, []);
  const loadAgreement = async () => {
  try {
    const res = await queryGetAgreementDetails(agreementId);
    setAgreementDetails(res?.[0]); // API returns array
  } catch (err) {
    console.error(err);
  }
};
// const loadMembers = async () => {
//   try {
//     setLoading(true);

//     const records = await queryGetmember(agreementId);

//     // 🔹 Fetch account details for each member
//     const enrichedRecords = await Promise.all(
//       records.map(async (rec) => {
//         if (rec?.APTS_Member_c) {
//           const account = await getAccountById(rec.APTS_Member_c);
//           console.log("account",account);
//           return {
//             ...rec,
//             accountData: account, // attach account
//           };
//         }
//         return rec;
//       })
//     );
//     console.log("ac",records);

//     setMembers(enrichedRecords);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };

const loadMembers = async () => {
  try {
    setLoading(true);

    const records = await queryGetmember(agreementId);

    // ✅ Step 1: Collect all Account IDs
    const accountIds = [
      ...new Set(
        records
          .map((rec) => rec?.APTS_Member_c)
          .filter(Boolean)
      ),
    ];

    // ✅ Step 2: Bulk fetch Accounts
    const accounts = await getAccountsByIds(accountIds);

    // ✅ Step 3: Convert to Map for fast lookup
    const accountMap = {};
    accounts.forEach((acc) => {
      accountMap[acc.Id] = acc;
    });

    // ✅ Step 4: Merge into members
    const enrichedRecords = records.map((rec) => ({
      ...rec,
      accountData: accountMap[rec.APTS_Member_c] || null,
    }));

    setMembers(enrichedRecords);

  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};



  // const loadMembers = async () => {
  //   try {
  //     setLoading(true);
  //     //const res = await getMember();
  //     const records = await queryGetmember(agreementId);
  //    // console.log("reco", res);
  //     //const records = res?.Data || [];
  //     console.log("records", records);
  //     setMembers(records);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // 🔍 Search filter
  
  const filtered = useMemo(() => {
  let data = members;

  // 🔍 Search
  if (search) {
    const searchLower = search.toLowerCase();

    data = data.filter((m) =>
     m?.accountData?.Name?.toLowerCase().includes(searchLower) || // Account Name
     m?.accountData?.MP1_Customer_id_1_c?.toLowerCase().includes(searchLower)                 // MP1 ID
    );
  }

  // 📦 Agreement Group filter (MULTI SELECT)
  if (agreementGroup?.length > 0) {
    data = data.filter((m) =>
      agreementGroup.some(
        (g) => g.Id === m?.APTS_Agreement_Group_c?.Id
      )
    );
  }

  return data;
}, [members, search, agreementGroup]);
  // const filtered = useMemo(() => {
  //   if (!search) return members;

  //   return members.filter((m) =>
  //     m?.APTS_Member__r?.Name?.toLowerCase().includes(search.toLowerCase()),
  //   );
  // }, [members, search]);
  // const filtered = useMemo(() => {
  //   let data = members;

  //   // 🔍 Text search
  //   if (search) {
  //     data = data.filter((m) =>
  //       m?.APTS_Member__r?.Name?.toLowerCase().includes(search.toLowerCase())
  //     );
  //       console.log("sata",data);
  //   }

  //  // 📦 Agreement Group filter
  //   if (agreementGroup?.Id) {
  //     data = data.filter(
  //         (record)=> record?.APTS_Agreement_c===agreementId
  //     //   (m) => m?.APTS_Agreement_Group__c === agreementGroup.Id
  //     );
  //     console.log("group filter",data);
  //   }

  //   return data;
  // }, [members, search, agreementGroup]);
  // 📄 Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const visible = useMemo(() => {
      if (viewAll) return filtered;
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page,viewAll]);
console.log("stat",visible);
  return (
    <div className="members-container">
     
      {showCreate ? (
        // <CreateMembership onBack={() => setShowCreate(false)} />
        <CreateMembership
  onBack={() => setShowCreate(false)}
  agreementDetails={agreementDetails}
/>
      ) : (
        // your existing table UI

        <>
         {/* HEADER */}
      <div className="top-header">
        <div className="header-left">
          <span className="brand">PHILIPS</span>
          <span className="agreement">
  Agreement: {agreementDetails?.Name || "Loading..."}
</span>
          {/* <span className="agreement">Agreement: 8888</span> */}
        </div>

        <div className="header-actions">
          <button
            className="btn"
            onClick={() =>
              (window.location.href = `https://preview-rls09.congacloud.com/clm/detail/${agreementId}`)
            }
          >
            Back To Agreement
          </button>
          <button onClick={loadMembers}>Refresh</button>
          <button className="primary">Clone Members</button>
          {/* <button className="primary">Create New Member</button> */}
          <button className="primary" onClick={() => setShowCreate(true)}>
            Create New Member
          </button>
        </div>
      </div>
          <div className="section-title">Members</div>

          {/* SEARCH */}
          <div className="toolbar">
            {/* LEFT: Member Search */}
            <input
              type="text"
              placeholder="Search members with account name, MP1 customer Id..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />

            {/* Include Expired */}
            <div className="checkbox-container">
              <input type="checkbox" />
              <label>Include Expired Members</label>
            </div>

            {/* RIGHT: Agreement Group Lookup */}
            <div className="lookup-container">
              <label>Filter by Agreement Group(s)</label>
              <AgreementGroupSelector
                agreementId={agreementId}
                value={agreementGroup}
                onChange={(group) => {
                  setAgreementGroup(group);
                  setPage(1);
                }}
              />
            </div>
          </div>

          {/* TABLE */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="table-container">
              <table className="members-table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Account Name</th>
                    <th>MP1 Customer ID</th>
                  </tr>
                </thead>

                <tbody>
                  {visible.map((m) => (
                    <tr key={m.Id}>
                      <td>
                        <button>📄</button>
                      </td>
                      <td>{m?.accountData?.Name}</td>
                      <td>{m?.accountData?.MP1_Customer_id_1_c}</td>
                      {/* <td>{m?.Name}</td> */}
                      {/* <td>{m?.APTS_Member__r?.Name}</td>
                      <td>{m?.Name}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* PAGINATION */}
      
           <div className="table-footer pagination">
          {/* {!viewAll ? ( */}
            <>
              {/* <button onClick={goFirst} disabled={isFirst}>
                ⏮ First
              </button> */}

              <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
                ◀ Previous
              </button>

              <span className="page-info">
                Page {page} of {totalPages}
              </span>
<span className="record-count">
  Total Records: {filtered.length}
</span>
               <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
                Next ▶
              </button>

              {/* <button onClick={goLast} disabled={isLast}>
                Last ⏭
              </button> */}

              {/* <button className="primary" >
                View All
              </button>
            </>
          ) : (
            <button className="primary" >
              Return
            </button> */}
            {!viewAll ? (
  <button className="primary" onClick={() => setViewAll(true)}>
    View All
  </button>
) : (
  <button className="primary" onClick={() => setViewAll(false)}>
    Return
  </button>
)}
            </>
          {/* )} */}
        </div>
        </>
      )}
    </div>
  );
}
