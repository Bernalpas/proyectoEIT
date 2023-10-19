const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const jwt = require('./jwt');

app.use(cors());
app.use(morgan('dev'));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a mi API'
    });
});

app.post('/login', (req, res) => {

    const nombre = req.body.nombre;

    const token = jwt.generarToken(nombre);

    console.log(token);

    res.header('x-auth-token', token).json({
        mensaje: 'Bienvenido a mi API',
        token: token
    });

});

app.get('/marvel', jwt.authToken ,(req, res) => {

    let user = req.user.nombre;

    res.json({
        mensaje: `Bienvenido ${user} a mi API`
    });


    jwt.authToken();
    
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});