import React,{useState} from 'react';
import '../AddPatientForm.css';
import '../App.css';
import axios from "axios";

export const AddPatientForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [gname, setGuardianName] = useState("");
    const [gnumber, setGuardianPhone] = useState("");
    const [checkboxCall, setCheckboxCall] = useState("");
    const [checkboxMsg, setCheckboxMsg] = useState("");
    const [remarks, setRemarks] = useState("");

    function sendData(e) {
        e.preventDefault();
        alert("Successfully Added!");
        
        const newPatient ={
            name,
            age,
            gender,
            dob,
            address,
            phone,
            gname,
            gnumber,
            checkboxCall,
            checkboxMsg,
            remarks
        }

        axios.post("http://localhost:5000/AddPatient/add")
    }

    return (
        <>

        <div class='addformpatienttable'>
            <p class='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='addformhead'><u><b>Add New Patient</b></u></p>

            <form class='addform' onSubmit={sendData}>
                <label for="name">Full Name: </label>
                <input type="text" id="name" className="name" placeholder='Full Name' required

                onchange = {(e)=>{
                    setName(e.target.value);
                }} /> <br></br>

                <label for="age">Age: </label>
                <input type="text" id="age" className="age" placeholder='Age' required

                onchange = {(e)=>{
                    setAge(e.target.value);
                }} /> <br></br>

                <label for="gender">Gender (M/F): </label>
                <input type="text" id="gender" className="gender" placeholder='Male (M)/ Female (F)' required
                
                onchange = {(e)=>{
                    setGender(e.target.value);
                }} /> <br></br>

                <label for="dob">Date of Birth: </label>
                <input type="date" id="dob" className="dob"

                onchange = {(e)=>{
                    setDob(e.target.value);
                }} /> <br></br>
                
                <label for="address">Address: </label>
                <input type="text" id="address" className="address" placeholder='Address'

                onchange = {(e)=>{
                    setAddress(e.target.value);
                }} /> <br></br>

                <label for="phone">Phone Number: </label>
                <input type="text" id="phone" className="phone" placeholder='Phone Number' required

                onchange = {(e)=>{
                    setPhone(e.target.value);
                }} /> <br></br>

                <label for="gname">Guardian's Name: </label>
                <input type="text" id="gname" className="gname" placeholder='Guardian Name'

                onchange = {(e)=>{
                    setGuardianName(e.target.value);
                }} /> <br></br>

                <label for="gnumber">Guardian's Phone Number: </label>
                <input type="text" id="gnumber" className="gnumber" placeholder='Guardian Phone Number'

                onchange = {(e)=>{
                    setGuardianPhone(e.target.value);
                }} /> <br></br>

                <label for="checkboxform">How do you like to remind upcoming appointments: </label> <br></br>

                <div class='checkboxes'>
                    <input type="checkbox" id="checkboxCall" className="checkboxCall" value="Call"
                    onchange = {(e)=>{
                        setCheckboxCall(e.target.value);
                    }} />

                    <label for="call">Call</label>

                    <input type="checkbox" id="checkboxMsg" className="checkboxMsg" value="Message"
                    onchange = {(e)=>{
                        setCheckboxMsg(e.target.value);
                    }} />

                    <label for="msg">Message</label>
                </div>

                <label for="remarks">Remarks: </label>
                <input type="text" id="remarks" className="remarks" placeholder='Add Remarks'
                onchange = {(e)=>{
                    setRemarks(e.target.value);
                }} /> <br></br>

                <div class='buttons'>
                    <button id='saveBtn' class='saveBtn' type="submit"><b>Save</b></button>
                    <button id='cancelBtn' class='cancelBtn' type="cancel"><b>Cancel</b></button>
                </div>

            </form>

        </div>

        </>
    );
};