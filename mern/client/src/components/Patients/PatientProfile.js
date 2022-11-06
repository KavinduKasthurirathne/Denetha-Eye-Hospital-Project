import '../Patients/PatientProfile.css';
import '../../App.css';
import React, { useEffect, useState, useRef} from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { Button, TextField, useThemeProps } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import PrintablePatientProfile from "./PrintablePatientProfile";

const printicon = require('../../image/print.png');

export const PatientProfile = (props) => {

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
    const [selected, setSelected] = useState(0);


    const navigateTo = useNavigate();

    const findProfile = async () => {
        const id = {
            id: cookies.id,
        }

        await axios
          .post("http://localhost:5000/api/patient/get", id)
          .then(({data}) => {
            console.log(data);
            console.log(selected);
            console.log(props.selected);

            setname(data[props.selected].name);
            setage(data[props.selected].age);
            setgender(data[props.selected].gender);
            setdob(data[props.selected].dob);
            setaddress(data[props.selected].address);
            setphone(data[props.selected].phone);
            setgname(data[props.selected].gname);
            setgnumber(data[props.selected].gnumber);
            setpId(data[props.selected]._id);
          });
      };


    useEffect(() => {
        if(props.selected !== null) {
            setSelected(props.selected);
        }
        findProfile();
    },[props.selected]);
    

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
          docId:pId,
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

    function printProfile(e) {
        navigateTo('/printPatient');
    }


    return (
        <>
       
       <div className='patienttable'>
            <p className='denethahead'><u><b>Denetha Eye Hospital</b></u></p>
            <p className='head'><u><b>Patient Details</b></u></p>

            <div className="textfield">
                <TextField
                    sx={{width:400}}
                    name='name'
                    variant='standard'
                    label='Name'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                    value={name}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='age'
                    variant='standard'
                    label='Age'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setage(e.target.value);
                    }}
                    value={age}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gender'
                    variant='standard'
                    label='Gender'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setgender(e.target.value);
                    }}
                    value={gender}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='dob'
                    variant='standard'
                    label='Date of Birth'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setdob(e.target.value);
                    }}
                    value={dob}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='address'
                    variant='standard'
                    label='Address'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setaddress(e.target.value);
                    }}
                    value={address}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='phone'
                    variant='standard'
                    label='Phone Number'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setphone(e.target.value);
                    }}
                    value={phone}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gname'
                    variant='standard'
                    label='Guardian Name'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setgname(e.target.value);
                    }}
                    value={gname}/>

                <TextField
                    sx={{marginTop:2, width:400}}
                    name='gphone'
                    variant='standard'
                    label='Guardian Phone Number'
                    InputLabelProps={{shrink: true}}
                    onChange={(e) => {
                        setgnumber(e.target.value);
                    }}
                    value={gnumber}/>
            </div>

        
            <div className='buttonsView'>
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