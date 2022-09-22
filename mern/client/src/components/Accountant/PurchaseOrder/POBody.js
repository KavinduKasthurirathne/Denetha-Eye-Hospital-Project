import React, { useState } from 'react';
import '../Accountant.css';
import '../../../App.css';
import { Button, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import POItems from './POItems';
import SaveIcon from '@mui/icons-material/Save';

const POBody = (props) => {
    const [inputs, setInputs] = useState({});
    const [disable, setDisable] = useState(true);

    const handleChange = ({target}) => {
        setInputs((prev)=> ({
            ...prev,
            [target.name]: target.value
        }));
        if(inputs.num==='' && inputs.unit==='' && inputs.item===''){
            setDisable(true);
        }else {
            setDisable(false);
        }
    };

    const calculateTotal = () => {
        let sum = 0;
        if(props.data){
            if(props.data.length>0){
                props.data.map((item)=>(sum += parseFloat(item.amount)));
            }
        }
        return(sum.toFixed(2));
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
        props.setSave(false);
    };

    return (
        <>
            <div id='po-body' className='po-anim' >
                <POItems data={props.data} setter={props.setter} calcTotal={calculateTotal} setSave={props.setSave} />
            </div>
            <hr />
            <div id='po-submit' className='po-flex po-anim' >
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
                <div className='po-flex-child' id='po-database'>
                    <Button 
                        variant="contained" 
                        onClick={props.handleSave} 
                        color='secondary' 
                        disabled={props.save}
                        endIcon={<SaveIcon />} 
                        >Save</Button>
                </div>
            </div>
            <div id='message'>
                Last edited by {props.editor} on {props.editDate}
            </div>
        </>
    );
};

export default POBody;
