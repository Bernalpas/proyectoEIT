
//responde a la ruta /user

import { Router } from 'express';
const router = Router();
import { check } from 'express-validator';
import { 
    userRegistro, 
    userLoginForm, 
    userCreate, 
    userLogin 
} from '../controllers/userControllers.js';

router.get('/', userRegistro);

router.get('/login', userLoginForm);

router.post(
    '/',
    [
        check('nombre').isLength({min: 4}),
        check('email').isEmail(),
        check('password').isLength({min: 8}),
    ],
    userCreate
);

router.post(
    '/login',
    [
        check('email').isEmail(),
        check('password').isLength({min: 8}),
    ],
    userLogin
);


export default router;

