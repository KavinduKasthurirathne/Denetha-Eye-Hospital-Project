import React from 'react';
import '../../App.css';
import './Accountant.css';

const PettyCash = () => {
    return (
        <div className='basic grid-wrapper-2'>
            <div className='grid-child' id='acc-root'>
                <p>Petty Cash Root</p>
            </div>
            <div className='grid-child'>
                <p>Monthly Details</p>
            </div>
        </div>
    );
};

export default PettyCash;