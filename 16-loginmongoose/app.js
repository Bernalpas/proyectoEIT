//ES5 = commonjs => 
/* const express = require('express'); */

//Con una extensión convertimos en ES5 a ES6 
//ES6 = module => configurar el package.js para el module
//import express from 'express';

const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const hbs = require('hbs');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración de handlebars
//1. Seteamos el motor de plantillas
app.set('view engine', 'hbs');

//2. Seteamos la ruta de las plantillas
app.set('views', path.join(__dirname, '/views'));

//3. Seteamos la ruta de los parciales
hbs.registerPartials(path.join(__dirname, '/views/partials'));


app.get('/', (req, res) => {
    res.render('index');
});


module.exports = app;
