

console.log('====================================');
console.log('======== Métodos en JS ===========');
console.log('====================================');

let titulo = document.getElementById('titulo');

//imprimimos el contenido del elemnto html
console.log(titulo.innerHTML);// Formulario de Productos

//cambiamos el contenido del elemnto html
titulo.innerHTML = 'Datos para Stock de Productos';
console.log(titulo.innerHTML);// Datos para Stock de Productos


titulo.innerText = 'Productos para consumo Familiar'
console.log(titulo.innerText);// Productos para consumo Familiar

let producto = {
        id: 1,
        nombre: 'Producto 1',
        precio: 25.99,
        img: 'https://picsum.photos/200/300',
        stock: 10,
        categoria: 'Electrónicos',
    }


let misProductos = [
    {
        id: 1,
        nombre: 'Producto 1',
        precio: 25.99,
        img: 'https://picsum.photos/200/300',
        stock: 10,
        categoria: 'Electrónicos',
    },
    {
        id: 2,
        nombre: 'Producto 2',
        precio: 19.95,
        img: 'https://picsum.photos/200/300',
        stock: 5,
        categoria: 'Ropa',
    },
    {
        id: 3,
        nombre: 'Producto 3',
        precio: 8.50,
        img: 'https://picsum.photos/200/300',
        stock: 15,
        categoria: 'Hogar',
    },
    // Puedes agregar más productos aquí
];

for (let index = 0; index < misProductos.length; index++) {
    titulo.innerHTML += `
        <h2 style="color: red">${misProductos[index].nombre}</h2>
        <figure>
        <img src=${misProductos[index].img} alt="Imagen de prueba">
        </figure>
        <p>Precio: ${misProductos[index].precio}</p>
        `;
}

//utilizo el don y los métodos de js para darle estilos a mi elemento obtenido por id
titulo.style.display = 'flex'

miBoton = document.getElementById('miBoton');
miBoton.style.display = 'none';


//creamos un elemnto html desde js
let parrafo = document.createElement('p')
console.log(parrafo);

parrafo.innerText = 'Este es un párrafo creado desde JS'
//parrafo.style.color = 'blue';//dando estilos a ni elemento creado


console.log(parrafo);

let parrafo2 = document.getElementById('parrafo');
parrafo2.innerHTML = parrafo.innerText;
//parrafo.style.color = 'red'

console.log('=========================================');

let enlaces = document.getElementsByTagName('a');
console.log(enlaces);

console.log(enlaces[4]);
console.log(enlaces[4].href);

console.log('=========================================');

enlaces[4].removeAttribute('href')

console.log(`El enlace nuevo es: ${enlaces[4].href}`);