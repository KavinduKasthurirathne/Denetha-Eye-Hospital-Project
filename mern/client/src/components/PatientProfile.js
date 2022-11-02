import '../PatientProfile.css';
import '../App.css';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Button, TextField } from '@mui/material';

const printicon = require('../image/print.png');

export const PatientProfile = () => {

    function printProfile(e) {
        alert("Clicked")
    };

    function deleteProfile(e) {
        alert("Clicked")
    };

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
                    label='Name'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='age'
                    label='Age'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gender'
                    label='Gender'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='dob'
                    label='Date of Birth'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='address'
                    label='Address'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='phone'
                    label='Phone Number'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gname'
                    label='Guardian Name'
                    variant='standard'/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gphone'
                    label='Guardian Phone Number'
                    variant='standard'/>
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