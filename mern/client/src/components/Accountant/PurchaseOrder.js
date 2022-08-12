import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Accountant.css';
import { useParams } from 'react-router-dom';

import PORoot from './PurchaseOrder/PORoot';
import POList from './PurchaseOrder/POList';
import PODetails from './PurchaseOrder/PODetails';

const PurchaseOrder = (props) => {
    const [roots, setRoots] = useState([]);
    const [orders, setOrders] = useState([]);
    const [select, setSelect] = useState({});
    const {root, ponum} = useParams();

    useEffect(()=>{
        const rootList = props.data.map((item) => (item.poRoot)).filter((item, i, self) => self.indexOf(item)===i);
        setRoots(rootList);
        if(root){
            const orderList = props.data.filter((item) => item.poRoot===root).map((item) => ({poNumber: item.poNumber, id: item._id}));
            setOrders(orderList);
            if(ponum){
                const selected = props.data.find((item) => item._id===ponum);
                setSelect(selected);
            }
        }
    }, [props.data, root, ponum]);

    return (
        <div className='App grid-wrapper'>
            <div className='grid-child' id='PORoot'>
                <PORoot data={roots} setter={setRoots} root={root} />
            </div>
            <div className='grid-child' id='POList'>
                <POList data={orders} setter={setOrders} root={root} ponum={ponum} select={setSelect} />
            </div>
            <div className='grid-child' id='PODetails'>
                <PODetails data={select} root={root} ponum={ponum} />
            </div>
        </div>
    );
};

export default PurchaseOrder;