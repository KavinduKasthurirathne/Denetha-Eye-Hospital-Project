import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useCookies} from 'react-cookie';

export const TestAddAccount = () => {
    const [show, setShow] = useState(false);
    const [cookies] = useCookies('proxy');
    const [input, setInput] = useState({
        name: '',
        username: '',
        password: '',
        role: ''
    });

    const handleClickShow = () => {
        setShow(!show);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const inputOnChange = ({target}) => {
        setInput((prev) => ({...prev, [target.name]: target.value}));
    };

    const handleSubmit = async () => {
        const data = {
            name: input.name,
            username: input.username,
            password: input.password,
            role: input.role
        }

        await fetch(`${cookies.proxy}/api/account/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((res)=>{alert(res)});
    };

    return (
        <div id='addAccount' className='round-edge-div'>
            <TextField 
                sx={{marginTop: 2, width:200}}
                label='Name'
                name='name'
                value={input.name} 
                onChange={inputOnChange} 
                variant='standard' />
            <TextField 
                sx={{marginTop: 2, width:200}}
                label='Username'
                name='username'
                value={input.username} 
                onChange={inputOnChange} 
                variant='standard' />
            <TextField 
                sx={{marginTop: 2, width:200}}
                label='Password'
                name='password'
                type={show ? 'text' : 'password'}
                value={input.password} 
                onChange={inputOnChange} 
                variant='standard' 
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShow}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  }}/>
            <FormControl sx={{marginTop: 2, width:200}}>
                <InputLabel id='select-role-label'  >Role</InputLabel>
                <Select 
                    label='Role'
                    labelId='select-role-label'
                    id='select-role'
                    name='role'
                    value={input.role} 
                    onChange={inputOnChange} 
                    variant='standard' >
                        <MenuItem value=''>
                            <div style={{marginLeft: 15}}><em>Select</em></div>
                        </MenuItem>
                        <MenuItem value='manager'>
                            <div style={{marginLeft: 15}}>Manager</div>
                        </MenuItem>
                        <MenuItem value='accountant'>
                            <div style={{marginLeft: 15}}>Accountant</div>
                        </MenuItem>
                        <MenuItem value='receptionist'>
                            <div style={{marginLeft: 15}}>Receptionist</div>
                        </MenuItem>
                        <MenuItem value='staff'>
                            <div style={{marginLeft: 15}}>Staff</div>
                        </MenuItem>
                </Select>
            </FormControl><br />
            <Button 
                sx={{marginTop: 1}}
                onClick={handleSubmit} >Add Account</Button>
        </div>
    );
};