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
//R: búsqueda de TODOS los datos
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
    res.render('error');
  }

})


//R: Búsqueda por ID del producto
app.get('/mostrarproducto/:_id', async (req, res) => {

  const id = req.params._id;

  console.log(id);

  try {

    const productoBuscado = await Producto.findById(id);

    console.log(productoBuscado);
    
    return res.render('detalleproduc', {
      id,
      productoBuscado
    })
  
  } catch (error) {
    console.log(error);
  }

});


//D: Borrar un Producto por el ID
app.post('/eliminar/:_id', async (req, res) => {

  const id = req.params._id;

  console.log(id);

  try {

    const productoEliminado = await Producto.findByIdAndDelete(id);

    console.log(productoEliminado);
    
    return res.render('eliminado', {
      productoEliminado
    })
  
  } catch (error) {
    console.log(error);
  }

});

//R: Búsqueda del Producto para Actualizar por ID
app.post('/actualizar/:_id', async (req, res) => {

  const id = req.params._id;

  console.log(id);

  try {

    const productoParaActualizar = await Producto.findById(id);

    console.log(productoParaActualizar);
    
    return res.render('actualizarproducto', {
      productoParaActualizar,
      id
    })
  
  } catch (error) {
    console.log(error);
  }

});

app.post('/actualizarProducto/:_id', async (req, res) => {

  /* const { nombre, precio, stock, imagen, descripcion } = req.body; */

  const id = req.params._id;

  console.log(`el id para actualizar es: ${id}`);
  
  try {
    
    const dato = req.body
    
    console.log(dato);

    const producto = await Producto.findById(id);

    console.log(producto);

    const actualizar = await Producto.findByIdAndUpdate(id, dato, {new: true});

    console.log(actualizar)
    
    return res.render('actualizado', { 
      actualizar
    });
    
  } catch (error) {
    console.log(error);
    res.render('error')
  } 

});


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
