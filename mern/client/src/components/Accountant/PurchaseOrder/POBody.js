import React, { useEffect, useState } from 'react';
import '../Accountant.css';
import '../../../App.css';
import { Button, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import POItems from './POItems';

const POBody = (props) => {
    const [editSelect, setEditSelect] = useState(null);
    const [inputs, setInputs] = useState({
        num: '',
        unit: '',
        item: ''
    });
    const [disable, setDisable] = useState(true);

    const handleChange = ({target}) => {
        setInputs((prev)=> ({
            ...prev,
            [target.name]: target.value
        }));
    };

    useEffect(()=>{
        if(editSelect !== null) {
            setInputs({
                item: props.data[editSelect].item,
                num: props.data[editSelect].num,
                unit: props.data[editSelect].unit,
                amount: props.data[editSelect].amount
            });
        } else {
            setInputs({
                item: '',
                num: '',
                unit: '',
                amount: ''
            });
        }
    }, [editSelect]);
    useEffect(()=>{
        if(inputs.num!=='' && inputs.unit!=='' && inputs.item!==''){
            setDisable(false);
        }else {
            setDisable(true);
        }
    }, [inputs]);

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

        if (editSelect === null) {//add a new item
            props.setter((prev)=> ([
                ...prev,
                add
            ]));
        } else {//edit current item
            props.setter((prev)=> {
                var list = [...prev];
                list[editSelect] = add;

                return list;
            });
            setEditSelect(null);
        }
        setInputs({
            item: '',
            num: '',
            unit: '',
            amount: ''
        });
        props.save(true);
        setDisable(true);
    };

    return (
        <>
            <div id='po-body' className='po-anim' >
                <POItems 
                    data={props.data} 
                    setter={props.setter} 
                    calcTotal={calculateTotal} 
                    setSave={props.save} 
                    edit={setEditSelect} />
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
                        disabled={disable} >{editSelect===null? 'Add':'Edit'}</Button>
                        <div style={{height: 5}}></div>
                    {editSelect===null ? null :
                    <Button 
                    variant="contained" 
                    onClick={() => setEditSelect(null)} 
                    color='secondary'>Cancel</Button>
                    }
                </div>
            </div>
            <div id='message'>
                Last edited by {props.editor} on {props.editDate}
            </div>
        </>
    );
};

export default POBody;
