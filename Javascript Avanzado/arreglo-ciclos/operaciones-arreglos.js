
let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

numeros.forEach(function (elemento) {
    document.write(elemento + ", ");
});
/* Aprender a usar foreach y funciones array */

/* map() 
Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

let numeros2 = numeros.map(function(elemento) {
    return elemento * 2;
}); 

document.write("<br>" + numeros2 + "<br>");

/* let frutas = ["mango", "uva", "piña"];
let frutas2 = frutas.map(function(elemento) {
    return elemento;
});

document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas2 + "<br>");

frutas2.push("pera");
document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas2 + "<br>"); */
/* Aprender y profundizar sobre lectura de carlos de los arrays */

/* includes()

El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda. Utiliza el algoritmo sameValueZero para determinar si se encuentra el elemento dado.
*/

document.write("<br>" + numeros.includes("hola") + "<br>");

/* filter()

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. */

let numerosPares = numeros.filter((elemento) => {
    if ( elemento % 2 == 0) {
        return true;
    }else {
        return false;
    }

    /* return elemento % 2 == 0; */
});

document.write("<br>" + numerosPares + "<br>");

let frutas = ["mango", + "uva", + "piña", + "mandarina", + "manzana", + "aguacate", + "sandía"];

let frutasFiltro = frutas.filter((fruta) => {
    /* if(fruta.includes("i") == true) {
        return true;
    } */
    return fruta.includes("m");
});

document.write("<br>" + frutasFiltro + "<br>");

/* some()
El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada. Si se aprueba, devuelve “true” de lo contrario “false”.
*/

/* sort()
El método sort() ordena los elementos de un array localmente y devuelve el array. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode. */

let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7];
document.write("<br>" + numeros.sort() + "<br>");

/* Reverse
Invierte el orden de los elementos de un arreglo
*/

document.write("<br>" + numeros.reverse() + "<br>");

/* find
Obtiene el primer elemento que cumple con una condición */

let frutaEncontrada = frutas.find((elemento) => {
    return elemento.includes("ma");
});

document.write("<br>" + frutaEncontrada + "<br>")