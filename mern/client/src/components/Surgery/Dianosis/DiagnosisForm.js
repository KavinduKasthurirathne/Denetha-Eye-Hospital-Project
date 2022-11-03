
import './FormD.css';
import React, {useState} from "react";
//import {Header} from '../Header.js';
import axios  from "axios";
import {useNavigate} from 'react-router-dom'


export default function DForm(){

        const [pname , setPname]= useState("");
        const [ward , setWard]= useState("");
        const [Regno , setRegno]= useState("");
        const [age , setAge]= useState("");
        const [DAddmission , setDAddmission]= useState("");
        const [Ddischarge , setDdischarge]= useState("");
        const [Dsurgery , setDsurgery]= useState("");
        const [PHACO , setPHACO]= useState("");
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
                alert("Patient Details Added")
                setPname("");
                setWard("");
                setRegno("");
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
            navigate('/DallDetails');
          };
    
    return(
        <div>
            <form className="form" onSubmit = {sendData}>
            

                
                <h2 className="h2">Denetha<br/>Eye Care Center</h2>
                <p className="p">REG NO:</p>
                <div className="width">
                <h5 className="h6">34/6,1st Lane,<br/>
                    Bauddhaloka Mawatha,<br/>
                    Kurunegala.</h5></div>
                    <div className="tel"><h5>
                Tel:037-2222013 <br/>Hot line:077-7211494</h5></div>
                <h2 className="h2"><u>Diagnosis Card</u></h2>

                <div className="data">
                <label for="fname">Name of Patient:</label>&nbsp;
                <input type="text" id="fname" name="fname"    value = {pname}
                onChange={(e)=>{

                    setPname(e.target.value);
                }}/><br/>
                <label for="lname"id="wname">Ward:</label>&nbsp;&nbsp;
                <input type="text" id="lname" name="lname" value = {ward}
                onChange={(e)=>{

                    setWard(e.target.value);
                }}/>
                <label for="Aname" id="Aname">Age:</label>&nbsp;
                <input type="number" id="name" name="fname"   value = {age}
                onChange={(e)=>{

                    setAge(e.target.value);
                }}/><br/>
                <label for="Aname" id="Aname">Reg No:</label>&nbsp;
                <input type="number" id="name" name="fname"  value = {Regno}
                onChange={(e)=>{

                    setRegno(e.target.value);
                }}/><br/>
                <label for="Aname" id="Aname">Date Of Addmition:</label>&nbsp;
                <input type="date" id="name" name="fname"  value = {DAddmission}
                onChange={(e)=>{

                    setDAddmission(e.target.value);
                }}/><br/>
                <label for="Aname" id="Aname">Date Of Discharge:</label>&nbsp;
                <input type="date" id="name" name="fname"  value = {Ddischarge}
                onChange={(e)=>{

                    setDdischarge(e.target.value);
                }}/><br/>
                <label for="Aname" id="Aname">Date Of Surgery:</label>&nbsp;
                <input type="date" id="name" name="fname"  value = {Dsurgery}
                onChange={(e)=>{

                    setDsurgery(e.target.value);
                }}/><br/>

            <label >R/PHACO + 'F' IOL T/A</label>   
            <input type="text" id="name" name="fname"   value = {PHACO}
                onChange={(e)=>{

                    setPHACO(e.target.value);
                }}/><br/>
            
            {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Nevan 8 hourly 6/52"   
            checked={PHACO === 'Nevan 8 hourly 6/52'} onChange={handleChange}/>
            <label for="vehicle1"> Nevan 8 hourly 6/52</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Prednisolone 2/52"
             checked={PHACO === 'Prednisolone 2/52'} onChange={handleChange}/>
            <label for="vehicle2"> Prednisolone 2/52</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value=" Optimox 2/52"
            checked={PHACO === 'Prednisolone 2/52'} onChange={handleChange}/>
            <label for="Optimox 2/52"> Optimox 2/52</label> */}

            <label for="Aname" id="Aname">IOL Type:</label>&nbsp;
                <input type="text" id="name" name="fname"  
                value = {IOL}
                onChange={(e)=>{

                    setIOL(e.target.value);
                }}/><br/>
            <label for="Aname" id="Aname">Variable W/S</label>&nbsp;
            <input type="text" id="name" name="fname"   
            value = {variable}
            onChange={(e)=>{

                setVariable(e.target.value);
            }}/><br/>
            <label for="Aname" id="Aname">Dr.M.Shaminda Amarathunge</label>
            <label for="Aname" id="Aname">MBBS.MD.(ophth)Consultant Eye Surgeon</label>
            <button  onClick={navigateToAddDiagnosis} >Save</button>

            </div>
            </form>
        </div>
    );
    }
    