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
    const [editID, setEditID] = useState('');
    const [inputs, setInputs] = useState({});
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    return (
        <div className='basic'>
            <TransactionHeader 
                date={date} 
                setDate={setDate}
                setEditID={setEditID}
                setInputs={setInputs} />
            <div id='transactionList'>
                <div className='grid-child' id='acc-root'>
                    <TransactionsRoot 
                        patientData={transactionData}
                        setInputs={setInputs}
                        setEditID={setEditID} />
                </div>
                <div className='grid-child'>
                    <TransactionDetails 
                        date={date} 
                        editID={editID}
                        inputs={inputs}
                        setInputs={setInputs}
                        setEditID={setEditID}
                        refreshData={getReceipts}
                        patientData={transactionData} />
                </div>
            </div>
        </div>
    );
};

export default Accounts;