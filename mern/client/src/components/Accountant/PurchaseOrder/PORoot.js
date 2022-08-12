import React from 'react';
import { Link } from 'react-router-dom';
import '../Accountant.css';
import '../../../App.css';
import { Button } from '@mui/material';

const PORoot = (props) => {

    const show = () => {
        console.log(props.data);
    };

    return (
        <div className='left-align basic'>
            <ul>
                {props.data.map((item, i) => (
                    (item===props.root) ?
                    <li key={'root'+i}>
                        <Link className='bold-text' key={item} to={`${item}`} >
                            <div>{item}</div>
                        </Link>
                    </li>
                    :
                    <li key={'root'+i}>
                        <Link className='normal-text' key={item} to={`${item}`} >
                            <div>{item}</div>
                        </Link>
                    </li>
                ))}
                <Button 
                variant="contained" 
                onClick={show} 
                color='secondary' >New</Button>
            </ul>
        </div>
    );
};

export default PORoot;