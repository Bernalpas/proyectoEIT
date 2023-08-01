


console.log('===============================');
console.warn(' Operadores en Js ');
console.log('===============================');

console.error('Error en la data');

console.log('\x1b[31m%s\x1b[0m', 'hola')
console.log('\x1b[31m%s\x1b[0m', "rojo")
console.log('\x1b[32m%s\x1b[0m', 'verde');

console.log('\x1b[30m%s\x1b[0m', 'Negro');
console.log('\x1b[31m%s\x1b[0m', 'Rojo');
console.log('\x1b[32m%s\x1b[0m', 'Verde');
console.log('\x1b[33m%s\x1b[0m', 'Amarillo');
console.log('\x1b[34m%s\x1b[0m', 'Azul');
console.log('\x1b[35m%s\x1b[0m', 'Magenta');
console.log('\x1b[36m%s\x1b[0m', 'Cian');
console.log('\x1b[37m%s\x1b[0m', 'Blanco');

let hola = 'Hola';

console.log('\x1b[30m%s\x1b[0m', hola);

console.log('===================================================');

// < > == === ! != 

let uno = 25;
let dos = 30;

let resultado = uno < dos;

console.log('uno(25) es menor que dos(30): ' + resultado);

resultado = uno > dos;

console.log('uno(25) es mayor que dos(30): ' + resultado);

resultado = uno == dos;

console.log('uno(25) es igual que dos(30): ' + resultado);

resultado = uno === dos;

console.log('uno(25) es igual (tipo de dato) que dos(30): ' + resultado);

resultado = uno != dos;

console.log('uno(25) es distinto/desigual que dos(30): ' + resultado);

console.log('===================================================');

resultado = uno <= dos;

console.log('uno(25) es menor o igual que dos(30): ' + resultado);

//si es mayor a 18 años puede comprar bebidas: 19 20 

resultado = uno >= dos;

console.log('uno(25) es mayor o igual que dos(30): ' + resultado);

let mayorEdad = true;

console.log('El alumno no es mayor: ' + !mayorEdad);

console.log('===================================================');
console.log('Codicionales');
console.log('===================================================');

//estructura de un condicional
//if (condition igual a true) { se ejecuta el código dentro de las llaves}
//if (condition igual a false) { NO se ejecuta el código dentro de las llaves}

let edad = 18;

if (edad > 18) {
    console.log('1. El alumno es mayor de edad');    
}

if (edad >= 18){
    console.log('2. El estudiante puede comprar bebidas');
}

console.log('===================================================');

let pasaporte = false;

//if else : si o sino
if (pasaporte == true) {
    console.log('True: Puede viajar tranquilamente');
} else {
    console.log('False: Necesita el pasaporte para salir del país');
}

if (pasaporte) {
    console.log('True: Puede viajar tranquilamente');
} else {
    console.log('False: Necesita el pasaporte para salir del país');
}


console.log('===================================================');
console.log('Ejercicios con el DOM');
console.log('===================================================');

//los datos por el prompt por default vienen con el tipo string
//necesito convertirlos a tipo de dato numérico para operaciones matematícas
//parseInt() => convierte un dato a tipo número entero
//parseFloat() => convierte un dato a un tipo número decimal


let miNumero = parseFloat(prompt('Introduce un número: '));
console.log(`El número guardado es ${miNumero}`);

let otroNumero = parseFloat(prompt('Introduce otro número para la operación: '));
console.log(`El otro número es ${otroNumero}`);

resultado = miNumero + otroNumero;

// función que comenta que tipo de dato es la variable que evaluamos.
console.log(typeof resultado);

alert(`El resultado de la suma de tus números es ${resultado}`);



console.log('===================================================');

/* let dato = prompt('Un dato:')
let numeroDado = parseInt(dato) */

//ventana nativa de JS para introducir datos
//prompt('Hola, saludos desde el Prompt')

//let miEdad = prompt('Introduce tu edad: ');

//console.log(`la edad del cliente es: ${miEdad}`);

//alert(`La edad guardada es ${miEdad}`);
/*
if (miEdad >= 20) {
    alert(`Como tienes ${miEdad}, puedes viajar sin autorización de tus padres`)
} else {
    alert(`Como tienes ${miEdad}, necesitas autorización para salir del país`)
}
*/

console.log('===================================================');










