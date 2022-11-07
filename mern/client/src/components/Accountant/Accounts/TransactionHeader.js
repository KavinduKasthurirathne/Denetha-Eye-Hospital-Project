import { TextField } from "@mui/material";
import React, { useState } from "react";

const TransactionHeader = (props) => {

    const handleChange = ({target}) => {
        props.setDate(target.value);
        props.setEditID(null);
        props.setInputs({});
    };

    return(
        <>
            <div style={{margin:'auto', width:'30%', paddingTop:'20px'}}>
                <TextField 
                    name='date' 
                    size='small'
                    variant="outlined" 
                    value={props.date ?? ''} 
                    type='date' 
                    onChange={handleChange}
                    label='Select Date for Report'
                    InputLabelProps={{shrink: true}} />
            </div>
        </>
    );
};

export default TransactionHeader;