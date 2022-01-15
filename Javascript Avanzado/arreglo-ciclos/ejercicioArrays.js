
/*  Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio. */

let veinteNumeros = [2, 10, 23, 45, 456, 231, 9642, 12, 9, 8, 11, 22, 543, 28, 51, 548, 903, 411, 21, 6789];

let suma = 0;

for (let i = 0; i < veinteNumeros.length; i++) {   
    suma += veinteNumeros[i];
}

let promedio = suma / veinteNumeros.length;

document.write(`La suma total equivale a ${suma} y el promedio es igual a ${promedio}`);