
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

    });

});