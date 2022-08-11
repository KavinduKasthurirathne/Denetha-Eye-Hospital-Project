import React from 'react';
import { Link } from 'react-router-dom';
import '../Accountant.css';

const PORoot = (props) => {

    const show = () => {
        console.log(props.data);
    };

    return (
        <div className='left-align'>
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
                <button onClick={show}>show</button>
            </ul>
        </div>
    );
};

export default PORoot;