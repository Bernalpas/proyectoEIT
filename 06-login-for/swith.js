

let dia = 'miércoles'


if(dia == 'lunes'){
    console.log('No tenemos clases');
} else if(dia == 'martes') {
    console.log('Si tenemos clases');
}else {
    console.log('No es lunes');
}

console.log('=========================================');


switch(dia) {
    case 'lunes':
        console.log('No tenemos clases');
    case 'martes':
        console.log('Si tenemos clases');
        break;
    case 'miércoles':
        console.log('No tenemos clases');
    case 'jueves':
        console.log('Si tenemos clases');
    case 'viernes':
        console.log('No tenemos clases');
    case 'sábado':
        console.log('Si tenemos clases');
    case 'domingo':
        console.log('No tenemos clases');
}