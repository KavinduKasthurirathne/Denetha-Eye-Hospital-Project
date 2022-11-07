import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Accountant.css';
import '../../../App.css';
import { Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NoticeDialog from '../NoticeDialog';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const POList = (props) => {
    const [newPO, setNewPO] = useState(false);
    const [deletePO, setDeletePO] = useState(false);
    const [newName, setNewName] = useState('');
    const [cookies] = useCookies('name', 'proxy');

    const handleAdd = () => {
        setNewPO(true);
    };
    const handleDelete = () => {
        setDeletePO(true);
    };

    const handleChange = ({target}) => {
        setNewName(target.value);
    };

    const onSubmit = async () => {
        const PO = {
            poRoot: props.root,
            poNumber: newName,
            editor: cookies.name
        }
        await axios.post(`${cookies.proxy}/api/purchaseOrder/add`, PO)
        .then((res)=> {
            setNewPO(false);
            setNewName('');
            props.getPO();
        })
        .catch((err) => console.log(err));
    };
    const onDelete = async () => {
        if(props.selected){
            const id = props.selected._id;

            await axios.post(`${cookies.proxy}/api/purchaseOrder/delete/${id}`, {})
            .then((res)=>{
                setDeletePO(false);
                props.ponumSetter('');
                props.getPO();
            })
            .catch((err) => console.log(err));
        }
    };

    const displayData = () => { return(
        (props.data[0] && props.data[0].poNumber!==undefined) ?
        <ul className='basic'>
            {props.data.map((item, i) => (
                (item.id===props.ponum) ?
                <li key={'item'+i} className='transition' >
                    <Link 
                        className='bold-text' 
                        key={i} 
                        to={props.root+'/'+item.id} 
                        onClick={(e)=>{
                            e.preventDefault();
                            props.ponumSetter(item.id);
                        }} >
                    <div>PO {item.poNumber}</div>
                    </Link>
                    <IconButton aria-label='Delete PO' size='small' onClick={handleDelete} >
                        <DeleteIcon />
                    </IconButton>
                </li>
                :
                <li key={'item'+i} className='transition' >
                    <Link 
                        className='normal-text' 
                        key={i} 
                        to={props.root+'/'+item.id} 
                        onClick={(e)=>{
                            e.preventDefault();
                            props.ponumSetter(item.id);
                        }} >
                    <div>PO {item.poNumber}</div>
                    </Link>
                </li>
            ))}
        </ul>
        :
        <p className='prompt'>Create a PO to start</p>
    )};

    return (
        <div className='center-align basic'>
            {
                (props.root) ?
                displayData()
                :
                <p className='prompt'>Select one to show list</p>
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
                    label='New PO number'
                    helperText='Only numbers are accepted'
                    variant='outlined'
                    value={newName}
                    onChange={handleChange} /></div> }
                handleClose={()=>setNewPO(false)}
                handleButton={onSubmit}
                title='Create New Purchase Order' 
                enable={newPO} />
            <NoticeDialog 
                message={ <div style={{margin: 5}}>This will delete this PO and it cannot be recovered.</div> }
                handleClose={()=>setDeletePO(false)}
                handleButton={onDelete}
                title='Are you sure?' 
                enable={deletePO} />
        </div>
    );
};

export default POList;