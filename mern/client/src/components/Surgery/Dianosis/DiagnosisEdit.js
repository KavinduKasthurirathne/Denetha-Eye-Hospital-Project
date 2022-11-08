
import './FormD.css';
import React, { useState, useEffect } from "react";
//import {Header} from '../Header.js';
import axios  from "axios";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const projectlogo = require('../../../image/denethaLogo.png');

export default function DFormEdit(){
  const [form, setForm] = useState({
        pname:"",
        ward:"",
        Regno:"",
        age:"",
        DAddmission:"",
        Ddischarge:"",
        Dsurgery:"",
        PHACO:"",
        IOL:"",
        variable:"",
       records: [],
     });
     const params = useParams();
     const navigatefor = useNavigate();
     
     useEffect(() => {
       async function fetchData() {
         const id = params.id.toString();
    
         await axios.post(`http://localhost:5000/api/diagnosis/get/${id}`)
         .then(({data}) => {
            setForm((prev)=>({
              ...prev, 
              ...data, 
              DAddmission:getDateString(data.DAddmission), 
              Ddischarge:getDateString(data.Ddischarge),
              Dsurgery:getDateString(data.Dsurgery)
         }));
         }).catch((err) => {
            window.alert(`Record with id ${id} not found`);
            navigatefor("/DallDetails");
            return;
         });
       }
     
       fetchData();
     
       return;
     }, [params.id,  navigatefor]);
     
     // These methods will update the state properties.
     function updateForm(value) {
       return setForm((prev) => {
        
         return { ...prev, ...value };
       });
     }
     
     
     async function onSubmit(e) {
       e.preventDefault();
       const editedPerson = {
        pname:form.pname,
        ward:form.ward,
        Regno:form.Regno,
        age:form.age,
        DAddmission:form.DAddmission,
        Ddischarge:form.Ddischarge,
        Dsurgery:form.Dsurgery,
        PHACO:form.PHACO,
        IOL:form.IOL,
        variable:form.variable,
       };
     
       // This will send a put request to update the data in the database.
       await fetch(`http://localhost:5000/api/diagnosis/update/${params.id}`, {
         method: "PUT",
         body: JSON.stringify(editedPerson),
         headers: {
           'Content-Type': 'application/json'
         },
       });
       window.alert("User Records Updated SuccessFully");
       navigatefor("/DallDetails");
     }
     const printForm = () => {
      navigate(`/printform/${params.id}`);
      console.log(form.DAddmission);
    };

        const navigate = useNavigate();
        const navigateToAddDiagnosis = () => {
            navigate('/DallDetails');
          };
    
    return(
        <div>
            <button  type = "submit" className='Dback' onClick={navigateToAddDiagnosis}>Back</button>
            
            <form className="form" id='diagnosisedit' onSubmit = {onSubmit}>
            <div>
            <button  type = "submit"  className='print' onClick={printForm}>Print</button>
            

                <img src= {projectlogo} alt='logo' className='logoForDiagnosis'></img>
                <h2 className="Dh2">Denetha<br/>Eye Care Center</h2>
                <p className="p1">REG NO:</p>
                <div >
                <h5 className="Dh6">34/6,1st Lane,<br/>
                    Bauddhaloka Mawatha,<br/>
                    Kurunegala.</h5></div>
                    <div className="tel"><h5>
                Tel:037-2222013 <br/>Hot line:077-7211494</h5></div>
                <h2 className="Dh2"><u>Diagnosis Card</u></h2><br/>

                <div >
                <label   className='lableDiag'>Name of Patient:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className='forminput' name="fname"    value = {form.pname}
                 onChange={(e) => updateForm({ pname: e.target.value })}/>
                 <br/><br/>
                <label    className='lableDiag' >Ward Number:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  className='forminput' name="lname" value = {form.ward}
                 onChange={(e) => updateForm({ ward: e.target.value })}/>
                 <br/><br/>

                <label for="Aname"    className='lableDiag' >Patient Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" className='forminput' name="fname"   value = {form.age}
               onChange={(e) => updateForm({ age: e.target.value })}/>
               <br/><br/>

                <label for="Aname"   className='lableDiag'> Registration No:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number"  name="fname" className='forminput' value = {form.Regno}
                onChange={(e) => updateForm({ Regno: e.target.value })}/>
                <br/><br/>

                <label   className='lableDiag'>Date Of Addmition:</label>
                <input type="date"  name="fname" className='forminput'  value = {form.DAddmission}
                onChange={(e) => updateForm({ DAddmission:e.target.value })}/>
                <br/><br/>

                <label  className='lableDiag'>Date Of Discharge:</label>&nbsp;&nbsp;
                <input type="date"  name="fname" className='forminput' value = {form.Ddischarge}
                 onChange={(e) => updateForm({ Ddischarge: e.target.value})}/>
                 <br/><br/>

                <label className='lableDiag'>Date Of Surgery:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date"  name="fname"  className='forminput' value = {form.Dsurgery}
                onChange={(e) => updateForm({ Dsurgery: e.target.value })}/>
                <br/><br/>

            <label  className='lableDiag'>R/PHACO + 'F' IOL T/A</label>  <br/>
<br/>
            <input type="checkbox" className='mycheckbox' name="vehicle1" value="Nevan 8 hourly 6/52"   
            checked={form.PHACO === 'Nevan 8 hourly 6/52'} onChange={(e) => updateForm({ PHACO: e.target.value })}/>

            <label for="vehicle1"> Nevan 8 hourly 6/52</label><br/>

            <input type="checkbox"  className='mycheckbox' name="vehicle2" value="Prednisolone 2/52"
             checked={form.PHACO === 'Prednisolone 2/52'}  onChange={(e) => updateForm({ PHACO: e.target.value })}/>

            <label for="vehicle2"> Prednisolone 2/52</label><br/>

            <input type="checkbox" className='mycheckbox' name="vehicle3" value=" Optimox 2/52"
            checked={form.PHACO === 'Prednisolone 2/52'}  onChange={(e) => updateForm({ PHACO: e.target.value })}/>

            <label for="Optimox 2/52"> Optimox 2/52</label><br/><br/>

            <label for="Aname"  className='lableDiag'>IOL Type:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="fname" className='forminput'  
                value = {form.IOL}
                onChange={(e) => updateForm({ IOL: e.target.value })}/>
                <br/>
            <label for="Aname"  className='lableDiag'>Variable W/S:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="fname"   className='forminput'
            value = {form.variable}
            onChange={(e) => updateForm({ variable: e.target.value })}/>
            <br/><br/>
            <label for="Aname" className=' p'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Dr.M.Shaminda Amarathunge</label><br/>
            <label for="Aname" className='p'>MBBS.MD.(ophth)Consultant Eye Surgeon</label><br/><br/><br/> 
            <button  type = "submit" className='Dsave'  >Update</button><br/><br/><br/><br/>

            </div>
            </div>
            </form>
            <br/><br/> <br/><br/> <br/><br/>
        </div>
    );
    }

    //a function to get ISO date with correct time zone
const getDateString = (iso) => {
  const date = new Date(iso);
  const correctDate = new Date(date.getTime() + 360 * 60000);
  return correctDate.toISOString().split("T")[0];};

    