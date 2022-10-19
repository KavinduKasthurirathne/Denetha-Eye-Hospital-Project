import React, {useState, useEffect} from 'react';
import '../../App.css';
import './Accountant.css';
import TransactionDetails from './Accounts/TransactionDetails';
import TransactionHeader from './Accounts/TransactionHeader';
import TransactionsRoot from './Accounts/TransactionsRoot';

const Accounts = () => {

    return (
        <>
            <TransactionHeader />
            <div className='basic grid-wrapper-2'>
                <div className='grid-child' id='acc-root'>
                    <TransactionsRoot />
                </div>
                <div className='grid-child'>
                    <TransactionDetails />
                </div>
            </div>
        </>
    );
};

export default Accounts;