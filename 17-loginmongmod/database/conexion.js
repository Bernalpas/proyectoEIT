

import mongoose from 'mongoose';
import dotenv from 'dotenv';
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

export default conexion; 

//db.usuarios.find({});
//db.usuarios.insertOne({nombre: "Pepe"});
//db
//miwebeit
