import React, { useEffect, useRef, useState } from "react";
import '../Patients/PrintablePatient.css';
import { Container } from "@mui/system";


export const PrintablePatientProfile = React.forwardRef((props, ref) => {

    const logo = require('../../image/denethaLogo.png');


    return (
        <Container className="printPatient">
            <div className='a4Patient' ref={ref}>
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
                            <td className="printpatientTD">{props.name}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Age: </th>
                            <td className="printpatientTD">{props.age}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Gender: </th>
                            <td className="printpatientTD">{props.gender}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Date of Birth: </th>
                            <td className="printpatientTD">{props.dob}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Address: </th>
                            <td className="printpatientTD">{props.address}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Phone Number: </th>
                            <td className="printpatientTD">{props.phone}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Guardian's Name: </th>  
                            <td className="printpatientTD">{props.gname}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Guardian's Phone Number: </th>  
                            <td className="printpatientTD">{props.gnumber}</td>
                        </tr>
                        <tr>
                            <th className="printpatientTH">Remarks: </th>  
                            <td className="printpatientTD">{props.remarks}</td>
                        </tr>
                    </table>
                </div>

            </div>
            
        </Container>
    );
})