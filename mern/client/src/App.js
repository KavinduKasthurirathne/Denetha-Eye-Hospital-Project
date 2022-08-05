import React, {useState,useEffect} from 'react';
import './App.css';
import { Link,useNavigate } from 'react-router-dom';
import {Login} from './components/Login'

export const App = () => {
  const [userRole, setUserRole] = useState('accountant');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const userRoleOnChange = ({target}) => {
    setUserRole(target.value);
  };

  //using a condition to redirect to a page
  //URL is set to localhost:3000/{userRole}
  useEffect(()=>{
    if(loggedIn){
      navigate(userRole);
    }
  });

  const verifyLogin = () => {
    setLoggedIn(loggedIn ? false : true);
  };

  return (
      <div className="App">
        <br />{loggedIn ? 'true' : 'false'}
        <input name={'userRole'} type={'text'} value={userRole} placeholder={'My Role'} onChange={userRoleOnChange} />
        <button className='button'><Link to={userRole}>Redirect test</Link></button>
        <Login onLogin={verifyLogin} />
      </div>
  );
};
