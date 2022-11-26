

import { GifItem } from "../components/GifItem"; 
 
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category)
  
  /* 
  const [images, setimages] = useState([]);


  const getImages = async()=>{
    const newImages = await getGif(category);
    setimages(newImages);
  }

useEffect(() => {
  getImages();

  
}, [])
 */

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando.....</h2>)
        }

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
