
//responde a la ruta /user

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
    userRegistro,
    userCreate,

} = require('../controllers/userControllers')

router.get('/', userRegistro);

router.post(
    '/',
    [
        check('nombre').isLength({min: 4}),
        check('email').isEmail(),
        check('password').isLength({min: 8}),
    ],
    userCreate
);


module.exports = router;

