import { useState } from "react";
import {AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";

const APIKEY = 'Jg0QrUujBDj563TGACcaQExpSo2I8Mqh';

const APIURL = 'http://api.giphy.com/v1/gifs/random'

export const GifExpertApp=()=>{
const [categories, setCategories]=useState(['One Pounch','paquito'])

const onAddCategory =(newCategory)=>{
    if(categories.includes(newCategory))return;
    setCategories([newCategory, ...categories])

 /* setCategories([...categories, 'Valorant']) */
}


return(
    <>
    <h1>nose</h1>
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