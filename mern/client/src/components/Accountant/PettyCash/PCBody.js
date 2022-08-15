import React, { useState } from "react";
import '../../../App.css';
import '../Accountant.css';
import PCHeader from "./PCHeader";

const PCBody = (props) => {
    const [reserve, setReserve] = useState('20000.00');
    // const getDateString = (iso) => {
    //     const date = new Date(iso);
    //     const correctDate = new Date(date.getTime() + 360*60000);
    //     return (correctDate.toISOString().split('T')[0]);
    // };

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
                    <PCHeader 
                        root={props.root} 
                        reserve={calculateReserve()}
                        serReserve={setReserve} />
                </div>
                :
                <p className='prompt'>Select a Petty Cash Root to edit</p>
            }
        </div>
    );
};

export default PCBody;