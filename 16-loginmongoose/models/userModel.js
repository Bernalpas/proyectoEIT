
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//Creamos la estructura de la colección usuarios
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

//Exportamos la consfiguración o estructura de la colección usuarios
module.exports = mongoose.model('usuario', userSchema);

//db.usuarios.insertOne({nombre: "Pepe", email: "pepe@pepe", password: "1234", timestamp: 3/10/2023 21:00})