//               0           1          2          3
let frutas = ['peras', 'manzanas', 'bananas', 'naranjas'];//n - 1

let persona = ['Pepe', 123456789, 'San Marín 200', true, 'Córdoba']


console.log('=================================================');

//un método para conocer la cantidad de elementos que tiene el arreglo
//nombreArreglo.length

console.log(`Los elementos del arreglo frutas son: ${frutas.length}`);


console.log(`Los elementos del arreglo persona son: ${persona.length}`);


console.log('=================================================');

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);//no existe el elemento 4

console.log('=================================================');


//Bucle: es un ciclo repetitico de código según el uso
//for

//     inicio    límite   paso0= 5 + 1 = 6
for (let i = 0; i <= 5; i++  ) {
    console.log(`Estamos contando desde ${i} hasta 5`);
}

console.log('=================================================');
console.log('=================================================');

//    inicio       límite             paso
for (let i = 0; i <= persona.length ; i++  ) {
    console.log(`Los datos de la Persona son: ${persona[i]}`);
}

//    inicio       límite             paso
for (let i = 0; i < persona.length ; i++  ) {
    console.log(`Los datos de la Persona son: ${persona[i]}`);
}

console.log('=================================================');
console.log('=================================================');


for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
} 


console.log('=================================================');
console.log('=================================================');

let productos = [];

console.log(`Los datos de los Productos son ${productos}`);
console.log(`La cantidad de elementos en Productos son ${productos.length}`);

console.log('=================================================');

//agregamos con el método nombreArreglo.push
productos.push('Coca Cola');

console.log(`Los datos de los Productos son ${productos}`);
console.log(`La cantidad de elementos en Productos son ${productos.length}`);

productos.push('Pepas');

console.log('=================================================');

console.log(`Los datos de los Productos son ${productos}`);
console.log(`La cantidad de elementos en Productos son ${productos.length}`);



