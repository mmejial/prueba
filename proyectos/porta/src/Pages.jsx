import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header  from './pages/Header';
import About from './pages/About';
import Portafolio from './pages/Portafolio';

 const Pages = () => {
  return (
    <>
    <Routes> 
    
    
    <Route path="/" element ={<Header/>}/>
    <Route path="about" element={<About/>}/> 
    <Route path='portafolio' element={<Portafolio/>}/>
    
    </Routes>  
    </>
  )
}
export default Pages;
