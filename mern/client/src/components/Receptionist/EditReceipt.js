import React, { useState,useEffect } from "react";
import './Reception.css';
import axios from "axios";

export const EditReceipt = (props) => {  

    const [type, settype] = useState("");
    const [Hospitalfee, setHospitalfee] = useState();
    const [Doctorfee, setDoctorfee] = useState();
    const [name, setname] = useState(props.name);
    const [phone, setphone] = useState(props.phone);
   
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


    const handleUpdate = (e) =>{
        const receiptOb = {
            name,
            phone,
            type,
            amount
      };
      
      axios.post("http://localhost:5000/api/receipt/insert", receiptOb)
      .then((res) => {
            console.log(res.data);
            alert("receipt updated");
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
                   
                    <td id="receiptCell"> <input value={name} onChange={handleName}></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Appoinment type:</td>
                    <td id="receiptCell">{type}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Date:</td>
                    <td> <input></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Phone:</td>
                    <td id="receiptCell"><input value={phone} onChange={handlePhone}></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Age:</td>
                    <td> <input></input></td>
                </tr>
                <tr>
                    <td id="receiptCell">Doctor:</td>
                    <td> <input></input></td>
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
           <a href="/receptionist"><button className='button'>Cancel</button></a>
           <button className='button' onClick={handleUpdate}>Save</button>
           <br/>
         </div>
           
        
    </>
    )
}