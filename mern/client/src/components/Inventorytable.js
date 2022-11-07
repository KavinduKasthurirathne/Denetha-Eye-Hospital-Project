import React, { useEffect, useState } from "react";
import './Inventory.css';
import '../App.css';
const Record = (props) => (
 <tr>
   <td>{props.record.Itemcode}</td>
   <td>{props.record.Itemname}</td>
   <td>{props.record.Vendorcode}</td>
   <td>{props.record.Location}</td>
   <td>{props.record.Quntity}</td>
   <td>{props.record.Cost}</td>
   {/* <td>{props.record.type}</td> */}
   <td>{props.record.Status}</td>
   <td>
   <a style={{color: 'Black'}} className="btnLink" href={`/Update/${props.record._id}`}><b>Update</b></a><br/><br/>
     

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

export const InventoryTable = () => {
  
const [records, setRecords] = useState([]);

useEffect(() => {
 async function getRecords() {
   const response = await fetch(`http://localhost:5000/api/inventory`);

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
 await fetch(`http://localhost:5000/api/inventory/delete/${id}`, {
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
     <button className='button' onClick="/Inventory" variant="contained"  style={{color:'black'}}> Download PDF </button>
   <h2 style={{marginLeft:300}}>Inventory Details</h2>
    <table className="content-table" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Itemcode</th>
          <th>Itemname</th>
          <th>Vendorcode</th>
          <th>Location</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>{recordList()}</tbody>
    </table>
  </div>
);
}