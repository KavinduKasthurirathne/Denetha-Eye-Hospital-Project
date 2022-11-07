import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { TextField } from "@mui/material";
export default function Update() {
 const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    age: "",
    gender: "",
    appoinmentnumber: "",
    type: "",
    date: "",
    time: "",
    doctor: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();

     await axios.get(`http://localhost:5000/api/appointment/get/${params.id.toString()}`)
     .then(({data}) => {
        setForm(data);
     }).catch((err) => {
        window.alert(`Record with id ${id} not found`);

       
        
        return;
     });
    //  const response = await fetch(`http://localhost:5000/api/surgery/get/${params.id.toString()}`);
    //  console.log(params.id.toString());
 
    //  if (!response.ok) {
    //    const message = `An error has occurred: ${response.statusText}`;
    //    window.alert(message);
    //    return;
    //  }
 
    //  const record = await response.json();
    //  if (!record) {
    //    window.alert(`Record with id ${id} not found`);
    //    navigate("/surgery");
    //    return;
    //  }
 
     //setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
    name: form.name,
    address: form.address,
    phone: form.phone,
    age: form.age,
    gender:form.gender,
    appoinmentnumber: form.appoinmentnumber,
    type: form.type,
    date: form.date,
    time: form.time,
    doctor: form.doctor,
   };
 
   // This will send a put request to update the data in the database.
   await fetch(`http://localhost:5000/api/Appoinment/Update/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/AppoinmentTable");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     
     <form onSubmit={onSubmit} className = "formcolor">
     <div className="container2">
       
       
       <br/>
           <div className="form-group">
               <h2 className="h2cssIWAnt">Update </h2><br/>
               <TextField fullWidth label='Patient Name'id="name" placeholder="Enter Patient Name" onChange={(e) => updateForm({ name: e.target.value })} value={form.name}/>
                 
           </div>
               <br/>
           <div className="form-group">
               <TextField fullWidth label='Address' placeholder="Enter Address" onChange={(e) => updateForm({ address: e.target.value })} value={form.address}/>
               
   
           </div><br/>

           <div className="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <TextField fullWidth label='Phone number' placeholder="Enter phone number" onChange={(e) => updateForm({ phone: e.target.value })} value={form.phone}/>    
           </div><br/>

           <div className="form-group">
                <TextField fullWidth label='Age' placeholder="Enter Age" onChange={(e) => updateForm({ age: e.target.value })} value={form.age}/>    
               

           </div><br/>
           <div className="form-group">
           <TextField fullWidth label='Gender' placeholder="Enter gender" onChange={(e) => updateForm({ gender: e.target.value })} value={form.gender}/>    </div>
           <br/>

           <div className="form-group">
           <TextField fullWidth label='Appointment number' placeholder="Enter Appointment number" onChange={(e) => updateForm({ appoinmentnumber: e.target.value })} value={form.appoinmentnumber}/>     </div>
        
           <br/>
           <div className="form-group">
           <TextField fullWidth label='Type' placeholder="Enter Type" onChange={(e) => updateForm({ type: e.target.value })} value={form.type}/>     </div>
        
         <br/>
           

           <div className="form-group">
           <TextField fullWidth label='Date' placeholder="Enter date" onChange={(e) => updateForm({ date: e.target.value })} value={form.date}/>     </div>
        
           <div className="form-group">
           <TextField fullWidth label='Time' placeholder="Enter time" onChange={(e) => updateForm({ time: e.target.value })} value={form.time}/>     </div>

           <div className="form-group">
           <TextField fullWidth label='Doctor' placeholder="Enter the doctor" onChange={(e) => updateForm({ doctor: e.target.value })} value={form.doctor}/>     </div>
           <button type="submit" className="button" > Update </button>
           </div>

     </form>
   </div>
 );
}