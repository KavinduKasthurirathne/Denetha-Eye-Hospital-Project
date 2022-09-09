import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../../App.css';
import '../Accountant.css';
import PCHeader from "./PCHeader";
import PCItems from "./PCItems";
import PCSubmit from "./PCSubmit";
import {useCookies} from 'react-cookie';

const PCBody = (props) => {
    const [reserve, setReserve] = useState('');
    const [update, setUpdate] = useState(false);
    const [updateInput, setUpdateInput] = useState({});
    const [updateID, setUpdateID] = useState('');
    const [cookies] = useCookies('proxy');

    const getData = async () => {
        await axios.post(`${cookies.proxy}/api/pettyCash/getdata`)
        .then((res)=>{
            setReserve(res.data.reserve);
        }).catch((err)=>{
            console.log(err);
        })};

    useEffect(()=>{
        getData();
    },[]);

    const calculateTotal = () => {
        let sum = 0;
        if(props.data){
            if(props.data.length>0){
                props.data.map((item)=>(sum += parseFloat(item.amount)));
            }
        }
        return(sum.toFixed(2));
    };

    const calculateReserve = () => {
        let res = parseFloat(reserve);
        let total = calculateTotal()
        res -= total;
        return(res.toFixed(2));
    };

    return (
        <div className='basic'>
            {
                props.root ?
                
                <div className='po-anim'>
                    {
                        (props.data && props.data.length > 0) ?
                        <>
                            <PCHeader 
                                data={props.data}
                                root={props.root} 
                                reserve={reserve}
                                getReserve={getData}
                                calculateReserve={calculateReserve()}
                                setReserve={setReserve} />
                            <hr />
                            <PCItems 
                                root={props.root} 
                                data={props.data} 
                                getList={props.getList} 
                                update={setUpdate}
                                up={update}
                                updateInput={setUpdateInput}
                                setUpdateID={setUpdateID} />
                            <hr />
                        </>
                        :
                        <div id='fixed-height'>
                            <p className='prompt'>No Records, Delete this list and create a new one</p>
                        </div>
                    }
                    <PCSubmit 
                        root={props.root} 
                        update={update}
                        setUpdate={setUpdate}
                        updateID={updateID}
                        updateInput={updateInput}
                        getList={props.getList} />
                </div>
                :
                <p className='prompt'>Select a Petty Cash Root to edit</p>
            }
        </div>
    );
};

export default PCBody;