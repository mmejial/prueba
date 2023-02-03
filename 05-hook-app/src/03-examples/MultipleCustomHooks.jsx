

import { useFetch } from "../hooks/useFetch"

import {useCounter} from '../hooks/useCounter'
export const MultipleCustomHooks = () => {
  const {counter,increment,setTarget} = useCounter(1)
    const URL = `https://rickandmortyapi.com/api/character/${counter}`
    const {data,isLoading,hasError} = useFetch(URL)
    console.log(data) 
   const {name,image} = !!data && data;
    /* console.log(data.name);</React.StrictMode> */
    
    /* const prueba = (event)=>{
      console.log(event.target[0].value);
      event.preventDefault()
    } */

    const setData = (event)=>{
      /* console.log(event.target[0].value) */
      const data =event.target[0].value
      console.log(isNaN(data));
      if(isNaN(data)){
        console.log('paquito')
      }else{
      setTarget(data)
    }


      event.preventDefault()
    }
   
    return(
        <>
  <h1>Breking Bad Quotes</h1>
  <hr/>
  { 
    (isLoading)
    ?
    (<div className="alert alert-info text-center">
    Loading....
  </div>
) :
(<blockquote className="blockquote text-end">

<p className="mb-1">
  <img src={image} alt="" />
</p>
<footer className="blockquote-footer mt-2 pt-2">
{name}
</footer>
</blockquote>)
  }
  
  <button 
  className="btn btn-primary mb-4"
  disabled={isLoading} 
  onClick={()=>{increment()}}
  >
    Next Character
  </button> 
  <form onSubmit={setData}>
  <input type="text" 
  className="mr-3"
  />
  <input type="submit" 
  className="btn btn-secondary"
  />
  </form>
  </>
  )
}
