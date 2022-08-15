import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Accountant.css';
import PCBody from './PettyCash/PCBody';
import PCRoot from './PettyCash/PCRoot';

const PettyCash = (props) => {
    const [root, setRoot] = useState('');
    const [selected, setSelected] = useState([]);

    useEffect(()=>{
        const getSelected = async () => {
            await axios.post(`http://localhost:5000/pettyCash/getSelected/${root}`, {})
            .then((res)=>{
                setSelected(res.data);
            }).catch((err)=>{
                console.log(err);
            });
        };
        if(root){
            getSelected();
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
                    root={root} 
                    setRoot={setRoot} />
            </div>
        </div>
    );
};

export default PettyCash;