import React, { useState } from 'react';
import '../App.css';
import Loading from './LoadingIndicator';

export const Login = (props) => {
    const [loading, setLoading] = useState(false);

    const logo = require('../image/denethaLogo.png');

    const handleSubmit = () => {
        setLoading(true);
        props.onLogin();
    };

    const {name, usenameOnChange, pass, passwordOnChange} = props.input;

    const displayError = () => { return (<div id='error-mgs' className='error-msg'>{props.error.value}</div>) };

    return (
        <div className='round-edge-div'>
            <br />
            <img className='logo-img' src={logo} alt={'logo'} />
            <br />
            <h3>Login</h3>
            {props.error.name === 'none' ? null : displayError()}
            <input name={'username'} type={'text'} value={name} placeholder={'Username'} onChange={usenameOnChange} />
            <br />
            <input name={'password'} type={'password'} value={pass} placeholder={'Password'} onChange={passwordOnChange} />
            <br />
            <button className='button' onClick={handleSubmit}>
                {(loading===true) ? <Loading /> : 'Sign In'}
            </button>
        </div>
    );
}
