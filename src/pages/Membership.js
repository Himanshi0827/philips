import { useEffect, useState, useMemo } from "react";
import { getMember } from "../api/member"; // your functions
import LookupTypeAhead from "../components/LookupTypeAhead";
import { searchLookupRecords } from "../api/SearchLookup";
import "./Members.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import CreateMembership from "../member/CreateMembership";
const PAGE_SIZE = 5;

export default function Membership() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [agreementGroup, setAgreementGroup] = useState(null);
  const { agreementId } = useParams(); 
  const [showCreate, setShowCreate] = useState(false);
// const agreementId =sessionStorage.getItem("agreementId)") ;

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      setLoading(true);
      const res = await getMember();

      const records = res?.Data || [];
      setMembers(records);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Search filter
//   const filtered = useMemo(() => {
//     if (!search) return members;

//     return members.filter((m) =>
//       m?.APTS_Member__r?.Name?.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [members, search]);
const filtered = useMemo(() => {
  let data = members;

  // 🔍 Text search
  if (search) {
    data = data.filter((m) =>
      m?.APTS_Member__r?.Name?.toLowerCase().includes(search.toLowerCase())
    );
  }

 // 📦 Agreement Group filter
  if (agreementGroup?.Id) {
    data = data.filter(
        (record)=> record?.APTS_Agreement_c===agreementId
    //   (m) => m?.APTS_Agreement_Group__c === agreementGroup.Id
    );
  }

  return data;
}, [members, search, agreementGroup]);
  // 📄 Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <div className="members-container">
      
      {/* HEADER */}
      <div className="top-header">
        <div className="header-left">
          <span className="brand">PHILIPS</span>
          <span className="agreement">Agreement: 8888</span>
        </div>

        <div className="header-actions">
          <button>Back To Agreement</button>
          <button onClick={loadMembers}>Refresh</button>
          <button className="primary">Clone Members</button>
          {/* <button className="primary">Create New Member</button> */}
          <button className="primary" onClick={() => setShowCreate(true)}>
  Create New Member
</button>
        </div>
      </div>
      {showCreate ? (
  <CreateMembership onBack={() => setShowCreate(false)} />
) : (
  // your existing table UI

<>
      <div className="section-title">Members</div>

      {/* SEARCH */}
      {/* <div className="toolbar">
        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
          
         <input 
            type="checkbox" 
            // checked={!!agreementHeader?.APTS_Exclude_Administration_Fees_c} 
          
          />
      </div> */}
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
    <LookupTypeAhead
      field={{
        DisplayName: "Agreement Group",
        LookupObjectName: "APTS_Agreement_Groups_c",
        AgreementId: agreementId
      }}
      value={agreementGroup}
      onChange={(record) => {
        setAgreementGroup(record);
        setPage(1);
      }}
      searchFn={searchLookupRecords}
    />
  </div>
</div>
      <label>Include Expired Members</label>


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
                <td>{m?.APTS_Member__r?.Name}</td>
                <td>{m?.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      {/* PAGINATION */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          Previous
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
      </>
      )}
    </div>
  );
}