import { useState} from 'react'

export const Button=()=>{
    const [counter , setCounter] = useState(0)
const handleAdd =()=>{
setCounter(counter + 1);
}
const handleRest =()=>{
    setCounter(counter -1)
}
const handleReset =()=>{
    setCounter(counter - counter)
}
    return(
    
    <>
    <h2>{counter}</h2>
    <button onClick={handleAdd} > +1</button>
    <button onClick={handleRest}>-1</button>
    <button onClick={handleReset}>Reset</button>
    
    </>
    )
    
}