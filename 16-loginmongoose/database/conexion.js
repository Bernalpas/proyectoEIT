

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MongoLocal = process.env.Mongo_Url_Local;
const MongoAtlas = process.env.Mongo_Url_Atlas;


const conexion = mongoose.connect(MongoLocal).then(
    () => { 
        console.log('Conectado a la base de datos');
    },
    err => { 
        console.log(`No tenemos conexión por ${err.message}`);
    }
);

module.exports = conexion; 

//db.usuarios.find({});
//db.usuarios.insertOne({nombre: "Pepe"});
//db
//miwebeit
