/* Funcion 
    Es un bloque de código reutilizable.
    Puede tener o no parámetros de entrada.
    Puede devolver o no un valor
 */

function sumar(numero1, numero2) {
    // Operaciones o código a ejecutar
    return numero1 + numero2;
    console.log("Hola desde la funcion") // Este código no se va a ejecutar, porque la funcion solo se ejecuta hasta el return.
}

function restar (numero1, numero2) {
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`)
}


let numero1 = parseInt(prompt("Numero 1"));    
let numero2 = parseInt(prompt("Numero 2")); // Son para pedir al usiario que ingrese un dato que será almacenado en esta misma variable.
let sumaNumeros = sumar(numero1, numero2);


document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);
// Es importante poner comillas dobles para activar js dentro de un string ``

restar(numero1, numero2);


