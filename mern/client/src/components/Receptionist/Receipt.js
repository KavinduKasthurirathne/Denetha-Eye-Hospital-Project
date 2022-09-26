import React, { useState,useEffect } from "react";
import './Reception.css';
import axios from "axios";
import { Appoinment } from "../Appoinment";

export const Receipt = (props) => {  

    const [type, settype] = useState("");
    const [Hospitalfee, setHospitalfee] = useState();
    const [Doctorfee, setDoctorfee] = useState();
   
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


     const handleInsert = (e) =>{

        const name=props.name;
        const phone=props.phone;

        const receiptOb = {
            name,
            phone,
            type,
            amount
      };
      

      axios.post("http://localhost:5000/api/receipt/insert", receiptOb)
      .then((res) => {
            console.log(res.data);
            alert("Appoinment completed");
            window.location.reload();
        })
        .catch((err) => {
        console.log(err)});
    }
    
    
      return(<>         
            <div id="receipt">       
            <table align="center" id="receiptTable">
            <caption> 
                    <h2>Denetha Eye Hospital</h2>
                    <h3>Payment Receipt</h3>
                </caption>
                <tbody>
                
                <tr>
                    <td id="receiptCell">Patient name:</td>
                    <td id="receiptCell">{props.name}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Appoinment type:</td>
                    <td id="receiptCell">{type}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Date:</td>
                </tr>
                <tr>
                    <td id="receiptCell">Phone:</td>
                    <td id="receiptCell">{props.phone}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Age:</td>
                </tr>
                <tr>
                    <td id="receiptCell">Doctor:</td>
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
           <a href="/receptionist"><button className='button' >Cancel</button></a>
           <button className='button' onClick={handleInsert}>Confirm Payment</button>
           <br/>
         </div>
           
        
    </>
    )
}