/* Arreglos */

/* Hay dos opciones para declarar arreglos

const numeros = [5, 6, 7];
let numeros = new Array(1, 3, 4);

*/

let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

/* document.write(numeros); */

for (let i = 0; i < numeros.length; i++) {
    document.write(`${numeros[i]}<br/>`);
}