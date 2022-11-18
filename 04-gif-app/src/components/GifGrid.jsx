
import { useState, useEffect } from "react"
import { getGif } from "../hooks/getgif"

export const GifGrid = ({category}) => {
  const [images, setimages] = useState([]);


  const getImages = async()=>{
    const newImages = await getGif(category);
    setimages(newImages);
  }

useEffect(() => {
  getImages();

  
}, [])


  return (
    <>
        <h3>{category}</h3>
        <h2>hola</h2>

       <ol>
        {
          images.map(({id,title})=>(
            <li key={id}>{title}</li>
          ))
        }
        </ol> 
    </>
  )
}
