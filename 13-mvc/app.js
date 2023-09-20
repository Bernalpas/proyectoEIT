const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

//importamos las rutas como un middelware
const userRoutes = require('./routes/userRoutes.js');
const productRouter = require('./routes/productRoutes.js');
/*
app.use(cors({
    origin: '*',
    origin: 'https://miweb.com'
}));
*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuario', userRoutes);
app.use('/producto', productRouter);

app.get('/', (req, res)=>{
    res.sendFile('index.html')
});

app.listen(PORT, (err) => {
    if(err) { throw err }
    console.log(`Server running on port http://localhost:${PORT}`);
});



