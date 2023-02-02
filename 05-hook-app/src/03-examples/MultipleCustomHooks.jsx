
import { useState } from "react";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
    const URL = `https://rickandmortyapi.com/api/character/1`
    const {data,isLoading,hasError} = useFetch(URL)
    console.log(data) 
   const {name,image} = !!data && data;
    /* console.log(data.name);</React.StrictMode> */
    
    const {add , setAdd} =useState(2)
    console.log(add)
    
    const addCharacter = ()=>{
      console.log(1);
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
<footer className="blockquote-footer">
{name}
</footer>
</blockquote>)
  }
  
  <button className="btn btn-primary" onClick={addCharacter}>
    Next quote
  </button> 
  </>
  )
}
