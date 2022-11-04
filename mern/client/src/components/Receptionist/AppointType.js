import React, { useState } from "react";
import './Reception.css';

export const AppointType = (props) => {  
    
      return(<>
    <div id='appointType'>
        <h2 >Select Appointment type</h2>        
        <table className='AppointTable'>
          <tbody>
         <tr>
           <button id="type"><td id="Atd" onClick={()=>{props.type("O")}}><i className="fas fa-calendar-plus"></i><br/>OPD Appointment</td></button>
           <button id="type"><td id='Atd' onClick={()=>{props.type("C")}}><i className="fas fa-calendar-plus"></i><br/>Cilnic Appointment</td></button>
           <button id="type"><td id='Atd' onClick={()=>{props.type("S")}}><i className="fas fa-calendar-plus"></i><br/>Surgery Appointment</td></button>
           <button id="type"><td id='Atd' onClick={()=>{props.type("P")}}><i className="fas fa-calendar-plus"></i><br/>Post-operation Appointment</td></button>
         </tr>
         </tbody>
        </table>
       
        <button className='button' id='makeAppoint' onClick={()=>{
                 props.btnsetter(!props.btnstate)
            
                }}>
            
            Make Appointment</button>

     </div> 
     <a href="/ViewAllReceipts"><button className='button' id="ViewReceipts">View All Receipts</button></a>
        <br/>  
    </>
    )
}