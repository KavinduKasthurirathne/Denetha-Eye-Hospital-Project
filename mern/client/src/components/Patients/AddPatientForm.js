import React,{useState} from 'react';
import './AddPatientForm.css';
import '../../App.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export const AddPatientForm = () => {

    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [dob, setdob] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [gname, setguardianName] = useState("");
    const [gnumber, setguardianPhone] = useState("");
    const [remarks, setremarks] = useState("");
    const navigateTo = useNavigate();

    function sendData(e) {
        e.preventDefault();
        navigateTo('/patient');
        
        const newPatient ={
            name,
            age,
            gender,
            dob,
            address,
            phone,
            gname,
            gnumber,
            remarks
        }

        axios.post("http://localhost:5000/api/patient/insert", newPatient).then(()=>{
            navigateTo('/receptionist');
        }).catch((err)=>{
            alert(err);
        });

    };

    function cancelForm(e) {
        navigateTo('/receptionist');
    };

    return (
        <>

        <div class='addformpatienttable'>
            <p class='denethaheadadd'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='addformhead'><u><b>Add New Patient</b></u></p>

            <form class='addform' onSubmit={sendData}>
                <label for="name">Full Name: * </label>
                <input type="text" id="name" className="name" placeholder='Full Name' required

                onChange = {(e)=>{
                    setname(e.target.value);
                }} /> <br></br>

                <label for="age">Age: * </label>
                <input type="text" id="age" className="age" placeholder='Age' required

                onChange = {(e)=>{
                    setage(e.target.value);
                }} /> <br></br>

                <label for="gender">Gender (M/F): </label>
                <input type="text" id="gender" className="gender" placeholder='Male (M)/ Female (F)'
                
                onChange = {(e)=>{
                    setgender(e.target.value);
                }} /> <br></br>

                <label for="dob">Date of Birth: </label>
                <input type="date" id="dob" className="dob"

                onChange = {(e)=>{
                    setdob(e.target.value);
                }} /> <br></br>
                
                <label for="address">Address: </label>
                <input type="text" id="address" className="address" placeholder='Address'

                onChange = {(e)=>{
                    setaddress(e.target.value);
                }} /> <br></br>

                <label for="phone">Phone Number: * </label>
                <input type="text" id="phone" className="phone" placeholder='Phone Number' required pattern="[0-9]{10}"

                onChange = {(e)=>{
                    setphone(e.target.value);
                }} /> <br></br>

                <label for="gname">Guardian's Name: </label>
                <input type="text" id="gname" className="gname" placeholder='Guardian Name'

                onChange = {(e)=>{
                    setguardianName(e.target.value);
                }} /> <br></br>

                <label for="gnumber">Guardian's Phone Number: </label>
                <input type="text" id="gnumber" className="gnumber" placeholder='Guardian Phone Number' pattern="[0-9]{10}"

                onChange = {(e)=>{
                    setguardianPhone(e.target.value);
                }} /> <br></br>

                <label for="remarks">Remarks: </label>
                <input type="text" id="remarks" className="remarks" placeholder='Add Remarks'
                onChange = {(e)=>{
                    setremarks(e.target.value);
                }} /> <br></br>

                <div class='buttonsAdd'>
                    <button id='saveBtn' className='button' type="submit"><b>Save</b></button>
                    <button id='cancelBtn' className='button' type="cancel" onClick={cancelForm}><b>Cancel</b></button>
                </div>

            </form>

        </div>

        </>
    );
};