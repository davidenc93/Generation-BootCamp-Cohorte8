
/* 
Crea una función que calcule el descuento que se le va a hacer a 
un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un 
descuento del 10%. (0-99)

Si es una compra de 100 hasta menos de 200 se le hará un 
descuento del 20%.(100 - 199)

y si es una compra de más de 200 se le hará un descuento 
del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir 
el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)

*/

function calcularDescuento() {

    let valorCompra = parseInt(prompt("Ingresa el valor de tu compra"));

    if (valorCompra < 100){
        //se le hace un descuento al cliente del 10%
        let descuento = .10;
        let cantidadAPagar = valorCompra * descuento;
        let total = "La tu total es de $" + valorCompra + "pesos pero te ofrecemos un descuento del 10% por lo que tu total con descuento quedaria en $"
        + cantidadAPagar + "pesos, gracias por tu compra.";
        return total;
        
    }
    else if (valorCompra >= 100 && valorCompra < 200){
        //se le hace un descuento del 20%
        let descuento = .20;
        let cantidadAPagar = valorCompra * descuento;
        let total = "La tu total es de $" + valorCompra + "pesos pero te ofrecemos un descuento del 20% por lo que tu total con descuento quedaria en $"
        + cantidadAPagar + "pesos, gracias por tu compra.";
        return total;
    }
    else{
        //se le hace un descuento de 30%
        let descuento = .30;
        let cantidadAPagar = valorCompra * descuento;
        let total = "La tu total es de $" + valorCompra + "pesos pero te ofrecemos un descuento del 30% por lo que tu total con descuento quedaria en $"
        + cantidadAPagar + "pesos, gracias por tu compra.";
        return total;
    }

  
}