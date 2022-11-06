import React, { useState,useEffect } from "react";
import './Reception.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


export const EditReceipt = (props) => {  

    const [type, settype] = useState("");
    const [Hospitalfee, setHospitalfee] = useState();
    const [Doctorfee, setDoctorfee] = useState();
    const [name, setname] = useState(props.name);
    const [phone, setphone] = useState(props.phone);
    const [date, setdate] = useState(props.date);
    const [age, setage] = useState(props.age);
    const [doctor, setdoctor] = useState(props.doctor);
   
    useEffect(() => {
        switch(props.type){
          case "O" : settype("OPD");
                     setHospitalfee(300);
                     setDoctorfee(500)
          break;
  
          case  "C" :settype("Clinic");
                     setHospitalfee(800);
                     setDoctorfee(1000)
          break;
  
          case  "S" : settype("Surgery");
                    setHospitalfee(0);
                    setDoctorfee(60000)
          break;
  
          case  "P" : settype("Post-Operation");
                    setHospitalfee(0);
                    setDoctorfee(0)           
          break;
  
        }
      },[]);

    let amount = Hospitalfee+Doctorfee;
    

    const handleName =({target}) =>{
        setname(target.value);
    }

    const handlePhone =({target}) =>{
        setphone(target.value);
    }

    const handleAge =({target}) =>{
        setage(target.value);
    }

    const handleDate =({target}) =>{
        setdate(target.value);
    }

    const handleDoctor =({target}) =>{
        setdoctor(target.value);
    }

    const navigateTo = useNavigate();
    const handleUpdate = (e) =>{
        e.preventDefault();
        const receiptOb = {
            name,
            phone,
            type,
            amount,
            date,
            age,
            doctor
      };
      
      
      axios.post("http://localhost:5000/api/receipt/insert", receiptOb)
      .then((res) => {
            console.log(res.data);
            navigateTo("/ViewAllReceipts");
        })
        .catch((err) => {
        console.log(err)});
    }

    
      return(<>         
            <div id="receipt">
            <form onSubmit={handleUpdate}>       
            <table align="center" id="receiptTable">
            <caption> 
                    <h2>Denetha Eye Hospital</h2>
                    <h3>Payment Receipt</h3>
                </caption>
                <tbody>
                
                <tr>
                    <td id="receiptCell">Patient name: *</td>
                    <td id="receiptCell"> <input value={name} type={"text"} onChange={handleName} required></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Appointment Type:</td>
                    <td id="receiptCell">{type}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Date: *</td>
                    <td id="receiptCell">  <input value={date} type={"date"} onChange={handleDate} required></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Phone: *<h6>*Please make sure to enter 10 digits</h6></td>
                    <td id="receiptCell"><input value={phone} type={"text"} onChange={handlePhone} required pattern="[0-9]{10}"></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Age:</td>
                    <td id="receiptCell">  <input value={age} type={"number"} onChange={handleAge}></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Doctor:</td>
                    <td id="receiptCell">  <input value={doctor} type={"text"} onChange={handleDoctor}></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">
                        Hospital Fee:<br/>
                        Doctor Fee:<br/>
                        Amount:
                    </td>
                    <td id="receiptCell">
                        Rs.{Hospitalfee}<br/>
                        Rs.{Doctorfee}<br/>
                        Rs.{amount}
                    </td>
                </tr>
                </tbody>    
            </table>
            <br/>
            <a href="/receptionist" className='button' id="cancelReceipt">Cancel</a>
           <a href="/ViewAllReceipts"><button type="submit" className='button' >Save</button></a>
           </form> 
           

           <br/>
           
         </div>
         
           
        
    </>
    )
}