import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import './SurgeryDetails.css';

 
const Record = (props) => (

 <tr className="design">
   <td>{props.record.pnumber}</td>
   <td>{props.record.pname}</td>
   <td>{props.record.number}</td>
   <td>{props.record.age}</td>
   <td>{props.record.gender}</td>
   <td>{props.record.Stype}</td>
   {/* <td> <Link style={{color: 'brown'}} className="btnLink" to={`/edit/${props.record._id}`}>Admission Form</Link></td> */}
   {/* <td> <Link style={{color: 'brown'}} className="btnLink" to={`/edit/${props.record._id}`}>Ultra Sound Report</Link></td> */}
   <td> <Link style={{color: 'brown'}} className="btnLink" to={`/edit/${props.record._id}`}>Details Recipt</Link></td>
   <td> 
          <select className="dropdown">
            <option  className= 'dropdowncolor' value="Waiting">Waiting</option>
          <option className= 'dropdowncolor' value="intheater">In Theater</option>
          <option className= 'dropdowncolor'value="Released">Released</option>
        </select>
  
   </td>
   <td><button className="button-88">Paid</button></td>
   <td>
     <a style={{color: 'Black'}} className="btnLink" href={`/edit/${props.record._id}`}><b>Update</b></a><br/><br/>
     <button className="button-71"
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
 
export default function RecordList() {

  const [SearchItem , setSearchItem] = useState ("");


// This method will map out the records on the table
function recordList() {
  return records 
  .filter((val) => {
   if (SearchItem === "") {
     return val;
   } else if (
     val.pname.toLowerCase().includes(SearchItem.toLowerCase()) ||
     val.Stype.toLowerCase().includes(SearchItem.toLowerCase())
   ) {
     return val;
   }
 }).map((record) => {
    return (
      <Record
        record={record}
        deleteRecord={() => deleteRecord(record._id)}
        key={record._id}
      />
    );
  });
}

    const navigate = useNavigate();
    const navigateToAddNew = () => {
        navigate('/addNew');
      };
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/api/surgery/`);
 
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
   await fetch(`http://localhost:5000/api/surgery/delete/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 
 const navigate2 = useNavigate();
    const navigateToDiagDeta = () => {
        navigate2('/DallDetails');
      };
      
  
 // This following section will display the table with the records of individuals.
 return (
   <div className="surgeryContainer">
    <h2 style={{marginLeft:20}}>Surgery Details</h2>
    <form>
    <input className="MYsearchbar" type="text" placeholder="Search.." onChange={(e) => {
      setSearchItem(e.target.value);
    }}/></form>

    <button className="button1"  onClick= {navigateToAddNew}><span>Add New Patient</span></button>
     <table className="table_table-striped1">
       <thead>
         <tr>
           <th className="Stableheader">Patient Number</th>
           <th className="Stableheader">Patient Name</th>
           <th className="Stableheader">Number</th>
           <th className="Stableheader">Age</th>
           <th className="Stableheader">Gender</th>
           <th className="Stableheader">Surgery Type</th>
           {/* <th className="Stableheader">Addmission Form</th> */}
           {/* <th className="Stableheader">Ultra Sound Report</th> */}
           <th className="Stableheader">Diagnosis Card</th>
           <th className="Stableheader">Theater Details</th>
           <th className="cwidth">Payment</th>
           <th className="Stableheader">Action</th>
         </tr>
       </thead>
       <tbody >{recordList()}</tbody>
     </table>
     <br/>
     {/* <button className="button1" onClick= {navigateToAddNew}><span>Ultra Sound Reports</span></button> */}
     <button className="button1" onClick= {navigateToDiagDeta}><span>Diagnosis Recipts</span></button>
     
   </div>
 );
}

