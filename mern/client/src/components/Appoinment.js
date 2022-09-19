import React,{useState ,useEffect} from "react";
import { Select,InputLabel, FormGroup, Button, Grid ,Paper, TextField,Radio ,RadioGroup, FormLabel, FormControl, Checkbox, FormControlLabel,Box,MenuItem } from "@mui/material";
import '../Appoinment.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import { Help } from "./Help";

export const Appoinment=() =>{
   
    const [post,setPost] = useState(null);
    const paperStyle={padding:'30px 30px',width:'450px',margin:"20px auto"}
    const buttonColor={background:'#2A628F' ,padding:'10px 97px',margin :'5px',width:100}
    const buttongreenColor = {background:'#3D8361',padding:'10px 97px',margin :'5px',width:100};
    const [Name,setName] = useState('');
    const [Address,setAddress] = useState('');
    const [Age,setAge] = useState('');
    const [Gender,setGender] = useState('');
    const [appoinmentnumber,setAppoinmentnumber] = useState('');
    const [contactnumber,setcontactnumber] = useState('');
    const [doctor, setdoctor] = useState('');
    const [type, settype] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [cookies] = useCookies('proxy');
    const navigateTo = useNavigate();
    const logo = require('../image/denethaLogo.png');

    const handleName= ({target}) =>
    {
      setName(target.value);
    }
    const handleAddress= ({target}) =>
    {
      setAddress(target.value);
    }
    const handleAge =({target}) =>
    {
      setAge(target.value);
    }
    const handlecontactnumber= ({target}) =>
    {
      setcontactnumber(target.value);
    }
    const handlegender =({target}) =>
    {
      setGender(target.value);
    }
    const handleDoctor =({target}) =>
    {
      setdoctor(target.value);
    }
    const handleappoinmentnumber =({target}) =>
    {
      setAppoinmentnumber(target.value);
    }
    const handleType = ({target})=>
    {
      settype(target.value);
    }
   const handleDate = ({target})=>
    {
      setDate(target.value);
    }
    const handleTime = ({target})=>
    {
      setTime(target.value);
    }
    const handleSubmit =async({target}) =>
    {
      const appoinment = {
        name: Name,
        address: Address,
        phone: contactnumber,
        age: Age,
        gender:Gender ,
        appoinmentnumber:appoinmentnumber,
        type:type,
        date: date,
        time:time,
        doctor: doctor
    };
  await axios.post(`${cookies.proxy}/api/appointment/record`,appoinment)
  .then((res)=>{
    alert("Your appoinment successfully added");
  console.log(res.data);
  navigateTo('/appoinmenttable');

  }).catch((err)=>{
    alert("Your appoinment have getting inturrupted.Try again");
    console.log(err);
  })

    }

    return(
        <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
            <div> <img className='logo-img' src={logo} alt={'logo'} /></div>
            <h1>Make Appoinment</h1>
            </Grid>
            <form>
            <br/>
                PATIENT DETAILS 
                <br/><br/>
                <TextField fullWidth label='Patient Name' placeholder="Enter Patient Name" onChange={handleName} value={Name}/>
                <br/><br/>
                <TextField fullWidth label='Address' placeholder="Enter Address" onChange={handleAddress} value={Address}/>
                <br/><br/>
                <TextField fullWidth label='Contact Number' placeholder="Enter Contact Number" onChange={handlecontactnumber} value={contactnumber}/>
                <br/><br/>
                <TextField fullWidth label='Age'placeholder="Enter Age" value={Age} onChange={handleAge}/>
                <br/><br/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" value={Gender} style={{display:'initial'}} onChange={handlegender}>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                </RadioGroup>
                </FormControl>
                <br/>
                APPOINMENT DETAILS
                <br/><br/>
                <TextField type="number" fullWidth label='Appoinment Number'placeholder="Enter Appoinment Number" onChange={handleappoinmentnumber} value={appoinmentnumber}/>
                <br/><br/>
                
                <FormControl sx={{marginTop: 2, width:450}}>
                <InputLabel id='Select_Type'  >Doctor</InputLabel>
                <Select 
                  label='Doctor'
                  labelId='select-Doctor-label'
                  id='doctor'
                  name='doctor'
                  value={doctor} 
                  onChange={handleDoctor}
                    variant='standard' >
                        <MenuItem value=''>
                            <div style={{marginLeft: 80,width:350}}>Select</div>
                        </MenuItem>
                        <MenuItem value='Dr.Anurudda Yapa'>
                            <div style={{marginLeft: 80,width:350}}>Dr.Anurudda Yapa</div>
                        </MenuItem>
                        <MenuItem value='Dr.Samathi Rajapaksha'>
                            <div style={{marginLeft: 80,width:350}}>Dr.Samathi Rajapaksha</div>
                        </MenuItem>
                        <MenuItem value='Dr.Selvanagam Maheshvari'>
                            <div style={{marginLeft: 80,width:350}}>Dr.Selvanagam Maheshvari</div>
                        </MenuItem>
                        <MenuItem value='Dr.Ransiri Ubewarana'>
                            <div style={{marginLeft: 80,width:350}}>Dr.Ransiri Ubewarana</div>
                        </MenuItem>
                </Select>
            </FormControl>
                <br/><br/>
           
                <FormControl sx={{marginTop: 2, width:450}}>
                <InputLabel id='Select_Type'  >Type</InputLabel>
                <Select 
                  label='Type'
                  labelId='select-role-label'
                  id='Type'
                  name='Type'
                  value={type} 
                  onChange={handleType}
                    variant='standard' >
                        <MenuItem value=''>
                            <div style={{marginLeft: 80,width:350}}>Select</div>
                        </MenuItem>
                        <MenuItem value='OPD'>
                            <div style={{marginLeft: 80,width:350}}>OPD</div>
                        </MenuItem>
                        <MenuItem value='Clinic'>
                            <div style={{marginLeft: 80,width:350}}>Clinic</div>
                        </MenuItem>
                        <MenuItem value='Operation'>
                            <div style={{marginLeft: 80,width:350}}>Operation</div>
                        </MenuItem>
                        <MenuItem value='Postoparation'>
                            <div style={{marginLeft: 80,width:350}}>Post Oparation</div>
                        </MenuItem>
                </Select>
            </FormControl>
           
                <br/><br/>
                <div style={{display:'flex'}}>
                <h5>Date</h5>
                <TextField type="date" fullWidth onChange={handleDate} value={date}/>
                <h5>Time</h5>
                <TextField type="time" fullWidth onChange={handleTime} value ={time}/>
                </div>
                <br/>
                <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} required label="I accept the terms and conditions." />
                </FormGroup>
                <div align="center" >
                <Button  onClick={handleSubmit} variant="contained" style={buttonColor}>Submit</Button>
                <Button  variant="contained" style={buttonColor}><NavLink to='/appoinmenttable' style={{color:'black'}} >
                               Appointment Table
                                </NavLink></Button>
                <br/>
                </div>
            </form>
        </Paper>
    </Grid> 
    )
}
