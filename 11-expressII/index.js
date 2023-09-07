//Puertos por Defecto
//3000: React
//4200: Angular
//8080: Tomcat - Apache -Java
//9000: Java - Spring Boot
//3306: SQL - MySQL
//27017: NoSQL - MongoDB
//5173: Vite
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { html } = require('./inicio');
const PORT = process.env.PORT || 8080;
const app = express();

//importamos un módulo nativo de Node FS
//const fs = require('fs');
const fs = require('node:fs');

//HTTP
//CRUD: Create - Read - Update - Delete
//ABM
app.get('/pedidos',(req, res) =>{
    //res.send();
    //res.json();
    //res.redirect(vista);
    //res.end();
    //res.render(pedidos.hbs - motores de plantillas);
    //res.sendFile('index.html);

    console.log('Están pidiendo algo');

    res.status('404').send(`
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
`);

});//endpoint


app.get('/json', (req, res)=>{
    console.log('Enviamos una respuesta tipo JSON');

    res.json({
        Respuesta: 'Esto es una respuesta en formato JSON'
    });
});


app.get('/end', (req, res)=>{

    console.log('Enviamos una respuesta JS');
    res.end(html);

});


app.get('/leer', (req, res)=>{

    console.log('leemos un archivo con FS - Node Nativo(File System)');

    //leemos un archivo con FS - Node Nativo(File System)
    const data = fs.readFileSync('./inicio.html', 'utf-8');
    console.log(data);
    
    console.log('==========================================');

    //lectura de datos sincrónicos
    const otroDato = fs.readFileSync('./texto.txt', 'utf-8');
    console.log(otroDato);

    console.log('==========================================');

    //lectura de datos asincrónicos
    const lecturaAsinc = fs.readFile('./controllers/asynsc.txt', 'utf-8', (err, data)=>{
        if(err) {console.log(err);}

        console.log(data);
    });


    res.send(data);
    //res.send(otroDato);
    //res.send();
    //res.download('./texto.txt');

});


// Ejemplos de rutas para los endpoints

app.get('/api/usuarios/admin')
app.post('/api/usuarios/admin');
app.delete('/api/usuarios/admin/:id');
app.put('/api/usuarios/:id');


app.get('/api/productos/admin')
app.post('/api/productos/admin');
app.delete('/api/productos/admin/:id');
app.put('/api/productos/:id');

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost${PORT}`	);
});




