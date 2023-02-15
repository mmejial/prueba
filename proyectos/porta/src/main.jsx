import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App' */
import './assets/css/main.css'
import './assets/css/ballon.css'
import Pages from './Pages'
import { BrowserRouter } from "react-router-dom"
import Navegator from './components/Navegator'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <BrowserRouter>
  <Navegator/>
    <Pages/>
    
    </BrowserRouter>
  </React.StrictMode>,
)
