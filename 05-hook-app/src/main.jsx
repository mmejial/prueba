import React from 'react';
import ReactDOM from 'react-dom/client';
 import { CounterApp  } from './01-useSate/CounterApp'; 
import {CounterCustrom} from './01-useSate/CounterCustrom'
import { SimpleForm } from './02-useEfect/SImpleForm';
import { HookApp } from './assets/HookApp';
import { OtherForm } from './02-useEfect/OtherForm';
import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
    {/* <HookApp/> */}
    {/* <CounterCustrom/> */}
    {/* <CounterApp/> */}
    {/* <OtherForm/> */}
    <MultipleCustomHooks/>
    </>
)
