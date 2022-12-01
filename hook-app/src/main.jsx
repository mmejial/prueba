import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useSate/CounterApp';
import { HookApp } from './assets/HookApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp/>
  </React.StrictMode>
)
