
//Ruta de productos
//producto/insert
//producto/mostrar
//producto/actualizar
//producto/eliminar

const express = require('express');
const router = express.Router();

//middleware
const  { admin } = require('../middelwares/admin');

// importamos la lógica de la app desde los controladores
const {
    listarProductos,
    agregarProductos,
    actualizarProductos,
    eliminarProductos
} = require('../controllers/productController.js');

//Rutas
router.get('/mostrar', listarProductos );

router.post('/insert', agregarProductos);

router.put('/update/:id', actualizarProductos)

router.delete('/delete/:id', eliminarProductos )

//exportamos el modulo router
module.exports = router;