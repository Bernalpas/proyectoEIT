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
        
        console.log('==================================');
        
        const usuariologin = await User.findOne({ email });
        
        console.log(`1. ${usuariologin}`);
        
        console.log(`2. Usuario: ${usuariologin.email}`);
        
        console.log(`3. Usuario: ${User}`);

        console.log(`4. ${usuariologin}`);

        console.log(`5. ${!usuariologin}`);
        

        //Corregir data de login

        if(usuariologin){
            
            const match = bcrypt.compareSync(password, usuariologin.password);
            
            console.log(`6. Usuario: ${match}`);

            if(match){

                return res.json({
                    data: 'Bienvenido al sistema'
                });

            }else{

                return res.render('registro');

            }

        }
        
    } catch (error) {

        return res.json({
            data: 'Errores en la base de datos'
        });

    }

}

module.exports = {
    userRegistro,
    userLoginForm,
    userCreate,
    userLogin
}