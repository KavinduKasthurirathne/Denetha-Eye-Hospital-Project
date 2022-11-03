import React, { useEffect, useState } from "react";
import "./StaffDetails.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import SearchIcon from "@mui/icons-material/Search";

function StaffDetails() {
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  //   const [stafDetails, setStafDetails] = useState([]);

  //   function getAllStaffDetails() {
  //     axios
  //       .get("./api/staffdetails/get/")
  //       .then((res) => {
  //         setStafDetails(res.data);
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }

  //   useEffect(() => getAllStaffDetails());

  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  function getRecords() {
    axios
      .post("http://localhost:5000/api/account/")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    getRecords();
  }, [records.length]);

  const navigate = useNavigate();

  const AddNewMember = () => {
    navigate("/AddNewMember");
  };

  //////////////search staff member//////////////////
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //   countries.filter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }
  ///////////////////////////

  return (
    <div className="maindiv">
      <br />

      <div>
        <h2 className="topic1">Staff Details</h2>
        <br />
        <div>
          <Link to={"/AddNewMember"}>
            <button
              style={{
                width: "100px",
                margin: "0px",
                backgroundColor: "#128500",
              }}
              className="button"
              onClick={AddNewMember}
            >
              Add
            </button>
          </Link>
          <div className="searchMember">
            <input
              type="text"
              className="search"
              placeholder="search"
              // onChange={handleFilter}
            />

            {/* {filterData.length != 0 ? searchStaff() : null} */}
          </div>
        </div>

        <div>
          <table className="stafftable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody className="stafftablebody">{recordList()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.username}</td>
    <td>{props.record.role}</td>
  </tr>
);

export default StaffDetails;
