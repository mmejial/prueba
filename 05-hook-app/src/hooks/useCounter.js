import { useState } from "react"


export const useCounter=(initialValue=10)=>{

    const [counter, setCounter]=useState(initialValue)

    const increment = ()=>{
        setCounter(counter +1)
    }
    const decrement = ()=>{
        /* if(counter ===0)return; */
        setCounter (counter-1)
    }
    const reset = ()=>{
        setCounter(initialValue)
    }
    const setTarget=(value)=>{
        /* setCounter(counter) */
        /* console.log(value) */
        /* setCounter(counter + value) */
        const datos = parseInt(value)
       /*  console.log(typeof(datos))
        console.log(typeof(counter)) */
         setCounter( datos)
        
        
        

    }
    return{
        counter,
        increment,
        decrement,
        reset,
        setTarget    
        }
}