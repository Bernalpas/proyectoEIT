

console.log('=========================================');
console.log('======= Login - DOM ========');
console.log('=========================================');

/* 
let user = document.getElementById('user').value;
let password = document.getElementById('password').value;

console.log(user);
console.log(password);

if (user == 'admin' && password == '1234') {
    alert('Bienvenido Administrador');
}else {
    alert('Usuario o contraseña incorrectos');
} */

function login() {

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    console.log(user);
    console.log(password);


    //1. Validar que los campos no esten vacios


    //2. Validar si el usuario o la contraseña estan vacios


    //3. Validar que el usuario y la contraseña sean correctos


    localStorage.setItem('Usuario', user);
    localStorage.setItem('Password', password);

    if (user == 'admin' && password == '1234') {
        alert('Bienvenido Administrador');
    }else {
    alert('Usuario o contraseña incorrectos');
    }

    //4. Redireccionar a la pagina de admin o error
}

//login();

