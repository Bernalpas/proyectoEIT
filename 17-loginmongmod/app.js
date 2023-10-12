
import express from 'express';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import hbs from 'hbs';
const app = express();
import userRouter from './routers/userRouter.js';

const __dirname = path.resolve();
const __filename = path.resolve();

console.log(__dirname);
console.log(__filename);

app.use(cors());
app.use(morgan('dev'));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

//Rutas
app.use('/user', userRouter);

//Configuración de handlebars
//1. Seteamos el motor de plantillas
app.set('view engine', 'hbs');

//2. Seteamos la ruta de las plantillas
app.set('views', path.join(__dirname, '/views'));

//3. Seteamos la ruta de los parciales
hbs.registerPartials(path.join(__dirname, '/views/partials'));

const hola = 'Hola mundo';

app.get('/', (req, res) => {
    res.render('index');
});

//sólo puede existir un export default por archivo
export default app;
