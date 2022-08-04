import React, {useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {Login} from './components/Login'

export const App = () => {
  const [userRole, setUserRole] = useState('receptionist');

  const userRoleOnChange = ({target}) => {
    setUserRole(target.value);
  };

  return (
      <div className="App">
        <br />
        <input name={'userRole'} type={'text'} value={userRole} placeholder={'My Role'} onChange={userRoleOnChange} />
        <button className='button'><Link to={userRole}>Redirect test</Link></button>
        <Login />
      </div>
  );
};
