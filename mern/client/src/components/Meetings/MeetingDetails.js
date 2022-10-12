import { useNavigate } from "react-router-dom";
import "./MeetingDetails.css";
import AddMeetings from "./AddMeeting.js";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Meetings(props) {
  const [editDetails, setEditDetails] = useState({
    date: "",
    id: "",
    time: "",
    host: "",
    description: "",
  });
  const [records, setRecords] = useState([]);

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

  useEffect(() => {
    getRecords();
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/api/meeting/delete/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
    window.alert("Meeting deleted");
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
          setEditDetails={setEditDetails}
        />
      );
    });
  }

  const navigate = useNavigate();

  const AddMeeting = () => {
    navigate("add_meetings");
  };

  return (
    <div className="meetingDetailsContainer">
      <div className="meetingDetailsInnerContainer">
        <div className="meetingheader">
          <h2 className="meetingtopic">Meeting Time Table</h2>
          <button className="button">Download</button>
          <button className="button" onClick={AddMeeting}>
            Add
          </button>
        </div>

        <table className="meetingtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Time</th>
              <th>Host</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="meetingtablebody">{recordList()}</tbody>
        </table>
      </div>
      <br />
      <br />
      {editDetails.date === "" ? null : (
        <AddMeetings
          topic={"Update Meeting"}
          id={editDetails.id}
          date={getDateString(editDetails.date)}
          time={editDetails.time}
          host={editDetails.host}
          description={editDetails.description}
        />
      )}
    </div>
  );
}

const Record = (props) => (
  <tr>
    <td>{getDateString(props.record.date)}</td>
    <td>{props.record._id}</td>
    <td>{props.record.time}</td>
    <td>{props.record.host}</td>
    <td>{props.record.description}</td>
    <td>
      <button
        className="button"
        onClick={() => {
          props.setEditDetails({
            id: props.record._id,
            date: props.record.date,
            time: props.record.time,
            host: props.record.host,
            description: props.record.description,
          });
        }}
      >
        Edit
      </button>
    </td>
    <td>
      <button
        className="button"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);
//a function to get ISO date with correct time zone
const getDateString = (iso) => {
  const date = new Date(iso);
  const correctDate = new Date(date.getTime() + 360 * 60000);
  return correctDate.toISOString().split("T")[0];
};

export default Meetings;
