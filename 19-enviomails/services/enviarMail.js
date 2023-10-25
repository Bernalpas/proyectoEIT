
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();



const envioMail = async (nombre, email) => {

    console.log(`${nombre} - ${email}`);

    //1.Configurar un transportador: es la aplicación que se va a encargar de enviar el email
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USEREMAIL, //'pepe@gmail.com'
            pass: process.env.PASSEMAIL, //'123456'
        },
    });

    //2. Configurar el mail que vamos a enviar
    let emailData = await transporter.sendMail({
        from: process.env.USEREMAIL,
        to: email,
        subject: 'Bienvenido a la App',
        html: `<h1>Hola ${nombre}, te damos la bienvenida</h1> <br>
        Estamos contententos de tenerte con nosotros y esperamos que disfrutes de nuestra app <br>
        Estarás recibiendo todas las novedades en tu email: ${email} <br>
        <a href="https://loginmodulo-production.up.railway.app/" target="_blank">Visítanos</a> para conocer más sobre nosotros!`
    });

}


module.exports = envioMail;