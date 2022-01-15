let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String ("Adiós"); // Objeto String
console.log(cadena2);

/* let arreglo = new Array();
console.log(arreglo); */

console.log(cadena2.toLowerCase().includes("a")); //includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase()); // convierte a minusculas o mayusculas
console.log(cadena2.toUpperCase());

//cohersión y conversión

//cohersión - JavaScript convierte en automático un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Función que recibe una palabra y la regresa invertida */

let palabra = "Hola Mundo";
let arreglo = palabra.split(""); // sirve para seccionar un strin y convertir cada seccion en un elemento de un arrray
/* console.log(arreglo);

console.log(arreglo.reverse().join(""));

let arregloInvertido = arreglo.reverse();
console.log(arregloInvertido);  // .reverse nos permite invertir el orden de un array */


function invertirPalabra(cadena) {
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");
    return document.write(cadenaInvertida);
}

invertirPalabra("Generation");

/* 
let cadena = prompt("Ingresa una palabra");

function invertirPalabra() {
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");
    return document.write(cadenaInvertida);
}

invertirPalabra(); */

//Ejercicio realizado en clase en la que se mete un dato mediante prompt y ese dato es almacenado en una variable, la cual el resultado será impreso en el documento.