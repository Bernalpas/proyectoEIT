
//Creamos los controladores de mi App
//creamos funciones para respondera las rutas


function listarProductos(req, res) {

    res.send(`<h1>Te listamos los Producto</h1>`);

}


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

const actualizarProductos = (req,res) =>{
    
    let producto = req.params.id;

    console.log(`El id recibido es ${producto}`);
    
    res.send(`<h1>Producto Actualizado ${producto}</h1>`);

}

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



