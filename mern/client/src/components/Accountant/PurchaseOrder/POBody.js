import React, { useState } from 'react';
import '../Accountant.css';
import '../../../App.css';
import { Button, FormControl, IconButton, InputLabel, OutlinedInput, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import POItems from './POItems';

const POBody = (props) => {
    const [inputs, setInputs] = useState({});
    const [disable, setDisable] = useState(true);

    const handleChange = ({target}) => {
        setInputs((prev)=> ({
            ...prev,
            [target.name]: target.value
        }));
        if(inputs.item && inputs.num && inputs.unit){
            if(inputs.item!=='' && inputs.num!=='' && inputs.unit!==''){
                setDisable(false);
            }else {
                setDisable(true);
            }
        }
    };

    const handleAdd = () => {
        const unit = parseFloat(inputs.unit).toFixed(2);
        const amount = parseFloat(unit * inputs.num).toFixed(2);
        const add = {
            item: inputs.item,
            num: inputs.num,
            unit: unit,
            amount: amount
        }
        props.setter((prev)=> ([
            ...prev,
            add
        ]));
        setInputs({
            item: '',
            num: '',
            unit: '',
            amount: ''
        });
        setDisable(true);
    };

    return (
        <>
            <div id='po-body' >
                <POItems data={props.data} setter={props.setter} />
            </div>
            <hr />
            <div id='po-submit' className='po-flex' >
                <div className='po-flex-child'>
                    <FormControl variant='outlined'>
                        <InputLabel htmlFor='item'>Item(s)</InputLabel>
                        <OutlinedInput 
                            id='item'
                            name='item'
                            size='small'
                            value={inputs.item}
                            type='text'
                            onChange={handleChange} 
                            label='Item' />
                    </FormControl>
                </div>
                <div className='po-flex-child'>
                    <FormControl variant='outlined'>
                        <InputLabel htmlFor='num'>Quantity</InputLabel>
                        <OutlinedInput 
                            id='num'
                            name='num'
                            size='small'
                            value={inputs.num}
                            type='number'
                            onChange={handleChange} 
                            label='Quantity' />
                    </FormControl>
                </div>
                <div className='po-flex-child'>
                    <FormControl variant='outlined'>
                        <InputLabel htmlFor='unit'>Unit Price</InputLabel>
                        <OutlinedInput 
                            id='unit'
                            name='unit'
                            size='small'
                            value={inputs.unit}
                            type='number'
                            onChange={handleChange} 
                            label='Unit Price' />
                    </FormControl>
                </div>
                <div className='po-flex-child' id='po-save'>
                    <Button 
                        variant="contained" 
                        onClick={handleAdd} 
                        color='secondary' 
                        disabled={disable} >Add</Button>
                </div>
            </div>
        </>
    );
};

export default POBody;