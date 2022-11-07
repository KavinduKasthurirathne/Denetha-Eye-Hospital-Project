import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
 
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

     await axios.get(`http://localhost:5000/api/surgery/get/${params.id.toString()}`)
     .then(({data}) => {
        setForm(data);
     }).catch((err) => {
        window.alert(`Record with id ${id} not found`);
        navigate("/surgery");
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
    pnumber: form.pnumber,
    pname: form.pname,
    number: form.number,
    age: form.age,
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
   window.alert("User Records Updated SuccessFully");
   navigate("/surgery");
 }

 const navigateToDetails = () => {
  navigate('/surgery');
};
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <button type="submit" className="Dback" onClick={navigateToDetails}  > Back </button>
     <form onSubmit={onSubmit} className = "formcolor">
     <div className="container2">
       
       
       <br/> <br/><br/> 
           <div className="form-group">
               <h2 className="h2cssIWAnt">Update Patient Record</h2><br/>
               <label htmlFor="pnumber">Patient Number : </label>
               <input type="number" className="form-control" id="pnumber"  placeholder="Enter Next Number" value={form.pnumber}
           onChange={(e) => updateForm({ pnumber: e.target.value })}/>    
           </div>
               <br/>
           <div className="form-group">
               <label htmlFor="pname">Patient Name :</label>&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="text" className="form-control" id="pname"  placeholder="Enter Patient's Name"  value={form.pname}
           onChange={(e) => updateForm({ pname: e.target.value })}
           />    
           </div><br/>

           <div className="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <label htmlFor="number">Number :</label>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="number" className="form-control" id="number"  placeholder="Enter Number" value={form.number}
           onChange={(e) => updateForm({ number: e.target.value })}/>    
           </div><br/>

           <div className="form-group">
               <label htmlFor="age">Patient Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="number" className="form-control" id="age" placeholder="Enter Age"  value={form.age}
           onChange={(e) => updateForm({ age: e.target.value })}/>

           </div><br/>
           <div className="form-group">
           <label htmlFor="gender" className="gedercss">Gender :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" value="Male" checked={form.gender === "Male"}  onChange={(e) => updateForm({ gender: e.target.value })} /> Male&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" value="Female" checked={form.gender === 'Female'} onChange={(e) => updateForm({ gender: e.target.value })}/> Female</div>
           <br/>
           
           

           <div className="form-group">
               <label htmlFor="Stype">Surgery Type :</label> &nbsp; &nbsp; &nbsp;
               <input type="text" className="form-control" id="Stype"  placeholder="Enter Patient's Surgery Type"  value={form.Stype}
           onChange={(e) => updateForm({ Stype: e.target.value })}/>    
           </div>
           <br/>
           <button type="submit"
           value="Update Record" className="Dback" id="myupdate" >Update</button>
           <br/><br/> <br/>
         
          
           
           </div>

     </form>

     <br/><br/> <br/>
   </div>
 );
}