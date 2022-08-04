import React from 'react';
import {Login} from './components/Login'
import {Patients} from './components/Patients'
import './App.css';

export const App = () => {
  
  return (
    <div className="App">
      <Login />
      <Patients />
    </div>
  );
};
