import React, { useState } from "react";
import '../Accountant.css';
import '../../../App.css';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TableBody } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoticeDialog from "../NoticeDialog";

const POItems = (props) => {
    const [deleteItem, setDeleteItem] = useState(false);
    const [index, setIndex] = useState();

    const onDelete = () => {
        const newItems = props.data.filter((value, i) => (i !== index));
        props.setter(newItems);
        props.setSave(true);
        setDeleteItem(false);
    }

    return (
        <div id='po-item-table' >
            <TableContainer component={Paper} >
                <Table aria-label="Item table" size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='left' style={{fontWeight: 'bold'}}>Description</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Quanity</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Unit Price(Rs.)</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Amount(Rs.)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        props.data.map((row, i) => (
                            <TableRow key={row.item}>
                                <TableCell component='th' scope='row' >{row.item}</TableCell>
                                <TableCell align='right'>{row.num}</TableCell>
                                <TableCell align='right'>{row.unit}</TableCell>
                                <TableCell align='right'>{row.amount}</TableCell>
                                <TableCell align='center' style={{width: '15%'}} >
                                    <IconButton aria-label='delete record' size='small' onClick={()=>{
                                        setIndex(i);
                                        setDeleteItem(true);
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton 
                                            size='small' 
                                            onClick={()=>{
                                                props.edit(i);
                                            }} >
                                            <EditIcon />
                                        </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                        <TableRow>
                            <TableCell align='right' colSpan={3}><div className='bold-text'>Total</div></TableCell>
                            <TableCell align='right' ><div className='bold-text'>{props.calcTotal()}</div></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <NoticeDialog 
                message={ <div style={{margin: 5}}>This will delete this item and it cannot be recovered.</div> }
                handleClose={()=>setDeleteItem(false)}
                handleButton={onDelete}
                title='Are you sure?' 
                enable={deleteItem} />
        </div>
    );
};

export default POItems;
