import React, { useState } from "react";
import "./AddMeetings.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMeetings(props) {
  const [topic, setTopic] = useState(props.topic);
  const [id, setId] = useState(props.id);
  console.log(props.id);
  var [date, setDate] = useState(props.date);
  var [time, setTime] = useState(props.time);
  var [host, setHost] = useState(props.host);
  var [description, setDescription] = useState(props.description);
  const navigate = useNavigate();

  function sendMeetingDetails(event) {
    const newMeeting = {
      date,
      time,
      host,
      description,
    };

    axios
      .post("http://localhost:5000/api/meeting/add", newMeeting)
      .then(() => {
        navigate("/meetings");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function updateMeetingDetails(event) {
    const updateMeeting = {
      date,
      time,
      host,
      description,
    };

    axios
      .put(
        "http://localhost:5000/api/meeting/update/" + props.id,
        updateMeeting
      )
      .then(() => {
        navigate("/meetings");
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err);
      });
  }

  if (props.topic) {
    var title = "Edit Meeting";
    var funct = updateMeetingDetails;
  } else {
    var title = "Add Meeting";
    var funct = sendMeetingDetails;
  }
  const getDateString = (iso) => {
    const date = new Date(iso);
    const correctDate = new Date(date.getTime() + 360 * 60000);
    return correctDate.toISOString().split("T")[0];
  };

  return (
    <div className="addMeetingContainer">
      <div className="addMeetingInnerContainer">
        <h2 className="addMeetingTitle">{title}</h2>
        <form
          className="addmeetingform"
          onSubmit={(e) => {
            e.preventDefault();
            funct();
          }}
        >
          <div className="form-group-addM">
            <label htmlFor="date">Date</label>
            <input
              type="Date"
              className="form-control"
              id="meetingDate"
              aria-describedby=""
              onChange={(e) => {
                setDate(e.target.value); //assign evrytime, when changing the value
              }}
              value={date}
              required
            />
          </div>

          <div className="form-group-addM">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              className="form-control"
              id="meetingTime"
              onChange={(e) => {
                setTime(e.target.value); //assign evrytime, when changing the value
              }}
              value={time}
              required
            />
          </div>

          <div className="form-group-addM">
            <label htmlFor="host">Host</label>
            <input
              type="text"
              className="form-control"
              id="meetingHost"
              onChange={(e) => {
                setHost(e.target.value); //assign evrytime, when changing the value
              }}
              value={host}
              required
            />
          </div>

          <div className="form-group-addM">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="meetingdescription"
              onChange={(e) => {
                setDescription(e.target.value); //assign evrytime, when changing the value
              }}
              value={description}
              required
            />
          </div>

          <center>
            <button type="submit" className="button">
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default AddMeetings;
