const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

//Levantamos la conexión a la base de datos
require('./database/conexion');

//Levantamos el servidor
const server = app.listen(PORT, (err) => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.log(`Server error: ${err}`);
});