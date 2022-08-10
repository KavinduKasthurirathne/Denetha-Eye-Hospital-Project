import React from 'react';
import '../../App.css';
import './Accountant.css';

import PORoot from './PurchaseOrder/PORoot';
import POList from './PurchaseOrder/POList';
import PODetails from './PurchaseOrder/PODetails';

const PurchaseOrder = () => {
    return (
        <div className='App grid-wrapper'>
            <div className='grid-child' id='PORoot'>
                <PORoot />
            </div>
            <div className='grid-child' id='POList'>
                <POList />
            </div>
            <div className='grid-child' id='PODetails'>
                <PODetails />
            </div>
        </div>
    );
};

export default PurchaseOrder;