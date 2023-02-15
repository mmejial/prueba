import React from 'react'
import batman from '../assets/img/Hellbat.png'
import { Link } from "react-router-dom";

 const Header = () => {
  return (
    <>
     <header className="container active   " id="home">
        <div className="header__content--desktop">

        
            <div className="lef-header">
                <div className="image">
                    <img src={batman} alt=""/>
                </div>
          
              </div>      
              <div className="right__header">
                  <h1 className="header__name">
                  <span>I'M MARCO MEJIA.</span>
                  <br></br>
                  WEB DEVELOPMENT JR.
                  </h1> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt hic error beatae repellat laborum explicabo quam corrupti vitae unde ipsum, illo quae repudiandae nihil molestias temporibus? Maxime, esse doloremque?</p>
                  
                  <div className="button__cotainer">
                    <a className="main__button" id="buttons" >
                        <span >About Me!</span>
                        
                        <i className="fa-solid fa-download"></i>
                    </a>
                  </div>
                    
              </div>
          </div>

    </header>
    </>
  )
}
export default Header