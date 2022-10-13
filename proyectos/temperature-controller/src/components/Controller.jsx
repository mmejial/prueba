import { useState } from "react"

 const Controller=()=>{
    const [temperature,setTemperature]=useState(10)
    const [temperatureType, setTemperatureType]=useState('C')

    const  handelAdd=()=>{
        setTemperature(temperature + 1)

    }
    const handelMinus=()=>{
        setTemperature(temperature - 1)
        
    }
    const convertidor=()=>{
        if(temperatureType==='C'){
            setTemperatureType('F')
            setTemperature((temperature * (9/5) )+32)
        }
        else{
            setTemperatureType('C')
            setTemperature(((temperature-32)*(5/9)))
        }
    }
    return(
        <section className="container">
            <div className="forma">
                <div className="title__container">
                <h2>{temperature.toFixed(2)}°{temperatureType}</h2>
                </div>
            
            <div className="button__container">
            <button onClick={handelAdd} className="main__button">+</button>
            <button onClick={handelMinus } className="main__button">-</button>

            </div>
            <div className="button__container--secondary">
                <button className="secondary__button" onClick={convertidor}>{temperatureType}</button>
            </div>
            </div>
        </section>
    )
}
export default Controller;