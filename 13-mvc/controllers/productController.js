
//Creamos los controladores de mi App
//creamos funciones para respondera las rutas

//CRUD de Productos

//1. Create (Crear / INSERT)
const agregarProductos = (req,res) =>{

    console.log(req.body);
    
    let nombre = req.body.nombre;
    let stock = req.body.stock;
    
    console.log(`Recibimos los Productos y son: ${nombre} - ${stock}`);

    res.status(200).json({
        ok: true,
        message: 'Producto Insertado Correctamente',
        nombre: nombre,
        stock: stock
    });

}


//2. Read (Leer / FIND)
function listarProductos(req, res) {

    res.send(`<h1>Te listamos los Producto</h1>`);

}


//3. Update (Actualizar / UPDATE)
const actualizarProductos = (req,res) =>{
    
    let producto = req.params.id;

    console.log(`El id recibido es ${producto}`);
    
    res.send(`<h1>Producto Actualizado ${producto}</h1>`);

}


//4. Delete (Eliminar / DELETE)
const eliminarProductos = (req,res) =>{

    let producto = req.params.id;

    console.log(`El id recibido es ${producto}`);

    res.send(`<h1>Producto Eliminado ${producto}</h1>`);

}

module.exports = {
    listarProductos,
    agregarProductos,
    actualizarProductos,
    eliminarProductos
}



