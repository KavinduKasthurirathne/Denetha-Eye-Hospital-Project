import React, {useState} from "react";
//import {Header} from '../Header.js';
import axios  from "axios";
import {useNavigate} from 'react-router-dom';
import './Addnew.css';

export default function AddSuPatient (){
        const [pnumber , setPnumber]= useState("");
        const [pname , setName]= useState("");
        const [number , setNumber]= useState("");
        const [age , setAge]= useState("");

        const [gender, setGender] = React.useState('Female');

        const handleChange = (e) => {
         setGender(e.target.value)
             }
        const [Stype , setStype]= useState("");

    function sendData(e){
        e.preventDefault();
        
        const newPatient = {
            pnumber,pname,number,age,gender,Stype
        }
        
        axios.post("http://localhost:5000/api/surgery/add" , newPatient).then(()=> {
            // alert("Patient Details Added")
            setPnumber("");
            setName("");
            setNumber("");
            setAge("");
            //setGender("");
            setStype("");

        }).catch((err) => {
            alert(err)
        })

    }
    const navigate = useNavigate();
    const navigateToAddNew = () => {
        navigate('/surgery');
      };

    return(
        <div className="container2">
        <button type="submit" class="Dback"  onClick={navigateToAddNew}> Back </button>
        <form onSubmit = {sendData} className = "formcolor">
        <br/> <br/><br/> 
            <div className="form-group">
                <h2>Add New Patient</h2><br/>
                <label for="pnumber">Patient Number : </label>
                <input type="number" class="form-control" id="pnumber"  placeholder="Enter Next Number" value = {pnumber}
                onChange={(e)=>{

                    setPnumber(e.target.value);
                }} required/>    
            </div>
                <br/>
            <div className="form-group">
                <label for="pname">Patient Name :</label>&nbsp;&nbsp;&nbsp;
                <input type="text" class="form-control" id="pname"  placeholder="Enter Patient's Name" value = {pname} onChange={(e)=>{

                setName(e.target.value);
                }} required/>    
            </div><br/>

            <div className="form-group">
                <label for="number">REG NO :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input type="number" class="form-control" id="number"  placeholder="Enter Number" value = {number} onChange={(e)=>{

                setNumber(e.target.value);
                }} required/>    
            </div><br/>

            <div class="form-group">
                <label for="age">Patient Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" className="form-control" id="age" placeholder="Enter Age" value = {age} onChange={(e)=>{

                setAge(e.target.value);
                }}/>
            </div><br/>
            <div class="form-group">
            <label for="gender" className="gedercss">Gender :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" value="Male" checked={gender === 'Male'} onChange={handleChange} /> Male&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" value="Female" checked={gender === 'Female'} onChange={handleChange}/> Female</div>
            <br/>
            
            

            <div className="form-group">
                <label for="Stype">Surgery Type :</label>
                <input type="text" class="form-control" id="Stype"  placeholder="Enter Patient's Surgery Type" value = {Stype}  onChange={(e)=>{

                        setStype(e.target.value);
                        }}/>    
            </div>
            <br/>
            <button type="submit" class="button" >Add Patient</button>
            <br/><br/> <br/>
            </form>
           
            <br/><br/> <br/>
         
            </div>

    )



}