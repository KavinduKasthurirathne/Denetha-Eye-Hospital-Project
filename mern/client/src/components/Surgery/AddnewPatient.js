import React, {useState} from "react";
//import {Header} from '../Header.js';
import axios  from "axios";

export default function AddSuPatient (){
        const [pnumber , setPnumber]= useState("");
        const [pname , setName]= useState("");
        const [number , setNumber]= useState("");
        const [age , setAge]= useState("");
        const [gender , setGender]= useState("");
        const [Stype , setStype]= useState("");

    function sendData(e){
        e.preventDefault();
        
        const newPatient = {
            pnumber,pname,number,age,gender,Stype
        }
        
        axios.post("http://localhost:5000/api/surgery/add" , newPatient).then(()=> {
            alert("Patient Details Added")
            setPnumber("");
            setName("");
            setNumber("");
            setAge("");
            setGender("");
            setStype("");

        }).catch((err) => {
            alert(err)
        })

    }


    return(
        <div className="container">
        <form onSubmit = {sendData}>
            <div className="form-group">
                <label for="pnumber">Patient Number</label>
                <input type="number" class="form-control" id="pnumber"  placeholder="Enter Next Number" onChange={(e)=>{

                    setPnumber(e.target.value);
                }}/>    
            </div>

            <div className="form-group">
                <label for="pname">Patient Name</label>
                <input type="text" class="form-control" id="pname"  placeholder="Enter Patient's Name" onChange={(e)=>{

                setName(e.target.value);
                }}/>    
            </div>

            <div className="form-group">
                <label for="number">Number</label>
                <input type="number" class="form-control" id="number"  placeholder="Enter Number"  onChange={(e)=>{

                setNumber(e.target.value);
                }}/>    
            </div>

            <div class="form-group">
                <label for="age">Patient Age</label>
                <input type="number" class="form-control" id="age" placeholder="Enter Age"  onChange={(e)=>{

                setAge(e.target.value);
                }}/>
            </div>

            <div className="form-group">
                <label for="gender">Gender</label>
                <input type="text" class="form-control" id="gender"  placeholder="Enter Patient's Surgery Type"   onChange={(e)=>{

                        setGender(e.target.value);
                        }}/>    
            </div>
            
            

            <div className="form-group">
                <label for="Stype">Surgery Type</label>
                <input type="text" class="form-control" id="Stype"  placeholder="Enter Patient's Surgery Type"   onChange={(e)=>{

                        setStype(e.target.value);
                        }}/>    
            </div>
            
            <button type="submit" class="button">Add Patient</button>
            </form>


            </div>

    )



}