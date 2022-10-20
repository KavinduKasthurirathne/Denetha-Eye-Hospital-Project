import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../../App.css';
import '../Accountant.css';
import axios from 'axios';
import NoticeDialog from "../NoticeDialog";
import {useCookies} from 'react-cookie';

import { Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const PCRoot = (props) => {
    const [newRoot, setNewRoot] = useState(false);
    const [deletePC, setDeletePC] = useState(false);
    const [listName, setListName] = useState('');
    const [cookies] = useCookies('proxy');

    const handleChange = ({target}) => {
        setListName(target.value);
    };

    const onSubmit = async () => {
        const data = {
            pcRoot: listName,
            date: Date.now()
        };

        await axios.post(`${cookies.proxy}/api/pettyCash/add`, data).then((res)=>{
            setListName('');
            setNewRoot(false);
            props.getPC();
        }).catch((err=>{
            console.log(err);
        }));
    };

    const onDelete = async () => {
        if (props.root){
            await axios.post(`${cookies.proxy}/api/pettyCash/deleteRoot/${props.root}`, {}).then((res)=>{
                setDeletePC(false);
                props.rootSetter('');
                props.getPC();
            }).catch((err=>{
                console.log(err);
            }));
        }
    };

    return (
        <div className='basic'>
            {
                props.data ?
                
                <div className='left-align'>
                    <ul>
                        {
                            props.data.map((item) => (
                                (item === props.root) ?
                                <li key={item} >
                                    <Link 
                                    key={item}
                                    to={'item'}
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.rootSetter(item);
                                    }}>
                                        <div className='bold-text'>
                                            {item+' '}
                                            <IconButton aria-label='Delete Pc' onClick={()=>setDeletePC(true)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </Link>
                                    <div className='center-align'>
                                        
                                    </div>
                                </li>
                                :
                                <li key={item} >
                                    <Link 
                                    key={item}
                                    to={'item'}
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.rootSetter(item);
                                    }}>
                                        <div className='normal-text'>
                                            {item}
                                        </div>
                                    </Link>
                                </li>
                            )) 
                        }
                    </ul>
                </div>
                :
                <p className='prompt'>Create a List to</p>
                }
            <Button
                variant='contained' 
                color='secondary' 
                onClick={()=>setNewRoot(true)} >
                New
            </Button>
            <NoticeDialog 
                message={ 
                <div style={{margin: 5}}>
                    <TextField 
                    required
                    label='New List Name'
                    variant='outlined'
                    value={listName}
                    onChange={handleChange} /></div> }
                handleClose={()=>setNewRoot(false)}
                handleButton={onSubmit}
                title='Create List' 
                enable={newRoot} />
            <NoticeDialog 
                message={ <div style={{margin: 5}}>This will delete this Petty cash record and it cannot be recovered.</div> }
                handleClose={()=>setDeletePC(false)}
                handleButton={onDelete}
                title='Are you sure?' 
                enable={deletePC} />
        </div>
    );
};

export default PCRoot;