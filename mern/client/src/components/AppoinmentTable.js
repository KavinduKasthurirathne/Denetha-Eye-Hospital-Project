import React, { useState } from 'react';
import '../App.css';
import data from "./data.json";
import '../Appoinment.css';
import { Button,Paper } from "@mui/material";

export const AppoinmentTable = () => {
    const [contacts,setContacts] = useState(data);
    const [addFormData,setFormData] = useState({
        name:'',
        address:'',
        contactnumber:'',
        age:'',
        gender:'',
        appoinmentnumber:'',
        doctor:'',
        type:'',
        date:'',
        time:''
    })
    
    const handleformsubmit = (event) =>
    {
        event.preventDefault();
        const filedname = event.target.getAttribute('name');
        const feildvalue = event.target.value;
        const newdata = {...addFormData};
        newdata[filedname] = feildvalue;
        setFormData(newdata);
    }
    const paperStyle={padding:'2px 2px',width:'1305px',margin:"20px auto"}
    const redbutton={background:'#FF6760' ,padding:'0px',margin :'5px',width:100}
    const greenbutton={background:'#00ADA3' ,padding:'0px',margin :'5px',width:100}
    
    return (
        <Paper elevation={20} style={paperStyle}>
        <div align="center">
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Appoinemnt Number</th>
                        <th>Doctor</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((Contact)=>(
                    <tr>
                    <td>{Contact.name}</td>
                    <td>{Contact.address}</td>
                    <td>{Contact.contactnumber}</td>
                    <td>{Contact.age}</td>
                    <td>{Contact.gender}</td>
                    <td>{Contact.appoinmentnumber}</td>
                    <td>{Contact.doctor}</td>
                    <td>{Contact.type}</td>
                    <td>{Contact.date}</td>
                    <td>{Contact.time}</td>
                    <td><Button style={greenbutton}>Edit</Button><Button style={redbutton}>Delete</Button></td>
                </tr>
                    ))}    
                </tbody>
            </table>
            </div>
            </Paper>
  );
}