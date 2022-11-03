import { Button, IconButton, TextField } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import React, {useEffect, useRef, useState} from "react";
import PrintableTR from "./PrintableTR";
import { useReactToPrint } from 'react-to-print';
import { useCookies } from 'react-cookie';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransactionDetails = (props) => {
    const componentRef = useRef();
    const [editButton, setEditButton] = useState(true);
    const [cookies] = useCookies("proxy");
    const [doctorTotal, setDoctorTotal] = useState(0);
    const [patientTotal, setPatientTotal] = useState(0);

    useEffect(()=>{
        setDoctorTotal(()=>2000);
        setPatientTotal(()=>calcPatientIncome());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.patientData]);

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

    const submitEdit = async () => {
        const data = {
            date: props.inputs.date,
            name: props.inputs.name,
            type: props.inputs.type,
            amount: props.inputs.amount,
            id: props.editID,
        }
        await axios.post(`${cookies.proxy}/api/transactions/edit`, data)
        .then(res => {
            toast(res.data.message);
            props.refreshData(props.date);
        })
        .catch(err => console.log(err))
    };

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
                Total income from patients = Rs.{patientTotal}.00 <br/>
                Total Doctor Payments = Rs.{doctorTotal}.00 <br/>
                <hr/>
                Gross Income - Rs.{patientTotal - doctorTotal}.00 <br/>
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

                <ToastContainer />
            </div>
        </>
    );
};

export default TransactionDetails;