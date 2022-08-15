import { IconButton } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import React from "react";
import '../../../App.css';
import '../Accountant.css';

const PCHeader = (props) => {

    return (
        <div className='po-flex'>
            <div className='po-flex-child left-align'>
                <h2>Petty Cash -> {props.root}</h2>
                <h4>Reserve - Rs.{props.reserve}</h4>
            </div>
            <div id='print-container' className='po-flex-child' >
                <div style={{ display: 'none' }}>
                    
                </div>
                <IconButton aria-label="print" size='large' >
                    <PrintIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    );
};

export default PCHeader;