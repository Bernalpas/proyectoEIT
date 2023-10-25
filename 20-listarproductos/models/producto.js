const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.Mongo_Url_Local;


mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e));



const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    imagen: String,
    descripcion: String
});


const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;