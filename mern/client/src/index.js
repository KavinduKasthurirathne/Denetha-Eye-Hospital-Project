import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import createRoutes from './routes/routes';

const routes = createRoutes();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
