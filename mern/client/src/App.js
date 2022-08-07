import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {Login} from './components/Login'
import { TestAddAccount } from './components/TestAddAccount';
import { useCookies } from 'react-cookie';
import { trackPromise } from 'react-promise-tracker';

const App = () => {
  //list of error messages
  const errors = [{
    name: 'none',
    value: 'none'
  }, {
    name: 'invalidUser',
    value: 'Invalid Username'
  }, {
    name: 'invalidPass',
    value: 'Invalid Password'
  }];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(errors[0]);
  const navigateTo = useNavigate();
  const [cookies, setCookie] = useCookies(['name', 'loggedIn', 'role']);

  //using a condition to redirect to a page
  //URL is set to localhost:3000/{userRole}
  useEffect(()=>{
    if(cookies.loggedIn==='true'){
      navigateTo(cookies.role);
    }
  });

  

  //check database and validate user
  //set user role
  //set loggedIn = true
  const verifyLogin = async () => {
    const data = {
      username,
      password
    }

    trackPromise(
      await axios.post('http://localhost:5000/account/check', data)
      .then(({data}) => {
        if(data.message){
          if(data.message === 'invalidUser'){
            setErrorMsg(errors[1]);
          }else if(data.message === 'invalidPass'){
            setErrorMsg(errors[2]);
          } else {
            setErrorMsg(errors[0]);
          }
        } else {
          const {name, role} = data[0];
    
          //save to cookies
          setCookie('role', role, {path: '/'});
          setCookie('name', name, {path: '/'});
          setCookie('loggedIn', 'true', {path: '/'});
        }
      })
      .catch((error) => {console.log(error)})
    );
  };

  const user = {
    name: username,
    usenameOnChange: ({target}) => {setUsername(target.value);},
    pass: password,
    passwordOnChange: ({target}) => {setPassword(target.value);}
  };

  return (
      <div className="App">
        <br />
        <TestAddAccount />
        <Login onLogin={verifyLogin} input={user} error={errorMsg} />
      </div>
  );
};

export default App;