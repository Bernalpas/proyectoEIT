

console.log('=================================================');

//Arreglos - arrays - vectores
let peras = 'peras';
let manzanas = 'manzanas';
let bananas = 'bananas';

let aluPepe = 'Pepe';//700 va

let alumnos = [];


//indice         0          1          2          3
let frutas = ['peras', 'manzanas', 'bananas', 'naranjas'];//n - 1 = índice

//indice          0         1            2          3         4
let persona = ['Pepe', 123456789, 'San Marín 200', true, 'Córdoba']//n - 1 = índice

console.log(frutas);

console.log(persona);

//accedemos a los datos por el índice
console.log(`La fruta que ocupa la primer posición es: ${frutas[0]}`);

console.log('=================================================');

console.table(frutas);
console.log(`El total de frutas del arreglo frutas es: ${frutas.length}`);

console.table(persona);
console.log(`El total de datos del arreglo persona es: ${persona.length}`);



console.log('=================================================');

//objetos literales
let pais = {
// key : value  
    nombre: 'Argentina',
    provincias: 24,
    ubicacion: 'América',
    poblacion: 50000000
}

console.log(pais);

//accedemos a los datos del objeto literal en JS por sus propiedades
console.log(`Las provincias en ${pais.nombre} son ${pais.provincias}`);


