import React from "react";
import '../Accountant/Accountant.css';
import '../Patients/PrintablePatient.css';
import '../../App.css';
import {TextField } from "@mui/material";

const PrintablePatientProfile = React.forwardRef((props, ref) => {

    // var items = [];
    // if(props.data.items) {
    //     items = JSON.parse(props.data.items);
    // }

    // const calculateTotal = () => {
    //     let sum = 0;
    //     if(items){
    //         if(items.length>0){
    //             items.map((item)=>(sum += parseFloat(item.amount)));
    //         }
    //     }
    //     return(sum.toFixed(2));
    // };

    const logo = require('../../image/denethaLogo.png');

    return (
        <div className='a4' ref={ref}>
            <div className='po-flex' >
                <div id='po-logo-container' className='po-flex-child'>
                    <img id='print-logo' src={logo} alt='logo' />
                </div>
                <div className='po-flex-child'>
                    <br />
                    <h4>Denetha Eye Hospital (Pvt) Ltd</h4>
                    <p style={{fontSize:'small'}}>No.01, 1st Lane,<br />
                        Bauddhaloka Mawatha,
                        Kurunegala.<br />
                        Tel: 0372222013
                    </p>
                </div>
            </div>

            <hr />

        </div>
    );
});

export default PrintablePatientProfile;