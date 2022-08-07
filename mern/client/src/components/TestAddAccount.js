import React, { useState } from 'react';

export const TestAddAccount = () => {
    const [input, setInput] = useState({
        name: '',
        username: '',
        password: '',
        role: ''
    });

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

        await fetch('http://localhost:5000/account/add', {
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
        <div>
            <input name={'name'} type={'text'} value={input.name} placeholder={'Full name'} onChange={inputOnChange} />
            <input name={'username'} type={'text'} value={input.username} placeholder={'username'} onChange={inputOnChange} />
            <input name={'password'} type={'text'} value={input.password} placeholder={'password'} onChange={inputOnChange} />
            <input name={'role'} type={'text'} value={input.role} placeholder={'Role'} onChange={inputOnChange} />  
            <button className='button' onClick={handleSubmit} >Add Account</button>
        </div>
    );
};