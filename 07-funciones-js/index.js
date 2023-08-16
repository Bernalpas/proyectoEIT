

console.log('====================================');
console.log('======== Funciones en JS ===========');
console.log('====================================');


//funciones: bloques de código que ejecutan cierta tarea

if (true) {
    console.log('Soy el condicional');
}

/*
for (let index = 0; index < array.length; index++) {    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
// pal. reservada nombre  (params)
function dameNombre() {
    console.log('Mi nombre es Pepe');
}

//una función sólo se ejecuta cuando la invocamos
dameNombre();

console.log('====================================');

let nombre = 'Juan';//variable de tipo global

//                             1         2   3   4   5 .....
function dameNombreParams(nombrePersona, k , l , o , p , i , y , u , r5 , h) {//variable de tipo local
    console.log('Mi nombre es Pepe');
    console.log(nombre);
    console.log(nombrePersona);
    console.log(r5);
}

//console.log(r5);

dameNombreParams('María');

console.log(nombre);


console.log('====================================');

dameNombreParams(nombre)

//                    1      2     3     4    5 ....
dameNombreParams('Santiago', 5, 'hola', 100, 50, 10, 80, 89, 150, 800, 1000) 

console.log('====================================');

let otroNombre = 'Carlos';

function funcionParametro(miNombre, callback) {

    console.log(`Mi nombre es: ${miNombre}`);

    callback();
    
}

funcionParametro(otroNombre, miPais)

function miPais() {
    console.log('Mi país es Argentina');
}

console.log('====================================');

const flecha =  () => {
    console.log('Soy una función Flecha ');
}

flecha();

console.log('====================================');


function funcionReturn(a, b) {

    let resultado;

    resultado = a * b

    return resultado;

    console.log(`El resultado de la multiplicación es: ${resultado}`);
}

let numUno = 5000;
let numDos = 250;

let resultado = funcionReturn(numUno, numDos);

console.log(resultado);

console.log('====================================');

localStorage.removeItem('Usuario');
localStorage.removeItem('Password');


console.log('====================================');


let misVentas = JSON.parse(localStorage.getItem('Productos'));

console.log(misVentas);

console.log(misVentas.length);




























