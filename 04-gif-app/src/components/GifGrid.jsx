
import { useState, useEffect } from "react"
import { getGif } from "../hooks/getgif"
import { GifItem } from "./GifItem";

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

       <div className="card-grid">
        {
          images.map((images)=>(
            <GifItem 
            key={images.id}
            {...images}
            
            />
            
          ))
        }
        </div> 
    </>
  )
}
