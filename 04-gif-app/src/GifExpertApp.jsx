import { useState } from "react";
import {AddCategory} from './components/AddCategory'

const APIKEY = 'Jg0QrUujBDj563TGACcaQExpSo2I8Mqh';

const APIURL = 'http://api.giphy.com/v1/gifs/random'

export const GifExpertApp=()=>{
const [categories, setCategories]=useState(['One Pounch','paquito'])

const onAddCategory =()=>{
 setCategories([...categories, 'Valorant'])
}


return(
    <>
    <h1>nose</h1>
    {/* input */}
    <AddCategory/>
    {/* button */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
        {categories.map(category =>{
            return <li key={category}>{category}</li>
        })}
        
    </ol>
    </>
)
}