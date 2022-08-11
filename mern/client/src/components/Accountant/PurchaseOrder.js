import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Accountant.css';
import { useParams } from 'react-router-dom';

import PORoot from './PurchaseOrder/PORoot';
import POList from './PurchaseOrder/POList';
import PODetails from './PurchaseOrder/PODetails';

const PurchaseOrder = (props) => {
    const [roots, setRoots] = useState([]);
    const {root, ponum} = useParams();

    useEffect(()=>{
        const rootList = props.data.map((item) => (item.poRoot));
        setRoots(rootList);
    }, [props.data]);

    return (
        <div className='App grid-wrapper'>
            <div className='grid-child' id='PORoot'>
                <PORoot data={roots} setter={setRoots} root={root} />
            </div>
            <div className='grid-child' id='POList'>
                <POList root={root}/>
            </div>
            <div className='grid-child' id='PODetails'>
                <PODetails root={root} ponum={ponum} />
            </div>
        </div>
    );
};

export default PurchaseOrder;