import '../PatientProfile.css';
import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { Button, TextField } from '@mui/material';
import {NavLink,useNavigate} from 'react-router-dom';

const printicon = require('../image/print.png');

export const PatientProfile = () => {

    var [name, setname] = useState();
    var [age, setage] = useState();
    var [gender, setgender] = useState();
    var [dob, setdob] = useState();
    var [address, setaddress] = useState();
    var [phone, setphone] = useState();
    var [gname, setgname] = useState();
    var [gnumber, setgnumber] = useState();
    var [pId, setpId] = useState();
    const [cookies] = useCookies("id", "name", "age", "gender", "dob", "address", "phone", "gname",
                                    "gnumber");

    const navigateTo = useNavigate();


    const findProfile = async () => {
        const data = {
          id: cookies.id,
        };
        await axios
          .post("http://localhost:5000/api/patient/get", data)
          .then(({data}) => {
            setname(data[0].name);
            setage(data[0].age);
            setgender(data[0].gender);
            setdob(data[0].dob);
            setaddress(data[0].address);
            setphone(data[0].phone);
            setgname(data[0].gname);
            setgnumber(data[0].gnumber);
            setpId(data[0]._id);
          });
      };
    
      useEffect(() => {
        findProfile();
      }, []);

    // Function will execute on click of button
    const printProfile = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    

    //Delete Patient
    async function deleteProfile(event) {
        await axios
          .post("http://localhost:5000/api/patient/delete", { pid: pId })
          .then(() => {
            window.confirm("Are you sure you want to delete?");
            findProfile();
            navigateTo('/patient');
          })
          .catch((err) => {
            alert(err);
          });
    }


    //Update Patient
    async function updateProfile(event) {
        const updateProfile = {
          pId,
          name,
          age,
          gender,
          dob,
          address,
          phone,
          gname,
          gnumber
        };
    
        console.log(updateProfile);
        await axios
          .post("http://localhost:5000/api/patient/update", updateProfile)
          .then(() => {
            alert("Patient Details Updated Successfully!");
            findProfile();
            navigateTo('/patient');
          })
          .catch((err) => {
            alert(err);
          });
      }


    function cancel(e) {
        navigateTo('/patient');
    };



    return (
        <>
       
       <div class='patienttable'>
            <p class='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p class='head'><u><b>Patient Details</b></u></p>

            <div class="textfield">
                <TextField
                    sx={{width:400}}
                    name='name'
                    variant='standard'
                    label='Name'
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                    value={name}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='age'
                    variant='standard'
                    label='Age'
                    onChange={(e) => {
                        setage(e.target.value);
                    }}
                    value={age}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gender'
                    variant='standard'
                    label='Gender'
                    onChange={(e) => {
                        setgender(e.target.value);
                    }}
                    value={gender}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='dob'
                    variant='standard'
                    label='Date of Birth'
                    onChange={(e) => {
                        setdob(e.target.value);
                    }}
                    value={dob}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='address'
                    variant='standard'
                    label='Address'
                    onChange={(e) => {
                        setaddress(e.target.value);
                    }}
                    value={address}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='phone'
                    variant='standard'
                    label='Phone Number'
                    onChange={(e) => {
                        setphone(e.target.value);
                    }}
                    value={phone}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gname'
                    variant='standard'
                    label='Guardian Name'
                    onChange={(e) => {
                        setgname(e.target.value);
                    }}
                    value={gname}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gphone'
                    variant='standard'
                    label='Guardian Phone Number'
                    onChange={(e) => {
                        setgnumber(e.target.value);
                    }}
                    value={gnumber}/>
            </div>

        
            <div class='buttonsView'>
                <button id='deleteBtn' className='button' type="delete" onClick={deleteProfile}><b>Delete</b></button>
                <button id='updateBtn' className='button' type="submit" onClick={updateProfile}><b>Update</b></button>
                <button id='cancelBtn' className='button' type="cancel" onClick={cancel}><b>Cancel</b></button>
                <button id='printBtn' className='button' type='print' onClick={printProfile}>
                    <img id="redirecting" src={printicon} alt='printicon' className='print-icon'/>
                </button>
            </div>

        </div>
        
        </>
    );
}