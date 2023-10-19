const jwt = require('jsonwebtoken');
const claveSecreta = process.env.CLAVESECRETA;
/* 

Métodos de la librería jsonwebtoken
jwt.sign()

jwt.verify() 
*/

const generarToken= (nombre) =>{

    //1. dato para incluir en el token
    //2. clave secreta para firmar el token
    //3. duración del token
    const token = jwt.sign(
        {
            nombre: nombre
        }, 
        claveSecreta,
        {
            expiresIn: '1h'
        }
    );

    return token;

}


const authToken= (req, res, next) =>{

    //traemos el token del header
    const token = req.headers['x-auth-token'] || req.headers['authorization'];

    //verificamos si existe el token
    if(!token){
        return res.status(401).json({
            mensaje: 'No hay token, permiso no válido'
        });
    }

    try {

        const match = jwt.verify(token, claveSecreta);

        console.log(match);

        req.user = match;

        console.log(req.user);

        next();

    } catch (error) {
        return res.status(401).json({
            mensaje: 'Error en Verificación'
        });
    }

    
}

module.exports = {
    generarToken,
    authToken
}


