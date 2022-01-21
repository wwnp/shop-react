import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </BrowserRouter>
  ,
  document.getElementById('root')
);