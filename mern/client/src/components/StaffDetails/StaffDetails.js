import React, { useEffect, useState } from "react";
import "./StaffDetails.css";
import "./AddNewMember";
import axios from "axios";
import { Link } from "react-router-dom";

function StaffDetails() {
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

  return (
    <div className="maindiv">
      <br />
      <div>
        <h2 className="topic1">Staff Details</h2>
        <br />
        <div>
          <Link to={"addprofile"}>
            <button
              style={{ width: "100px", backgroundColor: "#128500" }}
              className="button"
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
            <tbody>
              {/* data mapping */}
              {/* {stafDetails.map((stafDetailsVal) => (
                <tr>
                  <td>721732</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button className="button">View</button>
                  </td>
                </tr>
              ))} */}

              <tr>
                <td>721732</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <Link to={"/profile"}>
                    <button style={{ width: "100px" }} className="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>721732</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <Link to={"/profile"}>
                    <button style={{ width: "100px" }} className="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
