
//Ruta de Usuarios
//usuario/login
//usuario/home

const express = require('express');
const router = express.Router();


//Rutas
router.get('/home', (req, res)=>{
    res.send(`<h1>Bienvenido/a a la App Administrador/a</h1>`);
});

router.post('/login', (req,res)=>{
    
    console.log(req.body);
    
    let user = req.body.user;
    let password = req.body.password;
    
    console.log(`Recibimos tus Datos y son: ${user} - ${password}`);

    if(user == '' || password == ''){
        res.redirect('/error.html');
    }else if(user != 'admin' || password != '1234'){
        res.redirect('/error.html');
    }else{
        //res.redirect('/usuario/home');
        res.redirect('/productos.html');
    }

});


router.put('/update/:id', (req,res)=>{

    let usuario = req.params.id;

    console.log(`El id recibido es ${usuario}`);
    
    res.send(`<h1>Usuario Actualizado ${usuario}</h1>`);
})


router.delete('/delete/:id', (req,res)=>{

    let usuario = req.params.id;

    console.log(`El id recibido es ${usuario}`);

    res.send(`<h1>Usuario Eliminado ${usuario}</h1>`);
})

//exportamos el modulo router
module.exports = router;


//Database MongoDB

//Base de Datos: prueba
//Coleccion: carpeta
//usuarios

//documento en Mongo
/*
{
    "user": 'admin',
    "password": '1234'
},
{
    "user": 'admin',
    "password": '1234'
},
{
    "user": 'admin',
    "password": '1234'
},
{
    "user": 'admin',
    "password": '1234'
},
{
    "user": 'admin',
    "password": '1234'
}
{
    "user": 'admin',
    "password": '1234'
}
*/


