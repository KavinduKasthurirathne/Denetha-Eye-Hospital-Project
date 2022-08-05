import React from 'react';
import '../App.css';

export const Logout = () => {
    const handleSubmit = () => {
        alert(`You have logged out`);
    };
    return (
        <div className='round-edge-div App'>
            <br />
            <br />
            <h3>Log Out</h3>
            <br />
            <button className='button' onClick={handleSubmit}>Logout</button>
        </div>
    );
};