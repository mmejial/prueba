import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './App'
import { FirstApp } from "./components/FirstApp";
import './assets/main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/> 
        <FirstApp/>
    </React.StrictMode>
)