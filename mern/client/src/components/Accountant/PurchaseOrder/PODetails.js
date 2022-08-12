import React, { useEffect, useState } from 'react';
import '../Accountant.css';
import '../../../App.css';
import { Button, FormControl, IconButton, InputLabel, OutlinedInput, TextField } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

const PODetails = (props) => {
    const [data, setData] = useState({});

    //a function to get ISO date with correct time zone
    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };

    useEffect(()=>{
        var isoDate;
        var isoEditDate;
        if(props.data.date){
            isoDate = getDateString(props.data.date);
        }
        if(props.data.lastEdit){
            isoEditDate = getDateString(props.data.lastEdit);
        }
        setData({
            ...props.data,
            date: isoDate,
            lastEdit: isoEditDate
        });
    },[props.data]);

    const handleChange = ({target}) => {
        setData((prev)=>({
            ...prev,
            [target.name]: target.value
        }));
    };

    const displayData = () => {return (
        (props.data && props.ponum) ?
        <div id='po-header'>
            <div id='po-container' className='po-header-child'>
                <div id='po-num'>PO number</div>
                <div id='po-num-value'>{data.poNumber}</div>
            </div>
            <div className='po-header-child'>
                <FormControl variant='outlined'>
                    <InputLabel htmlFor='vendor'>Vendor</InputLabel>
                    <OutlinedInput 
                        id='vendor'
                        name='vendor'
                        size='small'
                        value={data.vendor}
                        type='text'
                        onChange={handleChange} 
                        label='Vendor' />
                </FormControl>
            </div>
            <div className='po-header-child'>
                <TextField 
                    name='date' 
                    size='small'
                    variant="outlined" 
                    value={data.date} 
                    type='date' 
                    onChange={handleChange}
                    label='Date'
                    InputLabelProps={{shrink: true}} />
            </div>
            <div className='po-header-child'>
                <FormControl variant='outlined'>
                    <InputLabel htmlFor='mode'>Mode of payment</InputLabel>
                    <OutlinedInput 
                        id='mode'
                        name='mode'
                        size='small'
                        value={data.mode}
                        type='text'
                        onChange={handleChange} 
                        label='Mode of payment' />
                </FormControl>
            </div>
            <div id='print-container' className='po-header-child' >
                <IconButton aria-label="print" size='large'  >
                    <PrintIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
            
        :
        <p className='prompt'>Select a Purchase order to edit</p>
    )};

    const show = () => {
        console.log(data.date);
    };

    return (
        <div className='basic' >
            {displayData()}
            <div id='po-body' >
                PO body
            </div>
            <hr />
            <div id='po-submit' >
                <Button 
                    variant="contained" 
                    onClick={show} 
                    color='secondary' >Add</Button>
            </div>
            
        </div>
    );
};

export default PODetails;