
//ES5 = versión 5 de JS: const admin = function(req, res, next) { ... }

//ES6 = versión 6 de JS: const admin = (req, res, next) => { ... }

const admin = (req, res, next) => {

    
    console.log('Middleware de admin en un archivo diferente');
    next();
}

module.exports = {
    admin
}
