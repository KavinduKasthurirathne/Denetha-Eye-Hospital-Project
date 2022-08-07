import React from 'react';
import { useCookies } from 'react-cookie';
import '../App.css';


export const Logout = () => {
    const [cookies, deleteCookie] = useCookies(['loggedIn', 'name', 'role']);

    const handleSubmit = () => {
        deleteCookie('name');
        deleteCookie('loggedIn');
        deleteCookie('role');
    };

    return (
        <div className='round-edge-div App'>
            <br /><br />
            <br /><br />
            <br /><br />
            <h3>Log Out From Account</h3>
            <p className='thin-text'>{cookies.name}</p>
            <p className='bold-text'>{cookies.role}</p>
            <br />
            <button className='button' onClick={handleSubmit}>Logout</button>
        </div>
    );
};