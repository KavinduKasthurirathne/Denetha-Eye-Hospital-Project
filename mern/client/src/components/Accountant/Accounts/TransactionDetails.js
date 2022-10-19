import { Button, IconButton, TextField } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import React, {useRef, useState} from "react";
import PrintableTR from "./PrintableTR";
import { useReactToPrint } from 'react-to-print';

const TransactionDetails = (props) => {
    const componentRef = useRef();
    const print = useReactToPrint({
        content: ()=>componentRef.current
    });

    const calcPatientIncome = () => {
        var total = 0;
        props.data.map((item) => total += parseInt(item.amount));
        return total;
    }

    return(
        <>
            <div className='po-flex'>
                <div className='po-flex-child left-align'>
                    <p id='pc-title'>{`${props.date} Transaction Summary`} {props.root}</p>
                    <p className='bold-text'>Daily Report</p>
                </div>
                <div id='print-container' className='po-flex-child' >
                    <div style={{ display: 'none' }}>
                        <PrintableTR 
                            data={props.data}
                            ref={componentRef} />
                    </div>
                    <IconButton 
                        aria-label="print" 
                        size='large' 
                        onClick={print}>
                        <PrintIcon fontSize='large' />
                    </IconButton>
                </div>
            </div>
            <div>
                Total income from patients = Rs.{calcPatientIncome()}.00 <br/>
                Doctor Payments = Rs.##.00
            </div>
        </>
    );
};

export default TransactionDetails;