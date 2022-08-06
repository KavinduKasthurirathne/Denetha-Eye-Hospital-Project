import React,{useState ,useEffect} from "react";
import { FormGroup, Button, Grid ,Paper, TextField,Radio ,RadioGroup, FormLabel, FormControl, Checkbox, FormControlLabel,Box,MenuItem } from "@mui/material";
import '../Appoinment.css';
import Dropdown from 'react-bootstrap/Dropdown';
const Types = [
    {
      value: 'T001',
      label: 'OPD Appoinment',
    },
    {
      value: 'T002',
      label: 'Oparation Appoinment',
    },
    {
      value: 'T003',
      label: 'Post Oparation Appoinment',
    },
    {
      value: 'T004',
      label: 'Clinic Appoinment',
    } 
  ];
const doctors = [
  {
    value: 'D001',
    label: 'Dr.Tharushi Navodya',
  },
  {
    value: 'D002',
    label: 'Dr.Tharidu Lakshan',
  },
  {
    value: 'D003',
    label: 'Dr.Sachin Renuka',
  },
  {
    value: 'D004',
    label: 'Dr.Chamila Wijesooriya',
  }
];

export const Appoinment=() =>{
   
    const [post,setPost] = useState(null);
    const paperStyle={padding:'30px 30px',width:'450px',margin:"20px auto"}
    const buttonColor={background:'#2A628F' ,padding:'10px 97px',margin :'5px',width:100}
    const [doctor, setdoctor] = React.useState('D001');
    const [type, settype] = React.useState('OPD');
    
    const handleChange1 = (event) => {
      setdoctor(event.target.value);
    };
    const handleChange2 = (event) => {
        settype(event.target.value);
    };
    const [Name,setName] = useState('');
    const [NameError,setNameError] =useState('');
    const [Address,setAddress] = useState('');
    const [AddressError,setAddressError] =useState('');
    const [contactnumber,setcontactnumber] = useState('');
    const [contactnumberError,setcontactnumberError] = useState('');
    const [successMsg,setSuccessMsg] = useState('');
    const logo = require('../image/denethaLogo.png');

    const handleName= (e) =>
    {
      setSuccessMsg('');
      setNameError('');
      setName(e.target.value);
    }
    const handleAddress= (e) =>
    {
      setSuccessMsg('');
      setAddressError('');
      setAddress(e.target.value);
    }
    const handlecontactnumber= (e) =>
    {
      setSuccessMsg('');
      setcontactnumberError('');
      setcontactnumber(e.target.value);
    }
   
    const handleFormSubmit =(e)=>
    {
      e.preventDefault();
      if(Name !== '')
      {

      }
      else
      {
        setNameError('Patient name Required');
      }
      if(Address !== '')
      {

      }
      else
      {
        setAddressError('Address Required');
      }
      if(contactnumber !== '')
      {

      }
      else
      {
        setcontactnumberError('Contact number is Requried');
      }    
    }
    return(
        <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
            <div> <img className='logo-img' src={logo} alt={'logo'} /></div>
            <h1>Make Appoinment</h1>
            </Grid>
            <form onSubmit={handleFormSubmit} autoComplete="off">
            <br/>
                PATIENT DETAILS 
                <br/>
                <TextField fullWidth label='Patient Name' placeholder="Enter Patient Name" onChange={handleName} value={Name}/>
                {NameError && <div className="error">{NameError}
                </div>}
                <br/><br/>
                <TextField fullWidth label='Address' placeholder="Enter Address" onChange={handleAddress} value={Address}/>
                {AddressError && <div className="error">{AddressError}
                </div>}
                <br/><br/>
                <TextField fullWidth label='Contact Number' placeholder="Enter Contact Number" onChange={handlecontactnumber} value={contactnumber}/>
                {contactnumberError && <div className="error">{contactnumberError}
                </div>}
                <br/><br/>
                <TextField fullWidth label='Age'placeholder="Enter Age" />
                <br/><br/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}}>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                </RadioGroup>
                </FormControl>
                <br/>
                APPOINMENT DETAILS
                <br/>
                <TextField type="number" fullWidth label='Appoinment Number'placeholder="Enter Appoinment Number"/>
                <br/><br/>
                <Box component="form" sx={{'& .MuiTextField-root': { width: '450px' },}}noValidate autoComplete="off">
                <div>
                <TextField
                  id="doctor"
                  select
                  label="Doctor"
                  value={doctor}
                  onChange={handleChange1}>
                  {doctors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                  </TextField>
               </div>
                </Box>
                <br/><br/>
                <Box component="form" sx={{'& .MuiTextField-root': {width: '450px' },}} noValidate autoComplete="off">
                <div>
        <TextField
          id="Type"
          select
          label="Type"
          value={type}
          onChange={handleChange2}
        >
            {Types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
             ))}
              </TextField>
              </div>
              </Box>
                <br/><br/>
                <div style={{display:'flex'}}>
                <h5>Date</h5>
                <TextField type="date" fullWidth/>
                <h5>Time</h5>
                <TextField type="time" fullWidth/>
                </div>
                <br/>
                <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} required label="I accept the terms and conditions." />
                </FormGroup>
                <div align="center" >
                <Button type='submit' variant="contained" style={buttonColor}>Submit</Button>
                <Button type='submit' variant="contained" style={buttonColor}>Reset</Button>
                </div>
            </form>
        </Paper>
    </Grid> 
    )
}
