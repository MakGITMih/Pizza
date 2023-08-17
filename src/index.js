import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './аpp';
// import * as React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <BrowserRouter>
         <App />
    </BrowserRouter>
);


