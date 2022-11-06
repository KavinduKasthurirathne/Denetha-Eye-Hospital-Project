import React, { useEffect, useState } from "react";
import '../Appoinment.css';
import '../App.css';
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.address}</td>
   <td>{props.record.phone}</td>
   <td>{props.record.age}</td>
   <td>{props.record.gender}</td>
   <td>{props.record.appoinmentnumber}</td>
   <td>{props.record.type}</td>
   <td>{props.record.date}</td>
   <td>{props.record.time}</td>
   <td>{props.record.doctor}</td>
   <td>
   <button className="button" variant="contained"  style={{color:'white'}}
       onClick={() => {
         props.deleteRecord(props.record._id);
         window.alert("Record Update");
       }}
     >
       Update
     </button>|
     <button className='button' variant="contained"  style={{color:'black'}}
       onClick={() => {
         props.deleteRecord(props.record._id);
         window.alert("Record Deleted");
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);

export default function AppoinmentTable() {
  
const [records, setRecords] = useState([]);

useEffect(() => {
 async function getRecords() {
   const response = await fetch(`http://localhost:5000/api/appointment`);

   if (!response.ok) {
     const message = `An error occurred: ${response.statusText}`;
     window.alert(message);
     return;
   }

   const records = await response.json();
   setRecords(records);
 }

 getRecords();

 return;
}, [records.length]);

// This method will delete a record
async function deleteRecord(id) {
 await fetch(`http://localhost:5000/api/appointment/delete/${id}`, {
   method: "DELETE"
 });

 const newRecords = records.filter((el) => el._id !== id);
 setRecords(newRecords);
}


function recordList() {
 return records.map((record) => {
   return (
     <Record
       record={record}
       deleteRecord={() => deleteRecord(record._id)}
       key={record._id}
     />
   );
 });
}

return (
  <div className="arrange" >
     <button className='button' onClick="/Appointments" variant="contained"  style={{color:'black'}}> Download PDF </button>
   <h2 style={{marginLeft:520}}>Appoinment Details</h2>
    <table className="content-table" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th >Phone number</th>
          <th >Age</th>
          <th >Gender</th>
          <th >Appoinment Number</th>
          <th >Type</th>
          <th >Date</th>
          <th >Time</th>
          <th >Doctor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{recordList()}</tbody>
    </table>
  </div>
);
}