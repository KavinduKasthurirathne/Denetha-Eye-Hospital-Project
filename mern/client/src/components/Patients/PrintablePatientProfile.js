import React, { useEffect, useRef, useState } from "react";
import '../Patients/PrintablePatient.css';
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Button } from '@mui/material';
import axios from "axios";


const PrintablePatientProfile = () => {

    const logo = require('../../image/denethaLogo.png');

    //Printing Function
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Patient Profile",
        onAfterPrint: () => history(-1),
    });

    const { id } = useParams();

    const date = new Date();

    const history = useNavigate();

    return (
        <Container className="printPatient">
            <div className='a4Patient' ref={componentRef}>
                <div className='po-flex' >
                    <div id='po-logo-container' className='po-flex-child'>
                        <img id='print-logo' src={logo} alt='logo' />
                    </div>
                    <div className='printpatient-flex-child'>
                        <br />
                        <h4>Denetha Eye Hospital (Pvt) Ltd</h4>
                        <p style={{fontSize:'small'}}>No.01, 1st Lane,<br />
                            Bauddhaloka Mawatha,
                            Kurunegala.<br />
                            Tel: 0372222013
                        </p>
                    </div>
                </div>

                <hr/>

                <div className='printableTable'>
                    <table>
                        <tr>
                            <th className="printpatientTH">Full Name: </th>
                            <td className="printpatientTD">Name</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Age: </th>
                            <td className="printpatientTD">Age</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Gender: </th>
                            <td className="printpatientTD">Gender</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Date of Birth: </th>
                            <td className="printpatientTD">Date of Birth</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Address: </th>
                            <td className="printpatientTD">Address</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Phone Number: </th>
                            <td className="printpatientTD">Phone Number</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Guardian's Name: </th>  
                            <td className="printpatientTD">Guardian's Name</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Guardian's Phone Number: </th>  
                            <td className="printpatientTD">Guardian's Phone Number</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Remarks: </th>  
                            <td className="printpatientTD">Remarks</td>
                        </tr>
                    </table>
                </div>

            </div>

            <button id='printPatientBtn' className='button' type='print' onClick={handlePrint}>
                PRINT
            </button>
            
        </Container>
    );
};

export default PrintablePatientProfile;