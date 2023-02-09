import { useState, useMemo } from "react"
import { useCounter } from "../hooks"

const hevyStuff=(interationNumber = 10)=>{
  for(let i =0; i<interationNumber; i++){
    console.log('Ahi Vamos...')
  }
  return `${interationNumber} interaciones realizadas`
}

export const MemoHook = () => {
      const {counter, increment} = useCounter(400)
      const [show,setShow] = useState(true)
      /* console.log(show) */
      const memorizeValue = useMemo(()=>hevyStuff(counter),[counter])
  return (
   <>
   <h1>Counter: <small>{counter}</small></h1>
   <hr />
   {memorizeValue}
   <button
   className="btn btn-primary"
   onClick={()=>increment()}
   >
    +1
   </button>

   <button
   className="btn btn-outline-primary"
    onClick={()=> setShow(!show)}
   >
    Show/Hide {JSON.stringify(show)}
   </button>
   </>
  )
}
