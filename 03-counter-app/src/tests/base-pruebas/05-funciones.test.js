import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones',()=>{
    test('should getUser debe de retornar un objeto',()=>{
        const textUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
    const user = getUser();
    console.log(user);
    expect(textUser).toEqual(user)
    })
    test('getUsuarioActivo tiene que retornar un objeto',()=>{
        const name='marco'
        const objeto = {
            uid: 'ABC567',
            username: name
    }
        const usuario = getUsuarioActivo(name)
        console.log(usuario);

        expect(objeto).toEqual(usuario)
    })
})