import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, useNavigate } from "react-router-dom";
import {CookiesProvider, useCookies} from 'react-cookie';

import createRoutes from './routes/routes';

const routes = createRoutes();

const Main = () => {
  const [cookies] = useCookies(['loggedIn']);

  const navigateTo = useNavigate();
  useEffect(()=>{
    //check cookies, if not logged in, route to /login
    if(cookies.loggedIn !== 'true') {
      navigateTo('/');
    }
  });

  return (
    <></>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Main />
        {routes}
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
