import React, { useEffect, useState } from 'react';
import '../Accountant.css';
import '../../../App.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import POBody from './POBody';
import NoticeDialog from '../NoticeDialog';
import POHeader from './POHeader';

const PODetails = (props) => {
    const [data, setData] = useState({});
    const [items, setItems] = useState([]);
    const [save, setSave] = useState(true);
    const [dialog, setDialog] = useState(false);
    const [message, setMessage] = useState('');
    const [cookies] = useCookies('name', 'proxy');

    //a function to get ISO date with correct time zone
    const getDateString = (iso) => {
        const date = new Date(iso);
        const correctDate = new Date(date.getTime() + 360*60000);
        return (correctDate.toISOString().split('T')[0]);
    };

    useEffect(()=>{
        if(props.data.items){
            setItems(JSON.parse(props.data.items));
        }else{
            setItems([]);
        }
        var isoDate;
        var isoEditDate;
        if(props.data.date){
            isoDate = getDateString(props.data.date);
        }
        if(props.data.lastEdit){
            isoEditDate = getDateString(props.data.lastEdit);
        }
        setData({
            ...props.data,
            date: isoDate,
            lastEdit: isoEditDate
        });
    },[props.data]);

    const handleChange = ({target}) => {
        setData((prev)=>({
            ...prev,
            [target.name]: target.value
        }));
        setSave(false);
    };

    const handleSave = async () => {
        const update = {
            poRoot: data.poRoot,
            poNumber: data.poNumber,
            vendor: data.vendor,
            date: data.date,
            editor: cookies.name,
            mode: data.mode,
            items: JSON.stringify(items)
        };
        await axios.post(`${cookies.proxy}/api/purchaseOrder/update/${data._id}`, update)
        .then((response) => {
            setMessage(response.data.message);
            setDialog(true);
            props.getPO();
            setSave(true);
        })
        .catch((err)=>{console.log(err)})
    };

    const dialogClose = () => {
        setDialog(false);
    };

    return (
        <div className='basic' >
            {
            (props.data && props.ponum) ?
            <>
            <POHeader 
                data={data}
                handleChange={handleChange} />
            <NoticeDialog 
                message={`Status: ${message}`} 
                handleClose={dialogClose}
                handleButton={dialogClose} 
                enable={dialog} 
                title='Alert!' />
            <POBody 
                data={items}  
                setter={setItems} 
                editor={data.editor}
                editDate={data.lastEdit}
                save={save} 
                handleSave={handleSave} 
                setSave={setSave} />
            </>
            :
            <p className='prompt'>Select a Purchase order to edit</p>}
        </div>
    );
};

export default PODetails;