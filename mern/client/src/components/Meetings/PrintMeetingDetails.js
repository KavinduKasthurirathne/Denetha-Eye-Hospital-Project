import "./MeetingDetails.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function PrintMeetings(props) {
  // This method fetches the records from the database.
  function getRecords() {
    axios("http://localhost:5000/api/meeting/")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [records, setRecords] = useState([]);
  useEffect(() => {
    getRecords();
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  return (
    <div className="meetingDetailsContainer">
      <div className="meetingDetailsInnerContainer">
        <div className="meetingheader">
          <h2 className="meetingtopic">Meeting Time Table</h2>
        </div>

        <table className="meetingtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Host</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="meetingtablebody">{recordList()}</tbody>
        </table>
      </div>
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

export default PrintMeetings;
