import '../PatientProfile.css';
import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { Button, TextField } from '@mui/material';

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

    const findProfile = async () => {
        const data = {
          id: cookies.id,
        };
        await axios
          .post("http://localhost:5000/api/patient/get", data)
          .then(({data}) => {
            setname(data[5].name);
            setage(data[5].age);
            setgender(data[5].gender);
            setdob(data[5].dob);
            setaddress(data[5].address);
            setphone(data[5].phone);
            setgname(data[5].gname);
            setgnumber(data[5].gnumber);
            setpId(data[5]._id);
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
    
    async function deleteProfile(event) {
        await axios
          .post("http://localhost:5000/api/patient/delete", { pid: pId })
          .then(() => {
            window.confirm("Are you sure you want to delete?");
            //alert("Patient Profile Deleted!");
            findProfile();
          })
          .catch((err) => {
            alert(err);
          });
    }

    // function deleteProfile(e) {
    //     alert("Clicked")
    // };

    function updateProfile(e) {
        alert("Clicked")
    };

    function cancel(e) {
        alert("Clicked")
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
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                    value={name}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='age'
                    variant='standard'
                    onChange={(e) => {
                        setage(e.target.value);
                    }}
                    value={age}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gender'
                    variant='standard'
                    onChange={(e) => {
                        setgender(e.target.value);
                    }}
                    value={gender}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='dob'
                    variant='standard'
                    onChange={(e) => {
                        setdob(e.target.value);
                    }}
                    value={dob}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='address'
                    variant='standard'onChange={(e) => {
                        setaddress(e.target.value);
                    }}
                    value={address}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='phone'
                    variant='standard'onChange={(e) => {
                        setphone(e.target.value);
                    }}
                    value={phone}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gname'
                    variant='standard'onChange={(e) => {
                        setgname(e.target.value);
                    }}
                    value={gname}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gphone'
                    variant='standard'onChange={(e) => {
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