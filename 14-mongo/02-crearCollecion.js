

const dotenv = require('dotenv');
dotenv.config();

//importamos el módulo de cliento de mongo para la conexión
const MongoClient = require('mongodb').MongoClient;

//creamos una url o path para la conexión local
const mongoUrlLocal = process.env.MONGO_URL_LOCAL;

//crear una url o path para la conexión remota
const mongoUrlAtlas = process.env.MONGO_URL_ATLAS;

//creación de una colleción en local
//usamos el método de conexión de mongo client
MongoClient.connect(mongoUrlLocal, (err, db) =>{ // use miwebeit

    //si hay un error lanzamos el error
    if(err) throw err;
    
    //configurar la database a la que nos conectamos
    const miwebeit = db.db('miwebeit');

    //crear una colección
    const estudiantes = 'estudiantes'

    miwebeit.createCollection(estudiantes, (err, collection) => {

        if(err) throw err;
        
        //si no hay error mostramos un mensaje de creación exitosa
        console.log(`Cración de la Colección ${estudiantes} exitosa!!!`);

        //cerrar la conexión a la base de datos
        db.close();
    });

});