/* 
Las funciones nos sirven para escribir bloques de código que se puede
reutilizar
*/


/*
palabra reservada, seguida de nombre de la funcion,
seguida de parentesis, seguda de llaves
funcion sumar*/

/* function sumar () {
    let numero1 = 10;
    let numero2 = 20;
    let suma = numero1 + numero2;
    document.write("<h1>"+ suma + "</h1>");
}

sumar(); */

function sumar (numero1, numero2) {

    let suma = numero1 + numero2;
    document.write("<h1>"+ suma + "</h1>");
}

sumar(2, 3);
sumar(4, 5);
sumar(10, 20);
sumar(30, 5);

/* let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write("<h1>"+ suma + "</h1>");

let numero3 = 23;
let numero4 = 2132;
let suma2 = numero3 + numero4;
document.write("<h1>"+ suma2 + "</h1>"); */