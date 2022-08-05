import React, { useState } from 'react';
import '../App.css';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logo = require('../image/denethaLogo.png');

    const handleSubmit = () => {
        // alert(`This doesnt do anything yet
        //     entered inputs,
        //     username - ${username}
        //     password - ${password}`);
        props.onLogin();
    };

    const usenameOnChange = ({target}) => {
        setUsername(target.value);
    }
    const passwordOnChange = ({target}) => {
        setPassword(target.value);
    }

    return (
        <div className='round-edge-div'>
            <br />
            <img className='logo-img' src={logo} alt={'logo'} />
            <br />
            <h3>Login</h3>
            <input name={'username'} type={'text'} value={username} placeholder={'Username'} onChange={usenameOnChange} />
            <br />
            <input name={'password'} type={'password'} value={password} placeholder={'Password'} onChange={passwordOnChange} />
            <br />
            <button className='button' onClick={handleSubmit}>Sign in</button>
        </div>
    );
}
