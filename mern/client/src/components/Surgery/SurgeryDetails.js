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
   <td> <Link style={{color: 'brown'}} className="btnLink" to={`/edit/${props.record._id}`}>Admission Form</Link></td>
   <td> <Link style={{color: 'brown'}} className="btnLink" to={`/edit/${props.record._id}`}>Ultra Sound Report</Link></td>
   <td> <Link style={{color: 'brown'}} className="btnLink" to={`/edit/${props.record._id}`}>Details Recipt</Link></td>
   <td><button className="button-29">Released</button></td>
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
 
 // This method will map out the records on the table
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
 const navigate2 = useNavigate();
    const navigateToDiagDeta = () => {
        navigate2('/DallDetails');
      };
      
  
      function filterContent (posts,searchItem){
        const result = posts.filter((post)=>{
          post.includes(searchItem);
        })
        this.setState({posts:result});
      }
  function handleTextSearch (e){
        const searchItem = e.currentTarget.value;
        axios.get("http://localhost:5000/api/surgery/get").then((res)=>{
          filterContent(res.data.posts,searchItem);
        })
      }
 
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="container">
    <h2 style={{marginLeft:20}}>Surgery Details</h2>
    <input className="searchbar" type="text" placeholder="Search.." onChange={handleTextSearch}></input>
    <button className="button" onClick= {navigateToAddNew}><span>Add New Patient</span></button>
     <table className="table_table-striped" style={{ marginTop: 20 }}>
       <thead className="theader">
         <tr>
           <th className="cwidth">Patient Number</th>
           <th>Patient Name</th>
           <th className="cwidth">Number</th>
           <th className="cwidth">Age</th>
           <th className="cwidth">Gender</th>
           <th>Surgery Type</th>
           <th>Addmission Form</th>
           <th>Ultra Sound Report</th>
           <th>Diagnosis Card</th>
           <th>Theater Details</th>
           <th>Payment</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <br/>
     <button className="button" onClick= {navigateToAddNew}><span>Ultra Sound Reports</span></button>
     <button className="button" onClick= {navigateToDiagDeta}><span>Diagnosis Recipts</span></button>
     
   </div>
 );
}

