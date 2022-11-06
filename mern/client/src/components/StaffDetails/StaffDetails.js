import React, { useEffect, useState } from "react";
import "./StaffDetails.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AlertDialog } from "./deleteConfimation";

//import SearchIcon from "@mui/icons-material/Search";

function StaffDetails() {
  const [searchTerm, setsearchTerm] = useState("");
  const [records, setRecords] = useState([]);

  async function deleteRecord(oid) {
    await fetch(`http://localhost:5000/api/account/delete/${oid}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== oid);
    setRecords(newRecords);
    window.alert("deleted");
  }

  function recordList() {
    return records
      .filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.role.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      })
      .map((record) => {
        return (
          <Record
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      });
  }

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

  return (
    <div className="maindiv">
      <br />

      <div>
        <h2 className="topic1">Staff Details</h2>
        <br />
        <div className="inlineAddSearch">
          <Link to={"/AddNewMember"}>
            <button
              style={{
                width: "100px",
                // margin: "50px",
                backgroundColor: "#128500",
              }}
              className="button"
              onClick={AddNewMember}
            >
              Add
            </button>
          </Link>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="staffsearchform"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div>
        <table className="stafftable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="stafftablebody">{recordList()}</tbody>
        </table>
      </div>
    </div>
  );
}

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.username}</td>
    <td>{props.record.role}</td>
    <td>
      <button
        className="EditMeetingbutton"
        onClick={() => {
          props.deleteRecord(props.record._id);
          // AlertDialog;
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default StaffDetails;
