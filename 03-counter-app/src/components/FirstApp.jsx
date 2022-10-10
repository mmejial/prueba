import Title from '../add/Title'
import { Button } from '../add/Button'
const nombre ={
    nombre:'Marco Antonio',
    apellido:'Mejia Lopez',
    number:32
}



export const FirstApp=()=>{
   
    return( 
        <>{/* fragmento */}
        
            <Title
            name={nombre.nombre}
            firstNamr={nombre.apellido}
            number={nombre.number}
            />
           <Button></Button>
            
        
        
   
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, aspernatur! Ipsa eligendi ratione culpa voluptatibus aperiam repudiandae quasi placeat in porro possimus modi beatae dolores quisquam tempore molestias, tempora doloremque!</p>
    </>
    )
}

