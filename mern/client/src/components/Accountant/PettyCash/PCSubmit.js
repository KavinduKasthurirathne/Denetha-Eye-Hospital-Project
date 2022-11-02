import React, { useEffect, useState } from 'react';
import '../../../App.css';
import '../Accountant.css';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from '@mui/material';
import axios from 'axios';
import {useCookies} from 'react-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PCSubmit = (props) => {
    const [cookies] = useCookies('name', 'proxy');
    const [inputs, setInputs] = useState({
        vNum: '',
        item: '',
        type: '',
        date: '',
        amount: ''
    });

    useEffect(()=>{
        if(props.update===true){
            setInputs(props.updateInput);
        }
    }, [props.update, props.updateInput]);

    const [disable, setDisable] = useState(true);

    const handleChange = ({target}) => {
        setInputs((prev)=> ({
            ...prev,
            [target.name]: target.value
        }));
    };

    useEffect(()=>{
        if(inputs.item!=='' && inputs.amount!=='' && inputs.type!=='' && inputs.vNum!==''){
            setDisable(false);
        }else {
            setDisable(true);
        }
    }, [inputs]);

    const handleAdd = async () => {
        let amount = parseFloat(inputs.amount) * 1.00;
        const addData = {
            pcRoot: props.root,
            vNum: inputs.vNum,
            pcItem: inputs.item,
            type: inputs.type,
            date: inputs.date,
            amount: amount.toFixed(2),
        }
        await axios.post(`${cookies.proxy}/api/pettyCash/add`, addData)
        .then((res)=>{
            setInputs({
                vNum: '',
                item: '',
                type: '',
                date: '',
                amount: ''
            });
            toast(res.data.message);
            setDisable(true);
            props.getList(props.root);
        }).catch((err)=>{
            console.log(err);
        })
    };

    const handleUpdate = async () => {
        let amount = parseFloat(inputs.amount) * 1.00;
        const updateData = {
            pcRoot: props.root,
            vNum: inputs.vNum,
            pcItem: inputs.item,
            type: inputs.type,
            date: inputs.date,
            amount: amount.toFixed(2),
            editor: cookies.name
        };
        await axios.post(`${cookies.proxy}/api/pettyCash/update/${props.updateID}`, updateData)
        .then((res)=>{
            setInputs({
                vNum: '',
                item: '',
                type: '',
                date: '',
                amount: ''
            });
            toast(res.data.message);
            setDisable(true);
            props.setUpdate(false);
            props.getList(props.root);
        }).catch((err)=>{
            console.log(err);
        })
    };
    const cancelUpdate = () => {
        setInputs({
            vNum: '',
            item: '',
            type: '',
            date: '',
            amount: ''
        });
        props.setUpdate(false);
    }

    return (
        <div id='pc-submit' className='po-flex po-anim' >
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
                <FormControl variant='outlined'>
                    <InputLabel htmlFor='item'>Description</InputLabel>
                    <OutlinedInput 
                        id='item'
                        name='item'
                        size='small'
                        value={inputs.item}
                        type='text'
                        onChange={handleChange} 
                        label='Desription' />
                </FormControl>
            </div>
            <div className='po-flex-child'>
                <FormControl variant='outlined' fullWidth>
                    <InputLabel htmlFor='pcType'>Type</InputLabel>
                    <Select 
                        id='pcType'
                        name='type'
                        size='small'
                        value={inputs.type}
                        onChange={handleChange} 
                        label='Type' >
                            <MenuItem value='Medicine'>
                                <div style={{marginLeft: 15}}>Medicine</div>
                            </MenuItem>
                            <MenuItem value='Office Expenses'>
                                <div style={{marginLeft: 15}}>Office Expenses</div>
                            </MenuItem>
                            <MenuItem value='Stationary'>
                                <div style={{marginLeft: 15}}>Stationary</div>
                            </MenuItem>
                            <MenuItem value='Food and Meal'>
                                <div style={{marginLeft: 15}}>Food and Meal</div>
                            </MenuItem>
                            <MenuItem value='Post Charges'>
                                <div style={{marginLeft: 15}}>Post Charges</div>
                            </MenuItem>
                            <MenuItem value='Transport'>
                                <div style={{marginLeft: 15}}>Transport</div>
                            </MenuItem>
                            <MenuItem value='Welfare'>
                                <div style={{marginLeft: 15}}>Welfare</div>
                            </MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className='po-flex-child'>
                <FormControl variant='outlined'>
                    <InputLabel htmlFor='vNum'>Voucher Number</InputLabel>
                    <OutlinedInput 
                        id='vNum'
                        name='vNum'
                        size='small'
                        value={inputs.vNum}
                        type='text'
                        onChange={handleChange} 
                        label='Voucher Number' />
                </FormControl>
            </div>
            <div className='po-flex-child'>
                <FormControl variant='outlined'>
                    <InputLabel htmlFor='amount'>Amount</InputLabel>
                    <OutlinedInput 
                        id='amount'
                        name='amount'
                        size='small'
                        value={inputs.amount}
                        type='number'
                        onChange={handleChange} 
                        label='Amount' />
                </FormControl>
            </div>
            <div className='po-flex-child' id='po-save'>
                {
                    props.update===true ?
                    <>
                    <Button 
                    variant="contained" 
                    onClick={handleUpdate} 
                    color='secondary' 
                    disabled={disable} >Edit</Button>
                    <div style={{height: 5}}></div>
                    <Button 
                    variant="contained" 
                    onClick={cancelUpdate} 
                    color='secondary' >Cancel</Button>
                    </>
                    :
                    <Button 
                    variant="contained" 
                    onClick={handleAdd} 
                    color='secondary' 
                    disabled={disable} >Add</Button>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default PCSubmit;