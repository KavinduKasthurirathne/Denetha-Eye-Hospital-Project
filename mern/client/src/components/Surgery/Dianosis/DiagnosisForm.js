
import './FormD.css';
import React, {useState} from "react";
//import {Header} from '../Header.js';
import axios  from "axios";
import {useNavigate, useParams} from 'react-router-dom';

const projectlogo = require('../../../image/denethaLogo.png');

export default function DForm(){
    const params = useParams();

        const [pname , setPname]= useState("");
        const [ward , setWard]= useState("");
        const [Regno , setRegno]= useState("");
        const [age , setAge]= useState("");
        const [DAddmission , setDAddmission]= useState("");
        const [Ddischarge , setDdischarge]= useState("");
        const [Dsurgery , setDsurgery]= useState("");
        const [PHACO , setPHACO]= useState("Nevan 8 hourly 6/52");
        const [IOL , setIOL]= useState("");
        const [variable , setVariable]= useState("");
        const handleChange = (e) => {
            setPHACO(e.target.value)
             }
       
        function sendData(e){
            e.preventDefault();
            
            const newPatient = {
                pname,ward,Regno,age,DAddmission,Ddischarge,Dsurgery,PHACO,IOL,variable
            }
            
            axios.post("http://localhost:5000/api/diagnosis/add" , newPatient).then(()=> {
                // alert("Patient Details Added")
                setPname("");
                setWard("");
                setRegno("");
                setAge ("");
                setDAddmission("");
                setDdischarge("");
                setDsurgery("");
                setPHACO("");
                setIOL("");
                setVariable("");

    
            }).catch((err) => {
                alert(err)
            })
    
        }
        const navigate = useNavigate();
        const navigateToAddDiagnosis = () => {
            navigate(`/DallDetails`);
          };
    
    return(
        <div id='diagnosisedit'>
            <button  type = "submit" className='Dback' onClick={navigateToAddDiagnosis}>Back</button>
            <form className="form" onSubmit = {sendData}>
{/*             
            <button  type = "submit"  className='print' >Print</button> */}

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
                <input type="text" className='forminput' name="fname"    value = {pname}
                onChange={(e)=>{

                    setPname(e.target.value);
                }} required/><br/><br/>
                <label    className='lableDiag' >Ward Number:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  className='forminput' name="lname" value = {ward}
                onChange={(e)=>{

                    setWard(e.target.value);
                }} required/><br/><br/>
                <label for="Aname"    className='lableDiag' >Patient Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" className='forminput' name="fname"   value = {age}
                onChange={(e)=>{

                    setAge(e.target.value);
                }}/><br/><br/>
                <label for="Aname"   className='lableDiag'> Registration No:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number"  name="fname" className='forminput' value = {Regno}
                onChange={(e)=>{

                    setRegno(e.target.value);
                }} required/><br/><br/>
                <label   className='lableDiag'>Date Of Addmition:</label>
                <input type="date"  name="fname" className='forminput'  value = {DAddmission}
                onChange={(e)=>{

                    setDAddmission(e.target.value);
                }} required/><br/><br/>
                <label  className='lableDiag'>Date Of Discharge:</label>&nbsp;&nbsp;
                <input type="date"  name="fname" className='forminput' value = {Ddischarge}
                onChange={(e)=>{

                    setDdischarge(e.target.value);
                }}/><br/><br/>
                <label className='lableDiag'>Date Of Surgery:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date"  name="fname"  className='forminput' value = {Dsurgery}
                onChange={(e)=>{

                    setDsurgery(e.target.value);
                }}/><br/><br/>

            <label  className='lableDiag'>R/PHACO + 'F' IOL T/A</label>  <br/>
<br/>
            <input type="checkbox" className='mycheckbox' name="vehicle1" value="Nevan 8 hourly 6/52"   
            checked={PHACO === 'Nevan 8 hourly 6/52'} onChange={handleChange}/>

            <label for="vehicle1"> Nevan 8 hourly 6/52</label><br/>

            <input type="checkbox"  className='mycheckbox' name="vehicle2" value="Prednisolone 2/52"
             checked={PHACO === 'Prednisolone 2/52'} onChange={handleChange}/>

            <label for="vehicle2"> Prednisolone 2/52</label><br/>

            <input type="checkbox" className='mycheckbox' name="vehicle3" value=" Optimox 2/52"
            checked={PHACO === 'Prednisolone 2/52'} onChange={handleChange}/>

            <label for="Optimox 2/52"> Optimox 2/52</label><br/><br/>

            <label for="Aname"  className='lableDiag'>IOL Type:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="fname" className='forminput'  
                value = {IOL}
                onChange={(e)=>{

                    setIOL(e.target.value);
                }}/><br/>
            <label for="Aname"  className='lableDiag'>Variable W/S:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="fname"   className='forminput'
            value = {variable}
            onChange={(e)=>{

                setVariable(e.target.value);
            }}/><br/><br/>
            <label for="Aname" className=' p'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Dr.M.Shaminda Amarathunge</label><br/>
            <label for="Aname" className='p'>MBBS.MD.(ophth)Consultant Eye Surgeon</label><br/><br/><br/> 
            <button  type = "submit" className='Dsave'  >Save</button><br/><br/><br/><br/>

            </div>
            </form>
            <br/><br/> <br/><br/> <br/><br/>
        </div>
    );
    }
    