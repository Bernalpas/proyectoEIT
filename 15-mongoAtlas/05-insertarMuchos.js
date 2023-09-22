
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
MongoClient.connect(Mongo_Url_Atlas, async (err, db) => { // use miwebeit

    //si hay un error lanzamos el error
    if (err) throw err;

    //configurar la database a la que nos conectamos
    const miwebeit = db.db('miwebeit');

    //seleccionamos una colección
    const estudiantes = 'estudiantes'

    //creamos un objeto con los datos a insertar
    let insertarDato = [
        {
            nombre: 'Pepe',
            edad: 25,
            email: 'juan@gmail.com',
            password: '1234'
        },
        {
            nombre: 'Juan',
            edad: 25,
            email: 'juan@gmail.com',
            password: '1234'
        },
        {
            nombre: 'María',
            edad: 25,
            email: 'juan@gmail.com',
            password: '1234'
        },
        {
            nombre: 'Antonio',
            edad: 25,
            email: 'juan@gmail.com',
            password: '1234'
        },
        {
            nombre: 'Analía',
            edad: 25,
            email: 'juan@gmail.com',
            password: '1234'
        }
    ];

    //Create: insertamos un dato en la colección

    //db.estudiantes.insertOne(insertarDato);
    await miwebeit.collection(estudiantes).insertMany(insertarDato, (err, res) => {

        if (err) throw err;

        //si no hay error mostramos un mensaje de creación exitosa
        console.log(`Insertamos ${res.insertedCount} datos!!!`);

        //cerrar la conexión a la base de datos
        db.close();

    });

});