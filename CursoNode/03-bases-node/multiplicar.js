
const fs = require('fs');

 const crearArchivo =(base =5)=>{
return new Promise = ((resolve, reject)=>{
    if(typeof(base) != 'number'){
        reject('no es nu numero')
    }else{
        console.clear();
    console.log('==================');
    console.log('    TABLA DEL ',base);
    console.log('==================');
    
    let salida ='';

    for(let i =1; i<=10; i++){
        salida +=(`${base} x ${i} = ${i*base}\n`);
    }
    console.log(salida);
    
    fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
        if(err) throw err
        console.log(`tabla-${base}.txt creada`);
    })
        resolve(
            
        )
    }

})
    
}
module.exports={
    crearArchivo
}