const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt'); 
const User = require('../models/userModel');


const userRegistro = (req, res) => {
    res.render('registro');
}

const userLoginForm = (req, res) => {
    res.render('login');
}

const userCreate = async (req, res) => {

    //1. Validación de datos recibidos
    const errores = validationResult(req)

    //console.log(errores);

    const { nombre, email, password } = req.body
    
    console.log(`1. Email: ${email}`);

    if (!errores.isEmpty()) {
        return res.json({
            data: 'Errores en los datos'
        });
    }

    //2. Buscar si el email no se repite
    try {

        let usuario = await User.findOne({ email });

        console.log(`2. Usuario: ${usuario} - ${email}`);

        if(usuario){
            return res.json({
                data: 'El Email ya existe'
            });
        }

    //3. Encriptar la contraseña
        usuario = new User(req.body);

        const salt = bcrypt.genSaltSync();
        console.log(`3. Sal: ${salt}`);

        console.log(`4. Usuario: ${usuario}`);

        usuario.password = bcrypt.hashSync(password, salt);

        console.log(`5. Usuario: ${usuario.password}`);

    //4. guardamos los datos en la database
        await usuario.save();

        return res.render('login');
        
    } catch (error) {
        return res.json({
            data: 'Errores en la base de datos'
        });
    }

};

const userLogin = async (req, res) => {

    const { email, password} = req.body;

    //1. Validación de datos recibidos
    const errores = validationResult(req)

    console.log(`A. Email: ${ email }`);

    
    if (!errores.isEmpty()) {
        return res.json({
            data: 'Errores en los datos'
        });
    }
    
    try {
        
        const usuario = await User.findOne({ email: email });

        console.log(`B. Usuario: ${usuario}`);

        if(!usuario){
            return res.render('registro', {
                data: 'El Email no existe'
            });
        }

        const macht = bcrypt.compareSync(password, usuario.password);

        if(macht){
            return res.json({
                data: 'Login correcto'
            });
        }
    
    } catch (error) {

        return res.json({
            mensaje: 'Solucinando data.....'
        });

    }

}

module.exports = {
    userRegistro,
    userLoginForm,
    userCreate,
    userLogin
}