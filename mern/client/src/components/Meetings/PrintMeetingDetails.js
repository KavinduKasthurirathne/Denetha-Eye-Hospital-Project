import { Link, useNavigate } from "react-router-dom";
import "./MeetingDetails.css";
import { useReactToPrint } from "react-to-print";

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function PrintMeetingDetails(props) {
  const componentRef = useRef();
  const [records, setRecords] = useState([]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Meeting Time Table",
    onAfterPrint: () => history(-1),
  });

  const history = useNavigate();

  // This method fetches the records from the database.
  function getRecords() {
    axios("http://localhost:5000/api/meeting/")
      .then((res) => {
        setRecords(res.data);
        console.log(records);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    getRecords();
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
          // setEditDetails={setEditDetails}
        />
      );
    });
  }

  const navigate = useNavigate();
  const logo = require("../../image/denethaLogo.png");
  return (
    <div className="meetingDetailsContainer">
      <div>
        <div className="meetingDetailsInnerContainer">
          <div className="printdiv" ref={componentRef}>
            <div className="meetingheader">
              <div className="meetingprintHeader">
                <img id="companylogo" src={logo} alt="logo" />
                <div className="comapnyDetails">
                  <h2 className="printComapanyName">
                    Denetha Eye Hospital (Pvt) Ltd
                  </h2>
                  <p className="PrintcomapnyDetails">
                    No.01, 1st Lane,
                    <br />
                    Bauddhaloka Mawatha, Kurunegala.
                    <br />
                    Tel: 0372222013
                  </p>
                </div>
              </div>
              <hr />

              <h2 className="meetingtopic">Meeting Time Table</h2>
            </div>

            <table className="meetingtable">
              <thead>
                <tr>
                  <th>Date</th>
                  {/* <th>ID</th> */}
                  <th>Time</th>
                  <th>Host</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody className="meetingtablebody">{recordList()}</tbody>
            </table>
          </div>
        </div>
      </div>
      <button className="printbutton" onClick={handlePrint}>
        Print
      </button>

      <br />
      <br />
      {/* {editDetails.date === "" ? null : (
        <AddMeetings
          topic={"Update Meeting"}
          id={editDetails.id}
          date={getDateString(editDetails.date)}
          time={editDetails.time}
          host={editDetails.host}
          description={editDetails.description}
        />
      )} */}
    </div>
  );
}

const Record = (props) => (
  <tr>
    <td>{getDateString(props.record.date)}</td>
    {/* <td>{props.record._id}</td> */}
    <td>{props.record.time}</td>
    <td>{props.record.host}</td>
    <td>{props.record.description}</td>
  </tr>
);
//a function to get ISO date with correct time zone
const getDateString = (iso) => {
  const date = new Date(iso);
  const correctDate = new Date(date.getTime() + 360 * 60000);
  return correctDate.toISOString().split("T")[0];
};

export default PrintMeetingDetails;
