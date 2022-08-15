import React from 'react';
import '../../App.css';
import './Accountant.css';

const Accounts = () => {
    return (
        <div className='basic grid-wrapper-2'>
            <div className='grid-child' id='acc-root'>
                <p>Account Root</p>
            </div>
            <div className='grid-child'>
                <p>Transaction Details</p>
            </div>
        </div>
    );
};

export default Accounts;