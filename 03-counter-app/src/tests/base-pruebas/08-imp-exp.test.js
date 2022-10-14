import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('pruebas al archivo 08-imp-exp',()=>{
    test('getHeroById debe de retornar algun hero por ID', ()=>{
        const id = 1;
        const funcion1 = getHeroeById(id)
        console.log(funcion1);
    })
    test('getHeroesByOwner retorene DC con tamaño 3',()=>{
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        
        expect(heroes.length).toEqual(3)
    })
    test('getHeroesByOwner retorene Marvel con tamaño 2',()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toEqual(2)
    })
})