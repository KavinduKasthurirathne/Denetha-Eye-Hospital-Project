import React, { useState,useEffect,useRef } from "react";
import './Reception.css';
import axios from "axios";
import { useReactToPrint } from 'react-to-print';
import { ReceiptPrint } from "./ReceiptPrint";

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
        const date=props.date;
        const age=props.age;
        const doctor = props.doctor;

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
            
            
        })
        .catch((err) => {
        console.log(err)});
    }

    const componentRef = useRef();

    const print = useReactToPrint({
        content: ()=>componentRef.current
    });
    
    
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
                    <td id="receiptCell">Appointment Type:</td>
                    <td id="receiptCell">{type}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Date:</td>
                    <td id="receiptCell">{props.date}</td>

                </tr>
                <tr>
                    <td id="receiptCell">Phone:</td>
                    <td id="receiptCell">{props.phone}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Age:</td>
                    <td id="receiptCell">{props.age}</td>

                </tr>
                <tr>
                    <td id="receiptCell">Doctor:</td>
                    <td id="receiptCell">{props.doctor}</td>

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
           <button className='button' onClick={()=>{
                 props.btnsetter(!props.btnstate)
                }}>Edit</button>
           <a href="\ViewAllReceipts"><button className='button' onClick={handleInsert}>Confirm Payment</button></a>
           <button className="button" onClick={print}><i class='fa fa-print'></i></button>
            <div style={{display:"none"}}>
                <ReceiptPrint  ref={componentRef}
                               name={props.name}
                               type={type}
                               date={props.date}
                               phone={props.phone}
                               age={props.age}
                               doctor={props.doctor}
                               Hospitalfee={Hospitalfee}
                               Doctorfee={Doctorfee}
                               amount={amount}
            /></div>
           <br/>
         </div>
           
        
    </>
    )
}