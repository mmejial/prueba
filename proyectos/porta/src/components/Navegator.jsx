import React from 'react'
import { Link } from "react-router-dom";

const Navegator = () => {
  return (
    <>
    <div className="menu__container--desktop">
      <Link to="/">
        <div  className="menu__button--desktop control active-btn" aria-label="HOME" data-balloon-pos="left" data-id="/">
            <i  className="fas fa-home "></i>
        </div>
        </Link>
        <Link to="about">
        <div className="menu__button--desktop control" aria-label="ABOUT" data-balloon-pos="left" data-id="about">
            <i className="fas fa-user"></i>
        </div>
        </Link>
        <Link to="portafolio">
        <div className="menu__button--desktop control" aria-label="PORTAFOLIO" data-balloon-pos="left" data-id="portafolio">
            <i className=" fas fa-briefcase"></i>
        </div>
        </Link>
        
       
    </div>
    </>
  )
}
export default Navegator
