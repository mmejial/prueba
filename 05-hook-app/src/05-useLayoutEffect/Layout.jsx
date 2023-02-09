import { useFetch,useCounter } from "../hooks"
import { Blockquote,Quotes,CharacterFinder } from "../03-examples/components"



export const Layout = () => {
  const {counter,increment,setTarget} = useCounter(1)
    const URL = `https://rickandmortyapi.com/api/character/${counter}`
    const {data,isLoading,hasError} = useFetch(URL)
    /* console.log(data)  */
   const {image,name} = !!data && data;
    /* console.log(data.name);</React.StrictMode> */
    
    /* const prueba = (event)=>{
      console.log(event.target[0].value);
      event.preventDefault()
    } */

    const setData = (event)=>{
      /* console.log(event.target[0].value) */
      const data =event.target[0].value
      /* console.log(isNaN(data)); */
      if(isNaN(data)){
        /* console.log('paquito') */
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
    (<Quotes/>) 
    :
    (
    <Blockquote
    image ={image}
    name={name}
    
    />)
  }
  
  <button 
  className="btn btn-primary mb-4"
  disabled={isLoading} 
  onClick={()=>{increment()}}
  >
    Next Character
  </button> 
  <CharacterFinder
  setData ={setData}
  />
  </>
  )
}
