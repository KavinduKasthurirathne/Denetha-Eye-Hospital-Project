import { Button, IconButton, TextField } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import React, {useRef, useState} from "react";
import '../../../App.css';
import '../Accountant.css';
import PrintablePC from './PrintablePC';
import { useReactToPrint } from 'react-to-print';
import NoticeDialog from "../NoticeDialog";
import axios from "axios";
import {useCookies} from 'react-cookie';

const PCHeader = (props) => {
    const [dialog, setDialog] = useState(false);
    const [newReserve, setNewReserve] = useState('.00');
    const componentRef = useRef();
    const [cookies] = useCookies('proxy');

    const print = useReactToPrint({
        content: ()=>componentRef.current
    });

    const handleReserve = () => {
        setNewReserve(props.reserve)
        setDialog(true);
    };

    const handleChange = ({target}) => {
        setNewReserve(target.value);
    };

    const onSubmit = async () => {
        const data = {reserve: parseFloat(newReserve).toFixed(2)}
        await axios.post(`${cookies.proxy}/api/pettyCash/updateData`, data)
        .then((res)=>{
            setDialog(false);
            setNewReserve('');
            props.getReserve();
        }).catch((err)=>{
            console.log(err);
        })};

    return (
        <div className='po-flex'>
            <div className='po-flex-child left-align'>
                <p id='pc-title'>{'Petty Cash -> '} {props.root}</p>
                <p className='bold-text'>Remaining Reserve - Rs.{props.calculateReserve}</p>
            </div>
            <div className='po-flex-child'>
                <p id='reserve'>Reserve - {props.reserve}</p>
                <Button 
                    aria-label='change-reserve' 
                    onClick={handleReserve} >
                    Change Reserve
                </Button>
            </div>
            <div id='print-container' className='po-flex-child' >
                <div style={{ display: 'none' }}>
                    <PrintablePC 
                        data={props.data} 
                        root={props.root} 
                        reserve={props.reserve} 
                        calculateReserve={props.calculateReserve}
                        ref={componentRef} />
                </div>
                <IconButton 
                    aria-label="print" 
                    size='large' 
                    onClick={print}>
                    <PrintIcon fontSize='large' />
                </IconButton>
            </div>
            <NoticeDialog 
                message={ <div style={{margin: 5}}><TextField 
                    label='Enter New Reserve Amount'
                    variant='outlined'
                    value={newReserve}
                    onChange={handleChange} /></div> }
                handleClose={()=>setDialog(false)}
                handleButton={onSubmit}
                title='Purchase Order Reserve' 
                enable={dialog} />
        </div>
    );
};

export default PCHeader;