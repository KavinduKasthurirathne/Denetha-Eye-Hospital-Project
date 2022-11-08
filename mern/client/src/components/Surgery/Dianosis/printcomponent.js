
import './FormD.css';
import React, { useState, useEffect,useRef } from "react";
//import {Header} from '../Header.js';
import axios  from "axios";
import { useParams, useNavigate } from "react-router";
import { useReactToPrint } from "react-to-print";

const projectlogo = require('../../../image/denethaLogo.png');

export default function PrintForm(){
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Patient Surgery Records",
    onAfterPrint: () => history(-1),
  });
      const history = useNavigate();


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
      
       navigatefor("/DallDetails");
     }
     

        const navigate = useNavigate();
        const navigateToAddDiagnosis = () => {
            navigate('/DallDetails');
          };
    
    return(
        <div className='surgeryprintcontainer'>
          <button  type = "submit"  className='print'  onClick={handlePrint}>Print</button>
            <div   ref={componentRef}><form className='printcomponenentform'  id='diagnosisedit'>
            
           

                <img src= {projectlogo} alt='logo' className='logoForDiagnosisprint'></img>
               
               <div className='diagnocontainer'>
               <h2  className='printH2' >Denetha Eye Care Center</h2>
                
                <div >
                <h5 className='printH4' >34/6,1st Lane,
                    Bauddhaloka Mawatha,<br/><div className='h5edit'>
                    Kurunegala.</div></h5></div> </div><br/>
                    {/* <div className="telPrint"><h5>
                Tel:037-2222013 <br/>Hot line:077-7211494</h5></div> */}
                <hr/>
                <h2 className="Dh2"><u>Diagnosis Card</u></h2><br/>

                <div >
                <label   className='lableDiag'>Name of Patient:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className='forminput' name="fname"    value = {form.pname}
                 onChange={(e) => updateForm({ pnumber: e.target.value })}/>
                 <br/>
                <label    className='lableDiag' >Ward Number:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  className='forminput' name="lname" value = {form.ward}
                 onChange={(e) => updateForm({ ward: e.target.value })}/>
                 <br/>

                <label for="Aname"    className='lableDiag' >Patient Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" className='forminput' name="fname"   value = {form.age}
               onChange={(e) => updateForm({ age: e.target.value })}/>
               <br/>

                <label for="Aname"   className='lableDiag'> Registration No:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number"  name="fname" className='forminput' value = {form.Regno}
                onChange={(e) => updateForm({ Regno: e.target.value })}/>
                <br/>

                <label   className='lableDiag'>Date Of Addmition:</label>&nbsp;
                <input type="date"  name="fname" className='forminput'  value = {form.DAddmission}
                onChange={(e) => updateForm({ DAddmission: getDateString (e.target.value) })}/>
                <br/>

                <label  className='lableDiag'>Date Of Discharge:</label>&nbsp;&nbsp;
                <input type="date"  name="fname" className='forminput' value = {form.Ddischarge}
                 onChange={(e) => updateForm({ Ddischarge: getDateString (e.target.value) })}/>
                 <br/>

                <label className='lableDiag'>Date Of Surgery:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date"  name="fname"  className='forminput' value = {form.Dsurgery}
                onChange={(e) => updateForm({ Dsurgery: getDateString (e.target.value) })}/>
                <br/>

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

            <label for="Optimox 2/52"> Optimox 2/52</label><br/>
            <br/>
            <label for="Aname"  className='lableDiag'>IOL Type:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="fname" className='forminput'  
                value = {form.IOL}
                onChange={(e) => updateForm({ IOL: e.target.value })}/>
                <br/>
            <label for="Aname"  className='lableDiag'>Variable W/S:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="fname"   className='forminput'
            value = {form.variable}
            onChange={(e) => updateForm({ variable: e.target.value })}/>
            <br/><br/><br/>
            <label for="Aname" className=' p'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Dr.M.Shaminda Amarathunge</label><br/>
            <label for="Aname" className='p'>MBBS.MD.(ophth)Consultant Eye Surgeon</label><br/><br/>
           

            </div>
            </form>
           
            </div>
            <br/><br/> <br/><br/>
        </div>
    );
    }

    //a function to get ISO date with correct time zone
const getDateString = (iso) => {
  const date = new Date(iso);
  const correctDate = new Date(date.getTime() + 360 * 60000);
  return correctDate.toISOString().split("T")[0];};

    