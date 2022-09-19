import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Accountant.css';

import PORoot from './PurchaseOrder/PORoot';
import POList from './PurchaseOrder/POList';
import PODetails from './PurchaseOrder/PODetails';

const PurchaseOrder = (props) => {
    const [roots, setRoots] = useState([]);
    const [orders, setOrders] = useState([]);
    const [select, setSelect] = useState({});
    const [root, setRoot] = useState('');
    const [ponum, setPonum] = useState('');

    useEffect(()=>{
        //get a list of unique roots
        const rootList = props.data.map((item) => (item.poRoot))
        .filter((item, i, self) => self.indexOf(item)===i);

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
        <div className='basic grid-wrapper-3'>
            <div className='grid-child' id='PORoot'>
                <PORoot 
                    data={roots} 
                    setter={setRoots} 
                    root={root} 
                    rootSetter={setRoot}
                    getPO={props.getPO}/>
            </div>
            <div className='grid-child' id='POList'>
                <POList 
                    data={orders} 
                    setter={setOrders} 
                    root={root} 
                    rootSetter={setRoot}
                    ponum={ponum} 
                    ponumSetter={setPonum}
                    select={setSelect} 
                    getPO={props.getPO} 
                    selected={select} />
            </div>
            <div className='grid-child' id='PODetails'>
                <PODetails 
                    data={select} 
                    root={root} 
                    ponum={ponum} 
                    getPO={props.getPO} />
            </div>
        </div>
    );
};

export default PurchaseOrder;