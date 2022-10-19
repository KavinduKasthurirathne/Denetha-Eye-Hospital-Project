import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import '../../App.css';
import './Accountant.css';

import TransactionDetails from './Accounts/TransactionDetails';
import TransactionHeader from './Accounts/TransactionHeader';
import TransactionsRoot from './Accounts/TransactionsRoot';

const Accounts = () => {
    //a function to get ISO date with correct time zone
    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };

    const today = getDateString(Date.now());

    const [date, setDate] = useState(today);
    const [transactionData, setTransactionData] = useState([]);
    const [cookies] = useCookies("proxy");

    const getReceipts = async (date) => {
        await axios.post(`${cookies.proxy}/api/transactions/get`, {date: date})
        .then(({data}) => {
            setTransactionData(data);
        })
        .catch(err => console.log(err));
    };

    useEffect(()=>{
        getReceipts(date);
    }, [date]);

    return (
        <div className='basic'>
            <TransactionHeader 
                date={date} 
                setDate={setDate} />
            <div id='transactionList'>
                <div className='grid-child' id='acc-root'>
                    <TransactionsRoot data={transactionData} />
                </div>
                <div className='grid-child'>
                    <TransactionDetails 
                        date={date} 
                        data={transactionData} />
                </div>
            </div>
        </div>
    );
};

export default Accounts;