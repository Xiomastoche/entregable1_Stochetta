// Simulador de plazo fijo a 30 dias, 60 dias o 90 dias

let ingreso = false;

function ingresar () {
    const usuario = 'Xiomara';
    const constraseña = '759153';
    let usuarioIngresado = prompt ('Ingrese su usuario');
    let contraseñaIngresada = prompt ('Ingrese su contraseña');
    if ((usuarioIngresado === usuario) && (contraseñaIngresada === constraseña)) {
        alert ('Bienvenido ' + usuario);
        ingreso = true;
        return true;
    }else {
        alert ('Usuario o Contraseña incorrectos. Vuelva a cargar la pagina.');
    }
}

ingresar ();

const plazoFijo1 = 0.08;
const plazoFijo2 = 0.16;
const plazoFijo3 = 0.25;

function inicializar () {
   if (ingreso){
    let deposito = Number (prompt ('Ingresá cuanto queres invertir:'));
    let dias = prompt ('A cuántos días? (responda el numero correspondiente): \n 1- 30 días \n 2- 60 días \n 3- 90 días');
    switch (dias){
        case '1':
            let total1 = (deposito * plazoFijo1 ) + deposito;
            alert ('Al final del plazo fijo, recibís $' + total1);
            break;
        case '2':
            let total2 = (deposito * plazoFijo2 ) + deposito;
            alert ('Al final del plazo fijo, recibís $'  + total2);
            break;
        case '3':
            let total3 = (deposito * plazoFijo2 ) + deposito;
            alert ('Al final del plazo fijo, recibís $' + total3);
        break;
        default:
            alert ('ERROR. Intoduzca un número válido');
        break;
    }    
   } else { 
        let loop = true;
   }
}

inicializar ();



    
