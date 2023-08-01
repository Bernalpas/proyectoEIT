
console.log('===================================================');
console.log('Operadores Lógicos');
console.log('===================================================');

// Operador AND (&&)
//me exige que todos los valores dentro del condicional sean true

let userDataBase = 'juanPe'
let passwordDataBase = '12345'

let saldoTarjeta = 20000;
let producto = 2001;

let productoDos = 5000;

let contador = 0;
let totalCompras = 0;


//                true                     true                          true
if (userDataBase == 'juanPe' && passwordDataBase == '12345' && saldoTarjeta >= producto) {
    console.log('Produto comprado');
    contador++;
    totalCompras += producto;

    saldoTarjeta -= producto;

    console.log('=========================');

    console.log(`Tu saldo en la Tarjeta es de ${saldoTarjeta}`);


    /* contador++;
    totalCompras += productoDos; */

    console.log('=========================');

    console.log(`tenemos ${contador} producto/s vendido/s`);
    console.log(`Los ingresos con la venta son de ${totalCompras} pesos`);

}else{
    console.log('1. Clave incorrecta');
    console.log('2. Sin saldo en en la tarjeta');
    console.log('3. El DNI no coincide con el usuario de la tarjeta');
}

console.log('=========================');
console.log('=========================');
console.log('=========================');


// Operador OR (||)
// con que uno de los datos evaluados sea true, es suficiente

//              false                       false                           true
if (userDataBase == 'pepe' || passwordDataBase == '9999999' || saldoTarjeta >= producto) {
    console.log('Produto comprado en el O lógico');
    contador++;
    totalCompras += producto;

    saldoTarjeta -= producto;

    console.log('=========================');

    console.log(`Tu saldo en la Tarjeta es de ${saldoTarjeta}`);


    /* contador++;
    totalCompras += productoDos; */

    console.log('==================================================');

    console.log(`tenemos ${contador} producto/s vendido/s`);
    console.log(`Los ingresos con la venta son de ${totalCompras} pesos`);

}else{
    console.log('1. Clave incorrecta');
    console.log('2. Sin saldo en en la tarjeta');
    console.log('3. El DNI no coincide con el usuario de la tarjeta');
}


//Login
//&& => confirmamos el user con el password / facial


//Login con alguna herramienta de JS
let administrador = 'admin@gmail.com';
let password = '12345@P'

let user = prompt('Ingrese su mail: ');
let userPass = prompt('Ingrese su password: ');

console.log(user);
console.log(userPass);
console.log('==============');
console.log(administrador);
console.log(password);

//          true                      false
if (user == administrador || password == userPass) {
    alert('Bienvenido Administrador al Sistema')

}else{
    alert('Usuario o contraseña incorrecta')
}


//          true                     true
if (user == administrador && password == userPass) {
    alert('Bienvenido Administrador al Sistema')

}else{
    alert('Usuario o contraseña incorrecta')
}

console.log('=================================================');

//Arreglos - arrays - vectores
let peras = 'peras';
let manzanas = 'manzanas';
let bananas = 'bananas';

let aluPepe = 'Pepe';//700 va









