import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Accountant.css';
import '../../../App.css';
import { Button, TextField } from '@mui/material';
import { useCookies } from 'react-cookie';
import NoticeDialog from '../NoticeDialog';
import axios from 'axios';

const PORoot = (props) => {
    const [newRoot, setNewRoot] = useState(false);
    const [newList, setNewList] = useState('');
    const [cookies] = useCookies('name', 'proxy');

    const handleAdd = () => {
        setNewRoot(true);
    };

    const handleChange = ({target}) => {
        setNewList(target.value);
    };

    const onSubmit = async () => {
        const data = {
            poRoot: newList,
            poNumber: 1,
            editor: cookies.name
        }

        await axios.post(`${cookies.proxy}/api/purchaseOrder/add`, data)
        .then((res)=>{
            setNewRoot(false);
            setNewList('');
            props.getPO();
        })
    };

    return (
        <div className='basic'>
            {    
                props.data ?
                
                <div className='left-align'>
                    <ul>
                        {props.data.map((item, i) => (
                            (item===props.root) ?
                            <li key={'root'+i} className='transition' >
                                <Link 
                                    className='bold-text' 
                                    key={item} 
                                    to={`${item}`} 
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.rootSetter(item);
                                    }} >
                                    <div>{item}</div>
                                </Link>
                            </li>
                            :
                            <li key={'root'+i} className='transition' >
                                <Link 
                                    className='normal-text' 
                                    key={item} 
                                    to={`${item}`} 
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.rootSetter(item);
                                    }} >
                                    <div>{item}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <p className='prompt'>Select a PO Root to start</p>
                }
            <Button 
                variant="contained" 
                onClick={handleAdd} 
                color='secondary' >New</Button>
            <NoticeDialog 
                message={ 
                <div style={{margin: 5}}>
                    <TextField 
                    required
                    label='New List Name'
                    variant='outlined'
                    value={newList}
                    onChange={handleChange} /></div> }
                handleClose={()=>setNewRoot(false)}
                handleButton={onSubmit}
                title='Create List' 
                enable={newRoot} />
        </div>
    );
};

export default PORoot;