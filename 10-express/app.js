//JS en ES5: common.js
// 1. Creamos una variable para tomar los códigos de express
const express = require('express');

// importamos la librería de dotenv
const dotenv = require('dotenv');
dotenv.config();

// 2. Crear una variable para ejecutar todas la funcionalidades de express
const app = express();

//3. Utilizamos las funcionalidades de express
// parámetros: url/ruta y la función que responde a la solicitud
app.get('/', function(peticion, respuesta) {
    //console.log(peticion);
    console.log('================');
    console.log(peticion.url);
    console.log('================');
    console.log(peticion.method);
    console.log('================');
    respuesta.send(`<h1>Respondemos a nuestra Petición en en HOME con Express</h1>`)
});

// Creamos una ruta que responda con el formulario
app.get('/formulario', (req, res)=>{
    console.log(req.url);
    console.log('================');
    console.log(req.method);
    console.log('================');
    res.send(`
    <form action="">
        <div class="mb-3">
            <label for="user" class="form-label">User</label>
            <input type="text" class="form-control" id="user" placeholder="Usuario">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
        </div>
        <div class="text-center m-4">
            <button onclick="login()" type="button" class="btn btn-success w-50">Login</button>
        </div>
        <div class="text-center m-4">
            <button type="reset" class="btn btn-danger w-50">Borrar Datos</button>
        </div>
    </form>
`)
});

// 4. Creamos un puerto para la escucha de la aplicación
const PORT01 = 9000 ?? 3000;

// otra forma de asignar valor al puerto
const PORT02 = 9000 || 3000;

// otra forma de asignar valor al puerto
const PORT = process.env.PORT || 9000

// ponemos a la escucha nuestro servidor - funciona
/* 
app.listen(PORT, function(){
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})
*/

app.listen(PORT, (err) => {

    // si el servidor tiene un error, nos lazaría el error para verlo
    if(err) { throw err}

    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);

    console.log('================');

    //imprimir variables de entorno
    console.log(process.env);
    console.log(process.env.PORT);

    console.log('================');

    console.log(__dirname);
    console.log(__filename);
});

//JS en ES6: module

