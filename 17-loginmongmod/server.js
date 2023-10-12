
//cuando importo archivos es obligatorio poner la extensión .js
import miapp from './app.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

//Levantamos la conexión a la base de datos
import './database/conexion.js';

//Levantamos el servidor
const server = miapp.listen(PORT, (err) => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.log(`Server error: ${err}`);
});