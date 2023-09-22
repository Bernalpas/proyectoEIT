
const dotenv = require('dotenv');
dotenv.config();

//importamos el módulo de cliento de mongo para la conexión
const MongoClient = require('mongodb').MongoClient;

//creamos una url o path para la conexión local
const Mongo_Url_Local = process.env.Mongo_Url_Local;

//crear una url o path para la conexión remota
const Mongo_Url_Atlas = process.env.Mongo_Url_Atlas;

//creación de una colleción en local
//usamos el método de conexión de mongo client
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
        nombre: 'Juan'
    }

    //db.estudiantes.insertOne(insertarDato);
    await miwebeit.collection(estudiantes).findOne(buscado, (err, result) =>{

        if(err) throw err;
        
        //si no hay error mostramos un mensaje de creación exitosa
        console.log(`Encontramos el dato: ${result._id} - ${result.nombre} - ${result.edad} - ${result.email} - ${result.password}`);
    
        //cerrar la conexión a la base de datos
        db.close();

    });

});