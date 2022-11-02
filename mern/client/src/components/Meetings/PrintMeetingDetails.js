import "./MeetingDetails.css";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import { ReactToPrint } from "react-to-print";

function PrintMeetings(props) {
  //const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: "Meeting Details",
  //   onafterprint: () => unstable_HistoryRouter(-1),
  // });

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

  // function PrintComponent() {
  //   let componentRef = useRef();

  //   return (
  //     <>
  //       <div>
  //         {/* button to trigger printing of target component */}
  //         <ReactToPrint
  //           trigger={() => <Button>Print this out!</Button>}
  //           content={() => componentRef}
  //         />

  //         {/* component to be printed */}
  //         <ComponentToPrint ref={(el) => (componentRef = el)} />
  //       </div>
  //     </>
  //   );
  // }

  return (
    <div className="meetingDetailsContainer">
      <div
        className="meetingDetailsInnerContainer"
        // ref={componentRef}
      >
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
        <button
          className="button"
          variant="outline-success"
          //onClick={handlePrint}
        >
          Print
        </button>
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
