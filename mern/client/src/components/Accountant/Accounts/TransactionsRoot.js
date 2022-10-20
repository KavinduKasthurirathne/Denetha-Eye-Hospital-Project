import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const TransactionsRoot = (props) => {
    return(
        <>
            <div>
                <ul>
                    {props.patientData.map((item, index) => (
                        <li key={index}>{item.name} | {item.type} | Rs.{item.amount} | <IconButton 
                        size='small' 
                        onClick={()=>{
                            props.setInputs({
                                date: item.date,
                                name: item.name,
                                type: item.type,
                                phone: item.phone,
                                amount: item.amount
                            });
                            props.setEditID(item._id);
                        }} >
                        <EditIcon />
                    </IconButton></li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TransactionsRoot;