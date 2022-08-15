import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

import PurchaseOrder from './Accountant/PurchaseOrder';
import Accounts from './Accountant/Accounts';
import PettyCash from './Accountant/PettyCash';

export const Accountant = () => {
    const [display, setDisplay] = useState('purchaseOrder');
    const [POdata, setPOdata] = useState([]);
    const [PCdata, setPCdata] = useState([]);

    const getPOdata = async () => {
        await axios.post('http://localhost:5000/purchaseOrder/get', {})
        .then((response) => {setPOdata(response.data)})
        .catch((err) => {console.log(err)});
    };
    const getPCdata = async () => {
        await axios.post('http://localhost:5000/pettyCash/get', {})
        .then((res) => {setPCdata(res.data)})
        .catch((err)=> {console.log(err)});
    };

    useEffect(()=>{
        getPOdata();
        getPCdata();
    }, []);

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
                    {display==='purchaseOrder' && <PurchaseOrder data={POdata} getPO={getPOdata} />}
                    {display==='accounts' && <Accounts />}
                    {display==='pettyCash' && <PettyCash data={PCdata} getPC={getPCdata} />}
                </div>
            </div>
        </>
    );
};