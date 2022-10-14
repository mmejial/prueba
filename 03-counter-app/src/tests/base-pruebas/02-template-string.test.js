import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string',()=>{
    test('getSaludo debe de retornar el nombre',()=>{
        const name ='marco';
        const messag = getSaludo(name);
        expect(messag).toBe(name);
    })
})