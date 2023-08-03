

console.log('=========================================');
console.log('======= Cargamos Productos - DOM ========');
console.log('=========================================');

let stockProductos = []

let miBoton = document.getElementById('miBoton');

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



const imprimirProductos = () => {

    console.log('Imprimiendo productos...');

    for (let i = 0; i < stockProductos.length; i++) {
        console.log(stockProductos[i]);
    }

}