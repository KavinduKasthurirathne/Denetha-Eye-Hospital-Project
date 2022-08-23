import React, { useEffect, useRef, useState } from "react";
import '../Accountant.css';
import '../../../App.css';
import { IconButton, TextField } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import PrintablePO from "./PrintablePO";
import { useReactToPrint } from 'react-to-print';

const POHeader = (props) => {
    const [inputs, setinputs] = useState({
        vendor:'',
        date:'',
        mode:''
    });
    const componentRef = useRef();

    useEffect(()=>{
        const {vendor, date, mode} = props.data
        setinputs({
            vendor: vendor,
            date: date,
            mode: mode
        });
    },[props.data]);

    const handleChange = (e) => {
        setinputs((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        }));
        props.handleChange(e);
    };

    const print = useReactToPrint({
        content: ()=>componentRef.current
    });

    return (
        <div id='po-header' className='po-flex po-anim'>
                <div id='po-container' className='po-header-child'>
                    <div id='po-num'>PO number</div>
                    <div id='po-num-value'>{props.data.poNumber}</div>
                </div>
                <div className='po-flex-child'>
                    <TextField 
                        id='vendor'
                        name='vendor'
                        size='small'
                        value={inputs.vendor ?? ''}
                        type='text'
                        onChange={handleChange} 
                        label='Vendor' 
                        InputLabelProps={{shrink: true}}/>
                </div>
                <div className='po-flex-child'>
                    <TextField 
                        name='date' 
                        size='small'
                        variant="outlined" 
                        value={inputs.date ?? ''} 
                        type='date' 
                        onChange={handleChange}
                        label='Date'
                        InputLabelProps={{shrink: true}} />
                </div>
                <div className='po-flex-child'>
                    <TextField 
                        id='mode'
                        name='mode'
                        size='small'
                        value={inputs.mode ?? ''}
                        type='text'
                        onChange={handleChange} 
                        label='Mode of payment' 
                        InputLabelProps={{shrink: true}}/>
                </div>
                <div id='print-container' className='po-flex-child' >
                    <div style={{ display: 'none' }}>
                        <PrintablePO data={props.data} ref={componentRef} />
                    </div>
                    <IconButton 
                        aria-label="print" 
                        size='large' 
                        onClick={print} >
                        <PrintIcon fontSize='large' />
                    </IconButton>
                </div>
            </div>
    );
};

export default POHeader;