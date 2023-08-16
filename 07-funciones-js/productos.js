

console.log('=========================================');
console.log('======= Cargamos Productos - DOM ========');
console.log('=========================================');

let stockProductos = []

let miBoton = document.getElementById('miBoton');

let botonBuscar = document.getElementById('buscar').value;
console.log(botonBuscar);

function buscarProducto() {

    console.log('Buscando producto...');

    let productoBuscado = document.getElementById('buscar').value;
    console.log(productoBuscado);

    console.log('=========================================');

    for (let i = 0; i < stockProductos.length; i++) {
        const element = stockProductos[i];
        if (element == productoBuscado) {
            return alert(`Encontramos el Producto buscado: ${productoBuscado}`)
        } else {
            return alert(`No Encontramos el Producto buscado: ${productoBuscado}`)
        }
    }
    



} 


const cargarProductos = () => {

    console.log('Cargando productos...');

    //1. Obtenemos los datos desde el DOM
    let productoCargado = document.getElementById('producto').value;
    let precioCargado = document.getElementById('precio').value;

    //2. Creamos un objeto para guardar los datos
    let producto = {
        nombre: productoCargado,
        precio: precioCargado
    }

    //3. Imprimimos de ejemplo el producto obtenido
    console.log(producto);

    //4. Agregamos el producto al array de productos
    stockProductos.push(producto);

    miBoton.style.display = 'revert';


}

let otraCarga = document.getElementById('otraCarga');

otraCarga.addEventListener('click', (e) => {

    e.preventDefault();

    console.log('Cargando productos...');

    //1. Obtenemos los datos desde el DOM
    let productoCargado = document.getElementById('producto').value;
    let precioCargado = document.getElementById('precio').value;

    //2. Creamos un objeto para guardar los datos
    let producto = {
        nombre: productoCargado,
        precio: precioCargado
    }

    //3. Imprimimos de ejemplo el producto obtenido
    console.log(producto);

    if(productoCargado == '' && precioCargado == ''){
        alert('Debe completar los campos');
    }else{
        //4. Agregamos el producto al array de productos
        stockProductos.push(producto);

        let productosString = JSON.stringify(stockProductos)

        localStorage.setItem('Productos', productosString);

        cargarTabla();
    }

    miBoton.style.display = 'revert';

});


const imprimirProductos = () => {

    console.log('Imprimiendo productos...');

    for (let i = 0; i < stockProductos.length; i++) {
        console.log(stockProductos[i]);
    }

}


//obtener el elemento para agregarle el evento
let miBotonImprimir = document.getElementById('botonImprimir');

//una de las formas para activar el evento
//miBotonImprimir.addEventListener('click', imprimirProductos);

//evento con una función anónima
miBotonImprimir.addEventListener('click', function () {
    console.log('Soy una función anónima');
});


let edad = 18
let socio = true

//if ternario:     condición          verdadero                     falso
let puedeViajar = (edad >= 18) ? console.log('Puede Viajar') : console.log('No puede Viajar')


let ingreso = socio ? 'Puede Ingresar' : 'No puede Ingresar'
console.log(ingreso);


/* 
if(edad > 18){
    console.log('verdadero');
}else{
    console.log('falso');
} 
*/


miBotonImprimir.addEventListener('click', () => console.log('Soy una función anónima'));

//evento con un arrow función
miBotonImprimir.addEventListener('click', (event) => {//index => i

    console.log(event);

    event.preventDefault();//evitar que sejecute la función por defecto del evento
    
    console.log('Soy una función flecha');

    console.log('Imprimiendo productos...');

    for (let i = 0; i < stockProductos.length; i++) {
        console.log(stockProductos[i]);
    }

    cargarTabla();

});


const cargarTabla = () =>{

    let miTabla = document.getElementById('miTabla');

    miTabla.innerHTML = '';
    //creamos el row, la fila
    let fila = document.createElement('tr');

    //creamos las celdas o los td
    let celdaNombre = document.createElement('td');
    let celdaPrecio = document.createElement('td');

    for (let i = 0; i < stockProductos.length; i++) {
        
        //agregamos datos a la primer td
        celdaNombre.innerText = stockProductos[i].nombre;
        console.log(celdaNombre);

        //agregamos el segundo dato al td
        celdaPrecio.innerText = stockProductos[i].precio;
        console.log(celdaPrecio);

        //subimos la celda a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        miTabla.appendChild(fila);
        
    }

    let pieDeTabla = document.getElementById('pieDeTabla');

    pieDeTabla.innerText = 'Total de Productos: ' + stockProductos.length;



}




