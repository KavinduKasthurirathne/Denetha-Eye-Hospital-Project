import React, { useEffect, useState } from "react";
import "./StaffDetails.css";
import AddNewMember from "./AddNewMember.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    axios("http://localhost:5000/api/staffdetails/")
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

  return (
    <div className="maindiv">
      <br />

      <div>
        <h2 className="topic1">Staff Details</h2>
        <br />
        <div>
          <Link to={"/AddNewMember"}>
            <button
              style={{ width: "100px", backgroundColor: "#128500" }}
              className="button"
              onClick={AddNewMember}
            >
              Add
            </button>
          </Link>

          <input type="text" className="search" placeholder="search" />
        </div>

        <div>
          <table className="stafftable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job Status</th>
                <th></th>
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
    <td>{props.record.sid}</td>
    <td>{props.record.name}</td>
    <td>{props.record.jobstatus}</td>
    <td>
      <Link to={"/profile"}>
        <button style={{ width: "100px" }} className="button">
          View
        </button>
      </Link>
    </td>
  </tr>
);

export default StaffDetails;
