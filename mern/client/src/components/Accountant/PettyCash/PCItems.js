import React, { useState } from "react";
import '../../../App.css';
import '../Accountant.css';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import NoticeDialog from "../NoticeDialog";
import {useCookies} from 'react-cookie';

const PCItems = (props) => {
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [itemID, setItemID] = useState('');
    const [loading, setLoading] = useState(false);
    const [cookies] = useCookies('proxy');
    
    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };

    const handleDelete= async () => {
        setLoading(true);
        await axios.post(`${cookies.proxy}/api/pettyCash/delete/${itemID}`)
        .then((res)=>{
            setDeleteDialog(false);
            setItemID('');
            props.getList(props.root);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
            setLoading(false);
        });
    };

    const calculateTotal = () => {
        let sum = 0;
        if(props.data){
            props.data.map((item)=>(sum += parseFloat(item.amount)));
        }
        return(sum.toFixed(2));
    };

    return (
        <div id={props.up? 'pc-body' : 'po-body'} className='po-item-table'>
            <TableContainer component={Paper} >
                <Table aria-label='pc-item-table' size='small' >
                    <TableHead>
                        <TableRow>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 75}} >
                                Date
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 190}} >
                                Description
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 70}} >
                                Type
                            </TableCell>
                            <TableCell align='left' style={{fontWeight: 'bold', width: 70}} >
                                Vo. Num.
                            </TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold', width: 80}} >
                                Amount(Rs.)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((row)=>(
                                <TableRow key={row._id} >
                                    <TableCell align='left' >{getDateString(row.date)}</TableCell>
                                    <TableCell align='left' >{row.pcItem}</TableCell>
                                    <TableCell align='left' >{row.type}</TableCell>
                                    <TableCell align='left' >{row.vNum}</TableCell>
                                    <TableCell align='right' >{row.amount}</TableCell>
                                    <TableCell align='left' style={{width: 70}} >
                                        <IconButton 
                                            size='small' 
                                            onClick={()=>{
                                                setDeleteDialog(true);
                                                setItemID(row._id);
                                            }} >
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton 
                                            size='small' 
                                            onClick={()=>{
                                                props.updateInput({
                                                    date: getDateString(row.date),
                                                    item: row.pcItem,
                                                    type: row.type,
                                                    vNum: row.vNum,
                                                    amount: row.amount
                                                });
                                                props.setUpdateID(row._id);
                                                props.update(true);
                                            }} >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell style={{width: 280}}>
                                        {row.editor ?
                                        <p id='edit-message'>
                                            Edited by {row.editor} on {getDateString(row.lastEdit)}
                                        </p>
                                        :
                                        ''
                                        }
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                        <TableRow>
                            <TableCell align='right' colSpan={4}><div className='bold-text'>Total</div></TableCell>
                            <TableCell align='right' ><div className='bold-text'>{calculateTotal()}</div></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <NoticeDialog 
                message={ <div style={{margin: 5}}>This will delete this Record and it cannot be recovered.</div> }
                handleClose={()=>setDeleteDialog(false)}
                handleButton={handleDelete}
                title='Are you sure?' 
                loading={loading}
                enable={deleteDialog} />
        </div>
    );
};

export default PCItems;