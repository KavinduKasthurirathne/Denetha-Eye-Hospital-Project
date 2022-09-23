import React, { useState,useEffect } from "react";
import './Reception.css';

export const Receipt = (props) => {  

    const [type, settype] = useState("");
    const [Hospitalfee, setHospitalfee] = useState();
    const [Doctorfee, setDoctorfee] = useState();

    useEffect(() => {
        switch(props.type){
          case "O" : settype("OPD");
                     setHospitalfee(0);
                     setDoctorfee(800)
          break;
  
          case  "C" :settype("Clinic");
                     setHospitalfee(10000);
                     setDoctorfee(800)
          break;
  
          case  "S" : settype("Surgery");
                    setHospitalfee(10000);
                    setDoctorfee(800)
          break;
  
          case  "P" : settype("Post-Operation");
                    setHospitalfee(10000);
                    setDoctorfee(800)
                    
          break;
  
        }
  
      },[]);

    
      return(<>         
            <div id="receipt">       
            <table align="center" id="receiptTable">
                <caption> <h2>Payment Receipt</h2></caption>
                <tr>
                    <td id="receiptTable">Patient name:</td>
                    <td id="receiptTable">{props.name}</td>
                </tr>
                <tr>
                    <td id="receiptTable">Appoinment type:</td>
                    <td id="receiptTable">{type}</td>
                </tr>
                <tr>
                    <td id="receiptTable">Date:</td>
                </tr>
                <tr>
                    <td id="receiptTable">Phone:</td>
                    <td id="receiptTable">{props.phone}</td>
                </tr>
                <tr>
                    <td id="receiptTable">Age:</td>
                </tr>
                <tr>
                    <td id="receiptTable">Doctor:</td>
                </tr>
                <tr>
                    <td id="receiptTable">
                        Hospital Fee:<br/>
                        Doctor Fee:<br/>
                        Amount:
                    </td>
                    <td id="receiptTable">
                        {Hospitalfee}<br/>
                        {Doctorfee}<br/>
                        {Hospitalfee+Doctorfee}
                    </td>
                </tr>
            
                
            </table>
           
         </div>
           
        
    </>
    )
}