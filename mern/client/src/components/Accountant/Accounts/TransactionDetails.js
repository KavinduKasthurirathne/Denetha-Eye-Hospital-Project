import { Button, IconButton, TextField } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import React, {useEffect, useRef, useState} from "react";
import PrintableTR from "./PrintableTR";
import { useReactToPrint } from 'react-to-print';

const TransactionDetails = (props) => {
    const componentRef = useRef();
    const [editButton, setEditButton] = useState(true);

    useEffect(()=> {
        if(
            props.inputs.date != null &&
            props.inputs.name != null &&
            props.inputs.type != null &&
            props.inputs.amount != null &&
            props.editID != null){
                setEditButton(false);
            } else {
                setEditButton(true);
            }
    }, [props.inputs, props.editID]);
    
    const print = useReactToPrint({
        content: ()=>componentRef.current
    });

    const handleInputs = ({target}) => {
        props.setInputs(prev => ({...prev, [target.name]: target.value}));
    };

    const calcPatientIncome = () => {
        var total = 0;
        if(props.patientData){
           props.patientData.map((item) => total += parseInt(item.amount)); 
        }
        return total;
    }

    const submitEdit = () => {};

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
                            patientData={props.patientData}
                            date={props.date}
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
            <div style={{textAlign:'right', width:'45%', margin:'auto'}}>
                Total income from patients = Rs.{calcPatientIncome()}.00 <br/>
                Total Doctor Payments = Rs.##.00 <br/>
                <hr/>
                Gross Income - Rs.{calcPatientIncome() - 0}.00 <br/>
            </div>
            <hr/><br/>
            <div style={{textAlign:'left', width:'60%', margin:'auto'}}>
                <TextField 
                    required
                    id='date'
                    name='date'
                    size='small'
                    value={props.inputs.date ?? ''}
                    type='date'
                    onChange={handleInputs} 
                    label='Date' 
                    InputLabelProps={{shrink: true}} /><br/><br/>
                <TextField 
                    required
                    id='name'
                    name='name'
                    size='small'
                    value={props.inputs.name ?? ''}
                    type='text'
                    onChange={handleInputs} 
                    label='Name'  /><br/><br/>
                <TextField 
                    id='phone'
                    name='phone'
                    size='small'
                    value={props.inputs.phone ?? ''}
                    type='text'
                    onChange={handleInputs} 
                    label='phone'  />
                <Button 
                    disabled={editButton}
                    sx={{marginLeft:10}} 
                    color='secondary' 
                    variant="contained" 
                    onClick={submitEdit}>EDIT RECORD</Button>
                <br/><br/>
                <TextField 
                    required
                    id='type'
                    name='type'
                    size='small'
                    value={props.inputs.type ?? ''}
                    type='text'
                    onChange={handleInputs} 
                    label='Appointment'  /><br/><br/>
                <TextField 
                    required
                    id='amount'
                    name='amount'
                    size='small'
                    value={props.inputs.amount ?? ''}
                    type='text'
                    onChange={handleInputs} 
                    label='Amount'  /><br/>
            </div>
        </>
    );
};

export default TransactionDetails;