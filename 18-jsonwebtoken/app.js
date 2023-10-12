const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(morgan('dev'));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});