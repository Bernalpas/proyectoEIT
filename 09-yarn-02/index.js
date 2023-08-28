

//1. Crear una variable para utilizar el módulo nativo de NOde HTTP
const http = require('http');



//2. Creamos un servidor nativo y la podemo guardar en una variable
//const server = http.createServer(function(req, res){});
const server = http.createServer((request, response) =>{
    console.log('================');
    
    //console.log(request);

    console.log('================');

    console.log(request.url);


    if(request.url == '/'){
        response.end(`<h1>Pepe Responde</h1>`)
        console.log('Vino una petición desde la ruta HOME');
    }else if(request.url == '/formulario'){
        response.end(`<h1>Formulario de Contacto</h1> 
        <br>
        <form>
        <input type="text" placeholder="Nombre">
        <input type="button" value="Enviar Datos">
        </form>`)
        console.log('Vino una petición desde la ruta FORMULAIO');
    }else{
        response.end(`<h1 style="color: red">No reconocemos es path</h1>`)
    }
    
    console.log('================');

    console.log(request.method);

    console.log('================');
    console.log(`Servidor trabajando....`);
    console.log('================');




});


//3. Creamos un puerto para que el servidor escuche las peticiones
PORT = 9000;


server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://locahost:${PORT}`);
});