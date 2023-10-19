const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const hbs = require('hbs');
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const envioMail = require('./services/enviarMail');
const PORT = process.env.PORT || 3000;
const user = process.env.USEREMAIL;
const pass = process.env.PASSEMAIL;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

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

app.post('/email', (req, res) => {

    const { nombre, email, password } = req.body;

    //función asincrona para que Google me autorice a enviar el email
  /*   const envioMail = async () => {

        //1.Configurar un transportador: es la aplicación que se va a encargar de enviar el email
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.USEREMAIL, //'pepe@gmail.com'
                pass: process.env.PASSEMAIL, //'123456'
            },
        });

        //2. Configurar el mail que vamos a enviar
        let emailData = await transporter.sendMail({
            from: user, //process.env.USEREMAIL
            to: email,
            subject: 'Bienvenido a la App',
            html: `<h1>Hola ${nombre}, te damos la bienvenida</h1> <br>
            Estamos contententos de tenerte con nosotros y esperamos que disfrutes de nuestra app <br>
            Estarás recibiendo todas las novedades en tu email: ${email} <br>`
        });

    } */

    //3. Invocamos a la función
    envioMail(nombre, email)
    .then(res => console.log('Email enviado'))
    .catch(err => console.log(err));

    res.render('mailenviado');



});


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});