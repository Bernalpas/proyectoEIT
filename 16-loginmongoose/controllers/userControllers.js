
const { validationResult } = require('express-validator');

const userRegistro = (req, res) => {
    res.render('registro');
}

const userCreate = (req, res) => {

    const errores = validationResult(req)

    //console.log(errores);

    const { nombre, email, password } = req.body

    if (!errores.isEmpty()) {
        return res.json({
            data: 'Errores en los datos'
        });
    }

    console.log(req.body);

    res.json({
        nombre,
        email,
        password
    })
};

module.exports = {
    userRegistro,
    userCreate
}