import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
    pnumber: "",
    pname: "",
    number: "",
    age: "",
    gender: "",
    Stype: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/api/surgery/get/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/surgery");
       return;
     }
 
     setForm(record);
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
    pnumber: form.pnumber,
    pname: form.pname,
    number: form.number,
    age: form.number,
    gender:form.gender,
    Stype: form.Stype,
   };
 
   // This will send a put request to update the data in the database.
   await fetch(`http://localhost:5000/api/surgery/update/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/surgery");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
     <div className="container2">
       
       
       <br/> <br/><br/> 
           <div className="form-group">
               <h2>Add New Patient</h2><br/>
               <label for="pnumber">Patient Number : </label>
               <input type="number" class="form-control" id="pnumber"  placeholder="Enter Next Number" value={form.pnumber}
           onChange={(e) => updateForm({ pnumber: e.target.value })}/>    
           </div>
               <br/>
           <div className="form-group">
               <label for="pname">Patient Name :</label>&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="text" class="form-control" id="pname"  placeholder="Enter Patient's Name"  value={form.pname}
           onChange={(e) => updateForm({ pname: e.target.value })}
           required/>    
           </div><br/>

           <div className="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <label for="number">Number :</label>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="number" class="form-control" id="number"  placeholder="Enter Number" value={form.number}
           onChange={(e) => updateForm({ number: e.target.value })}/>    
           </div><br/>

           <div class="form-group">
               <label for="age">Patient Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="number" class="form-control" id="age" placeholder="Enter Age"  value={form.age}
           onChange={(e) => updateForm({ age: e.target.value })}/>
           </div><br/>
           <div class="form-group">
           <label for="gender" className="gedercss">Gender :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" value="Male" checked={form.gender === "Male"}  onChange={(e) => updateForm({ gender: e.target.value })} /> Male&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" value="Female" checked={form.gender === 'Female'} onChange={(e) => updateForm({ gender: e.target.value })}/> Female</div>
           <br/>
           
           

           <div className="form-group">
               <label for="Stype">Surgery Type :</label> &nbsp; &nbsp; &nbsp;
               <input type="text" class="form-control" id="Stype"  placeholder="Enter Patient's Surgery Type"  value={form.Stype}
           onChange={(e) => updateForm({ Stype: e.target.value })}/>    
           </div>
           <br/>
           <button type="submit"
           value="Update Record" class="button" >Update</button>
           <br/><br/> <br/>
         
          
           <button type="submit" class="button" > ⇇Back </button>
           </div>

     </form>
   </div>
 );
}