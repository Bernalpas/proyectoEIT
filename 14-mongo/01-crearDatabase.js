
/*
- iniciar un proyecto con node
- instalar mongodb
- la base de datos en mongo no se registra hasta que tenga una colección
- una colleción es como una carpeta para guardar los documentos
- los documentos son los datos que se guardan en la base de dato
*/

const dotenv = require('dotenv');
dotenv.config();


//importamos el módulo de cliento de mongo para la conexión
const MongoClient = require('mongodb').MongoClient;

//creamos una url o path para la conexión local
const mongoUrlLocal = process.env.MONGO_URL_LOCAL;

//crear una url o path para la conexión remota
const mongoUrlAtlas = process.env.MONGO_URL_ATLAS;

//usamos el método de conexión de mongo client
MongoClient.connect(mongoUrlAtlas, (err, db) =>{ // use miwebeit

    //si hay un error lanzamos el error
    if(err) throw err;

    //si no hay error mostramos un mensaje de creación exitosa
    console.log(`Cración de la Database exitosa!!!`);

    //cerrar la conexión a la base de datos
    db.close();

});