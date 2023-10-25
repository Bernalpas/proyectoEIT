const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs  = require('hbs');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
require('./models/producto');
const Producto = require('./models/producto');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//no lo vamos a usar para el ejercicio
app.use('/', indexRouter);
app.use('/users', usersRouter);


//Ejercicio clase 24/10/2023
app.get('/cargarproductos', (req, res) => {
  res.render('cargarproductos');
});

app.get('/mostrarproductos', async (req, res) => {

  try {

    const verproductos = await Producto.find({});

    console.log(verproductos);

    return res.render('verproductos', {
      productos: verproductos
    });

/*     return res.json({
      productos: verproductos
    }); */
    
  } catch (error) {
    console.log(error);
  }

})

app.post('/cargarproductos', async (req, res) => {

  const { nombre, precio, stock, imagen, descripcion } = req.body;

  const producto = {
    nombre: nombre,
    precio: precio,
    stock: stock,
    imagen: imagen,
    descripcion: descripcion
  }

  console.log(producto);

  try {

    const datoProducto = new Producto(producto);

    await datoProducto.save();
    
    return res.render('cargarproductos');
    
  } catch (error) {
    console.log(error);
  }

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
