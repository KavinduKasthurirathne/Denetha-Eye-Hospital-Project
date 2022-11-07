import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";


 
const Record = (props) => {

  const [deleteSurgery, setDeleteSurgery] = useState(false);


return(
 <tr className="design">
   <td>{props.record.pname}</td>
   <td>{props.record.ward}</td>
   <td>{props.record.Regno}</td>
   <td>{props.record.age}</td>
   <td>{getDateString (props.record.DAddmission)}</td>
   <td>{getDateString (props.record.Ddischarge)}</td>
   <td>{getDateString (props.record.Dsurgery)}</td>
   <td>{props.record.PHACO}</td>
   <td>{props.record.IOL}</td>
   <td>{props.record.variable}</td>
   
   
   <td>
     <a style={{color: 'Black'}}  href={`/editDform/${props.record._id}`}><b>Update</b></a><br/><br/>
     <button className="button-71"
       onClick={() => 
        setDeleteSurgery(true)
      }
     >
       Delete
     </button>
   </td>
   <Dialog
        open={deleteSurgery}
        onClose={() => setDeleteSurgery(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Warning!</DialogTitle>
        <DialogContent>
          Are you sure, that you want to delete this records?
        </DialogContent>
        <DialogActions>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              variant="contained"
              onClick={() => {
                props.deleteRecord(props.record._id);
                setDeleteSurgery(false);
              }}
              autoFocus
              color="secondary"
            >
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

 </tr>
);
      }
export default function RecordList() {

  const [SearchItem , setSearchItem] = useState ("");

  
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
   return records
   .filter((val) => {
    if (SearchItem === "") {
      return val;
    } else if (
      val.pname.toLowerCase().includes(SearchItem.toLowerCase()) ||
      val.ward.toLowerCase().includes(SearchItem.toLowerCase())
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
   <div className="surgeryContainer">
    <h2 style={{marginLeft:20}}>Diagnosis Records </h2>
    <input className="MYsearchbar" type="text" placeholder="Search.." onChange={(e) => {
      setSearchItem(e.target.value);}}></input>
    <button className="button1" onClick= {navigateToDiag}><span>Add New Form</span></button><br></br>
    
     <table className="table_table-striped1" style={{ marginTop: 20 }}>
       <thead className="theader">
         <tr>
           <th className="Diatableheader">Patient Name</th>
           <th className="Diatableheader">Ward NO</th>
           <th className="Diatableheader">Registration Number</th>
           <th className="Diatableheader">Age</th>
           <th className="Diatableheader"> Date of Addmission</th>
           <th className="Diatableheader">Date of Discharge</th>
           <th className="Diatableheader">Date of Surgery</th>
           <th className="Diatableheader">PHACO</th>
           <th className="Diatableheader">IOL</th>
           <th className="Diatableheader">Variable</th>
           <th className="Diatableheader">Action</th>
         </tr>
       </thead>
       <tbody className="design">{recordList()}</tbody>
     </table>
     <br/>
     
     
   </div>
 );
}
//a function to get ISO date with correct time zone
const getDateString = (iso) => {
  const date = new Date(iso);
  const correctDate = new Date(date.getTime() + 360 * 60000);
  return correctDate.toISOString().split("T")[0];};
