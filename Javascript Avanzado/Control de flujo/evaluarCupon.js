
/* 

Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
 */

let precio = parseInt(prompt("introduce el precio total de tu compra"));
let cuponDescuento = prompt("introduce tu cupón");
let descuento;
let totaldesc;
let total;
let final;

switch(cuponDescuento) {
    case "Bronce":
        descuento = 0.05;
        /* totaldesc = precio * descuento;
        total = precio - totaldesc;
        console.log(`El precio original es de ${precio} total con descuento es de ${total}`); */
    break;
    case "Plata":
        descuento = 0.1;
        /* totaldesc = precio * descuento;
        total = precio - totaldesc;
        console.log(`El precio original es de ${precio} total con descuento es de ${total}`); */
    break;
    case "Oro":
        descuento = 0.2;
        /* totaldesc = precio * descuento;
        total = precio - totaldesc;
        console.log(`El precio original es de ${precio} total con descuento es de ${total}`); */
    break;
    case "Platino":
        descuento = 0.25;
        /* totaldesc = precio * descuento;
        total = precio - totaldesc;
        console.log(`El precio original es de ${precio} total con descuento es de ${total}`); */
    break;
    default:
        console.log("El cupon es erróneo");
    break;
}

function resultado (precio, descuento) {
    totaldesc = precio * descuento;
    total = precio - totaldesc;
    final = (`El precio original es de ${precio} total con descuento es de ${total}`);
    return final;
}

console.log(resultado)

//Se creó una función para evitar repetir código en cada case