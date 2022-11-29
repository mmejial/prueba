import { useState } from "react";
import {AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp=()=>{
const [categories, setCategories]=useState(['One Pounch'])

const onAddCategory =(newCategory)=>{
    if(categories.includes(newCategory))return;
    setCategories([newCategory, ...categories])

 /* setCategories([...categories, 'Valorant']) */
}


return(
    <>
    <h1>Gif Expert App</h1>
    {/* input */}
    <AddCategory 
    /* setCategories={setCategories} */
    onNewCategory={(event) => onAddCategory(event)}
    />
    {/* button */}
    

        {categories.map((category) =>
           (<GifGrid 
           key={category} 
           category={category}
           />)
        )}
        
    
    </>
)
}