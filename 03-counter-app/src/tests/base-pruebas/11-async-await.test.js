import { getImagen } from "../../base-pruebas/11-async-await"

describe('pruebas en 11-async-await',()=>{
    test('getImagen tiene que retornar una imagen desde el API', async()=>{
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')

    })
})