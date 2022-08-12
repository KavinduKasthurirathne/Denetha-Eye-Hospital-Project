import React from 'react';
import { Link } from 'react-router-dom';
import '../Accountant.css';
import '../../../App.css';
import { Button } from '@mui/material';

const POList = (props) => {

    const show = () => {
        console.log(props.data);
    };

    const displayData = () => { return(
        (props.data[0] && props.data[0].poNumber!==undefined) ?
        <ul>
            {props.data.map((item, i) => (
                (item.id===props.ponum) ?
                <li key={'item'+i}>
                    <Link className='bold-text' key={i} to={props.root+'/'+item.id} >
                    <div>PO {item.poNumber}</div>
                    </Link>
                </li>
                :
                <li key={'item'+i}>
                    <Link className='normal-text' key={i} to={props.root+'/'+item.id} >
                    <div>PO {item.poNumber}</div>
                    </Link>
                </li>
            ))}
        </ul>
        :
        <p className='prompt'>Create a PO to start</p>
    )};

    return (
        <div className='center-align basic'>
            {
                (props.root) ?
                displayData()
                :
                <p className='prompt'>Select one to show list</p>
            }
            <Button 
                variant="contained" 
                onClick={show} 
                color='secondary' >New</Button>
        </div>
    );
};

export default POList;