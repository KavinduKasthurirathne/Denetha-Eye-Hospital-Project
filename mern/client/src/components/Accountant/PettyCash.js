import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Accountant.css';
import PCBody from './PettyCash/PCBody';
import PCRoot from './PettyCash/PCRoot';
import { useCookies } from 'react-cookie';

const PettyCash = (props) => {
    const [root, setRoot] = useState('');
    const [selected, setSelected] = useState([]);
    const [cookies] = useCookies('proxy');

    const getSelected = async (link) => {
        await axios.post(`${cookies.proxy}/api/pettyCash/getSelected/${link}`, {})
        .then((res)=>{setSelected(res.data)})
        .catch((err)=>{console.log(err)});
    };

    useEffect(()=>{
        if(root){
            getSelected(root);
        }
    }, [root]);

    return (
        <div className='basic grid-wrapper-2'>
            <div className='grid-child' id='acc-root'>
                <PCRoot 
                    data={props.data} 
                    root={root} 
                    rootSetter={setRoot} 
                    getPC={props.getPC} />
            </div>
            <div className='grid-child'>
                <PCBody 
                    data={selected} 
                    getList={getSelected}
                    root={root} 
                    setRoot={setRoot} />
            </div>
        </div>
    );
};

export default PettyCash;