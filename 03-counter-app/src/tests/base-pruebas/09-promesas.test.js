import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',()=>{
    test('getHeroeByIdAsync tiene que retornar un heroe',(done)=>{
        const id =1;
        getHeroeByIdAsync(id).then(hero=>{
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        })
        
    })
    test('getHeroeByIdAsync tiene que retornar un error',(done)=>{
        const id =10;
        getHeroeByIdAsync(id).catch(error =>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done()
        })
    })
})