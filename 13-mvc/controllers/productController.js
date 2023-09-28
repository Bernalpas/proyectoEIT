const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

//creamos una url o path para la conexión local
const Mongo_Url_Local = process.env.Mongo_Url_Local;

const Mongo_Url_Atlas = process.env.Mongo_Url_Atlas;
//Creamos los controladores de mi App
//creamos funciones para respondera las rutas

//CRUD de Productos


//1. Create (Crear / INSERT)
const agregarProductos = (req,res) =>{

    console.log(req.body);
    
    let nombre = req.body.nombre;
    let stock = req.body.stock;
    
    console.log(`Recibimos los Productos y son: ${nombre} - ${stock}`);

    //todo lo de la data

    MongoClient.connect(Mongo_Url_Local, async (err, db) =>{ // use miwebeit

        //si hay un error lanzamos el error
        if(err) throw err;
        
        //configurar la database a la que nos conectamos
        const miwebeit = db.db('miwebeit');
    
        //seleccionamos una colección
        const estudiantes = 'estudiantes'
    
        //creamos un objeto con los datos a insertar
        let insertarDato = {
            nombre: nombre,
            stock: stock
        }
    
        //Create: insertamos un dato en la colección
    
        //db.estudiantes.insertOne(insertarDato);
        await miwebeit.collection(estudiantes).insertOne(insertarDato, (err, res) =>{
    
            if(err) throw err;
            
            //si no hay error mostramos un mensaje de creación exitosa
            console.log(`Insertamos un dato!!!`);
        
            //cerrar la conexión a la base de datos
            db.close();
    
        });
    
    });

    res.status(200).json({
        ok: true,
        message: 'Producto Insertado Correctamente',
        nombre: nombre,
        stock: stock
    });

}


//2. Read (Leer / FIND)
function listarProductos(req, res) {

    //res.send(`<h1>Te listamos los Producto</h1>`);

        
    const dotenv = require('dotenv');
    dotenv.config();

    //importamos el módulo de cliento de mongo para la conexión
    const MongoClient = require('mongodb').MongoClient;

    //creamos una url o path para la conexión local
    const Mongo_Url_Local = process.env.Mongo_Url_Local;

    //crear una url o path para la conexión remota
    

    //creación de una colleción en local
    //usamos el método de conexión de mongo client
    MongoClient.connect(Mongo_Url_Local, async (err, db) =>{ // use miwebeit

        //si hay un error lanzamos el error
        if(err) throw err;
        
        //configurar la database a la que nos conectamos
        const miwebeit = db.db('miwebeit');

        //seleccionamos una colección
        const estudiantes = 'estudiantes'

        //Read: leemos datos de la colección

        //db.estudiantes.insertOne(insertarDato);
        await miwebeit.collection(estudiantes).find({}).toArray((err, result) =>{

            if(err) throw err;

            //convertir el resultado en un string - sólo prueba
            let datos = JSON.stringify(result);
            
            //si no hay error mostramos un mensaje de creación exitosa
            console.log(`Encontramos los datos: ${datos}`);
        
            //cerrar la conexión a la base de datos
            db.close();

            res.status(200).json({
                datos: datos
            });

        });

    });

}


//3. Update (Actualizar / UPDATE)
const actualizarProductos = (req,res) =>{
    
    let id = req.params.id;
    let nombre = req.body.nombre;
    let edad = req.body.edad;
    let email = req.body.email;
    let password= req.body.password;

    let idData = { _id: new ObjectId(id)}

    console.log(req.body);

    console.log(`El id recibido es ${idData}`);
    
    
    //Actiualización de datos con mongodb
    MongoClient.connect(Mongo_Url_Local, async (err, db) =>{ // use miwebeit
        
        //si hay un error lanzamos el error
        if(err) throw err;
        
        //configurar la database a la que nos conectamos
        const miwebeit = db.db('miwebeit');
        
        //seleccionamos una colección
        const estudiantes = 'estudiantes'
        
        //Read: leemos datos de la colección
        
        //db.estudiantes.find();
        let buscado = {
            nombre: "Antonio"
        }
        
        let actualizado = {
            $set: {
                nombre: nombre,
                edad: edad,
                email: email,
                password: password
            }
        }
        
        //db.estudiantes.insertOne(insertarDato);
        await miwebeit.collection(estudiantes).updateOne(idData, actualizado, (err, result) =>{
            
            if(err) throw err;

            console.log(idData);

            console.log(actualizado);

            console.log(result);
            
            //si no hay error mostramos un mensaje de creación exitosa
            console.log(`Actualizamos un dato`);
            
            //cerrar la conexión a la base de datos
            db.close();
            
            res.send(`<h1>Producto Actualizado ${id}</h1>`);
        });
    
    });

}


//4. Delete (Eliminar / DELETE)
const eliminarProductos = (req,res) =>{

    let producto = req.params.id;

    console.log(`El id recibido es ${producto}`);

    MongoClient.connect(Mongo_Url_Atlas, async (err, db) =>{ // use miwebeit

        //si hay un error lanzamos el error
        if(err) throw err;
        
        //configurar la database a la que nos conectamos
        const miwebeit = db.db('miwebeit');
    
        //seleccionamos una colección
        const estudiantes = 'estudiantes'
    
        //Read: leemos datos de la colección
    
        //db.estudiantes.find();
        let buscado = {
            nombre: 'Analía'
        }
    
        //db.estudiantes.insertOne(insertarDato);
        await miwebeit.collection(estudiantes).deleteOne(buscado, (err, result) =>{
    
            if(err) throw err;
            
            //si no hay error mostramos un mensaje de creación exitosa
            console.log(`Hemos eliminado ${result.deletedCount} dato/s`);
        
            //cerrar la conexión a la base de datos
            db.close();
    
        });
    
    });

    res.send(`<h1>Producto Eliminado ${producto}</h1>`);

}

module.exports = {
    listarProductos,
    agregarProductos,
    actualizarProductos,
    eliminarProductos
}



