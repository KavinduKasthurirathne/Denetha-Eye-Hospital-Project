import React, { useState } from 'react';
import '../App.css';

import PurchaseOrder from './Accountant/PurchaseOrder';
import Accounts from './Accountant/Accounts';
import PettyCash from './Accountant/PettyCash';

export const Accountant = () => {
    const [display, setDisplay] = useState('purchaseOrder');

    //event handlers
    const purchaseOrderOnClick = () => {
        setDisplay('purchaseOrder');
    };
    const AccountsOnClick = () => {
        setDisplay('accounts');
    };
    const pettyCashOnClick = () => {
        setDisplay('pettyCash')
    };

    return(
        <>
            <div className='basic'>
                <br />
                <button className='button navButton' onClick={purchaseOrderOnClick}>Purchase Orders</button>
                <button className='button navButton' onClick={pettyCashOnClick}>Petty Cash</button>
                <button className='button navButton' onClick={AccountsOnClick}>Accounts</button>
                <div>
                    {display==='purchaseOrder' && <PurchaseOrder />}
                    {display==='accounts' && <Accounts />}
                    {display==='pettyCash' && <PettyCash />}
                </div>
            </div>
        </>
    );
};