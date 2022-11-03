import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


 
const Record = (props) => (
 <tr className="design">
   <td>{props.record.pname}</td>
   <td>{props.record.ward}</td>
   <td>{props.record.Regno}</td>
   <td>{props.record.age}</td>
   <td>{props.record.DAddmission}</td>
   <td>{props.record.Ddischarge}</td>
   <td>{props.record.Dsurgery}</td>
   <td>{props.record.PHACO}</td>
   <td>{props.record.IOL}</td>
   <td>{props.record.variable}</td>
   
   {/* <td><button className="button-29">Released</button></td> */}
   
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
     const response = await fetch(`http://localhost:5000/api/diagnosis/`);
 
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
   await fetch(`http://localhost:5000/api/diagnosis/delete/${id}`, {
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
    const navigateToDiagForm = () => {
        navigate2('/diagForm');
      };
      
  
      function filterContent (posts,searchItem){
        const result = posts.filter((post)=>{
          post.includes(searchItem);
        })
        this.setState({posts:result});
      }
  function handleTextSearch (e){
        const searchItem = e.currentTarget.value;
        axios.get("http://localhost:5000/api/diagnosis/get").then((res)=>{
          filterContent(res.data.posts,searchItem);
        })
      }

      const navigateD = useNavigate();
    const navigateToDiag = () => {
        navigateD('/diagForm');
      };
 
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="container3">
    <h2 style={{marginLeft:20}}>Diagnosis Records </h2>
    <input className="MYsearchbar" type="text" placeholder="Search.." onChange={handleTextSearch}></input>
    <button className="button1" onClick= {navigateToDiag}><span>Add New Form</span></button><br></br>
    
     <table className="table_table-striped1" style={{ marginTop: 20 }}>
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
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <br/>
     
     
   </div>
 );
}

