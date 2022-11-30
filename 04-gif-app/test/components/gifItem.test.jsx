
import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('testeo de gifItem',()=>{
    
    const url = 'https://one-punch.com/saitama.jpg'
    const title = 'Saitama'
    test('gif item tiene que tener un valor',()=>{
        
        const {container} =render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();

        
        
    });
    test('debe de mostrar la imagen con el URL y el ALT indicado',()=>{
        render(<GifItem title={title} url={url}/>);
        /* screen.debug(); */
        const {src, alt} = screen.getByRole('img');
       /*  expect(screen.getByRole('img').src).toBe(url)
        */
        expect(src).toBe(url)
        expect(alt).toBe(title )

        
        
    })
    test('se tiene que mostrar el titulo',()=>{
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})