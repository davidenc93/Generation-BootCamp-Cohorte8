/*

Operadores aritméticos 

+ Sirve para sumar o concatenar
- sirve para restar 
* sirve para multiplicar
% sirve para obtener el residuo de una divición 
/ división

*/

const numero1 = parseInt(prompt("ingresa el valor de un número."));
const numero2 = parseInt(prompt("ingresa el valor de un número."));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log("Numero 1: " + numero1);
console.log("Numero 2: " + numero2);
console.log("suma: " + suma);
console.log("resta: " + resta);
console.log("multiplicacion: " + multiplicacion);
console.log("division: " + division);

console.log(5 % 3);  // Es muy utilizado para saber si un número es par o impar

/*
Operadores lógicos

&&  AND
||  OR 
! NOT

1 (TRUE && TRUE) TRUE
2 (FALSE && TRUE) FALSE 
3 (TRUE && FALSE) FALSE
4 (FALSE && FALSE) FALSE
5 (TRUE || TRUE) TRUE
6 (TRUE || FALSE) TRUE
7 (FALSE || TRUE) TRUE
8 (FALSE || FALSE) FALSE
9 !(FALSE || TRUE) FALSE
10 !(FALSE && TRUE) TRUE
11 (!FALSE && TRUE) TRUE
12 (!TRUE && TRUE) FALSE
13 (!FALSE || FALSE) TRUE

*/
