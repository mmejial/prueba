import React from "react";

const About = () => {
  return (
    <>
    <section className="container active  about" id="about">
            <div className="container__title">
                <h1 className="main__title" >
                    About 
                    <span className="span">me</span>
                    <span className="back__title">
                        RESUME
                    </span>
                </h1>
               
            </div>
            <div className="about__container">
                
             <div className="personal__container">
                    <h2 className="personal__tittle">PERSONAL INFO</h2>
                    <div className="personal__data">
                        <p>Name: <span>Marco</span></p>
                        <p>Age: <span>32</span></p>
                        <p>Last Name: <span>Mejia</span></p>        
                        <p>Phone: <span aria-label="7351461281" data-balloon-pos="down" >cell number</span></p>        
                        <p>Nationality: <span>Mexican</span></p>
                        <p>Email: <span aria-label="@gmail.com" data-balloon-pos="down" >marcomejia159010</span></p>
                        <p>Freelance: <span>Available</span> </p>
                        <p>Langages: <span>Spanish - English (intermediate)</span> </p>      
        
                     </div>
   
                    <div className="button__cotainer change">
                        <a className="main__button" id="buttons" href="https://drive.google.com/file/d/15_8exFk2GAMGKc_mYKjMd6SIMHEwKAiG/view?usp=sharing" target="_blank" >
                            <span >DOWNLOAD CV</span>
            
                            <i className="fa-solid fa-download"></i>
                        </a>
                    </div>

                </div>
                <div className="years__container">
                    <section className="years__cards">
                        <h2>12<sup>+</sup></h2>
                        <p>nose que poner</p>
                        
                    </section>
            
                    <section className="years__cards">
                        <h2>12<sup>+</sup></h2>
                        <p>nose que poner</p>
                        
                    </section>
            
                    <section className="years__cards">
                        <h2>12<sup>+</sup></h2>
                        <p>nose que poner</p>
                        
                    </section>
            
                    <section className="years__cards">
                        <h2>12<sup>+</sup></h2>
                        <p>nose que poner</p>
                        
                    </section>
            
            
                </div>

            </div>
            
    <div className="experience__container">
        <h2>EXPERIENCE & EDUCATION</h2>

        <div className="cards__container">
            <div className="card__item">
                <div className="card__icon">
                    <span className="button-icon fas fa-briefcase" ></span>
                </div>

                <div className="card__content">
                    <div className="content__year">
                        <p> 2018 - PRESENT</p>
                    </div>
                    <div className="content__title">
                        <h3>TITULO</h3>
                    </div>
                    <div className="content__description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                    </div>
                </div>

            </div>

            <div className="card__item">
                <div className="card__icon">
                    <span className="button-icon fas fa-briefcase" ></span>
                </div>
                <div className="card__content"></div>
            </div>

            <div className="card__item">
                <div className="card__icon">
                    <span className="button-icon fas fa-briefcase" ></span>
                </div>
                <div className="card__content"></div>
            </div>

            <div className="card__item">
                <div className="card__icon">
                    <span className="button-icon fas fa-briefcase" ></span>
                </div>
                <div className="card__content"></div>
            </div>

            <div className="card__item">
                <div className="card__icon">
                    <span className="button-icon fas fa-briefcase" ></span>
                </div>
                <div className="card__content"></div>
            </div>

            <div className="card__item">
                <div className="card__icon">
                    <span className="button-icon fas fa-briefcase" ></span>
                </div>
                <div className="card__content"></div>
            </div>

        </div>
    </div>

        </section>
    </>
  )
}

export default About