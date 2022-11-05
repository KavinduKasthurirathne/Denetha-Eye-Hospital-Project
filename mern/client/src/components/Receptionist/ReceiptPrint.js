import React from "react";

export const ReceiptPrint = React.forwardRef((props, ref)=>{

    const logo = require('../../image/denethaLogo.png');
    return(
        <div className='receiptprint' ref={ref}>
            <div id="receipt">       
            <table align="center" id="receiptTable">
            <caption> 
            
            <div> 
                    <img id='ReceiptLogo' src={logo} alt='logo' />
                    <h3 id="paymentH2">Payment Receipt</h3>
                </div>
                
                </caption>
                <tbody>
                
                <tr>
                    <td id="receiptCell">Patient name:</td>
                    <td id="receiptCell">{props.name}</td>
                </tr>
                <tr>
                    <td id="receiptCell">Appointment Type:</td>
                    <td id="receiptCell">{props.type}</td>
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
                        Rs.{props.Hospitalfee}<br/>
                        Rs.{props.Doctorfee}<br/>
                        Rs.{props.amount}
                    </td>
                </tr>
                </tbody>    
            </table>
            </div>
        </div>
        
    )

})
