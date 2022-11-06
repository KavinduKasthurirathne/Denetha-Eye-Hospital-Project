import React, { useState } from 'react';
//import data from "./data.json";
import './Inventory.css';
import { Button,Paper } from "@mui/material";


export const InventoryTable = () => {
    const [contacts,setContacts] = useState([]);
    const [addFormData,setFormData] = useState({
        itemcode:'',
        itemname:'',
        vendorcode:'',
        location:'',
        quantity:'',
        cost:'',
        type:'',
        status:'',
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
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
    {number}
    </li>
);
    return (
        <Paper elevation={20} style={paperStyle}>
        {/* <div align="center"> */}
        <div class = "MeetingDetails">
        <div class = "block1">
                
                <h1>Inventory Table</h1>
                {/* <input type = "button" id = "btn1"/>Add */}
                {/* <input type = "button" id = "btn2"/>Download */}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Vendor Code</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        {/* <th>Type</th> */}
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((Contact)=>(
                    <tr>
                    <td>{contacts.itemcode}</td>
                    <td>{contacts.itemname}</td>
                    <td>{contacts.vendorcode}</td>
                    <td>{contacts.location}</td>
                    <td>{contacts.quantity}</td>
                    <td>{contacts.cost}</td>
                    {/* <td>{contacts.type}</td> */}
                    <td>{contacts.status}</td>
                    <td><Button style={greenbutton}>Edit</Button><Button style={redbutton}>Delete</Button></td>
                </tr>
                    ))}    
                </tbody>
            </table>
            </div>
            </Paper>
  );
}

