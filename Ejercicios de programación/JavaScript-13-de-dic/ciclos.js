//ciclos, bucles o loops

/*
while 

let condición = 1;    --> valor inicial, en el que queremos que comience
 nuestro ciclo

while(condición) {
    bloque de código
    modificación al valor inicial --> muy importante, sin ella el bucle 
    sería infinito, error de cilcado
}

Mientras la condición sea verdadera, el ciclo seguirá ejecutándose

*/

/* let condicion = 1;

while(condicion <= 10) { 
    console.log(condicion);
    //condicion = condicion + 1;
    condicion++; 
} */

//variable++  --> incrementar una unidad al valor de la variable --> variable + 1
//variable--  --> disminuir una unidad al valor de la variable --> variable - 1






/* let numero = 1;
numero++; //2
numero++; //3
numero++; //4
numero--; //3
numero--; //2
numero--; //1
console.log(numero); */

// Do while, imprimir todos los números del 1 al 10

//do while

/* let numero = 1;

do{
    console.log(numero);
    numero++;
}while(numero <= 10); */

/* La diferencia entre while y do while es que 
while primero evalua y despues actua y do while primero actúa y después 
evalúa  */

//for 

/* primero debe de tener una variable, despúes una condición a esta misma variable, 
y un incremento o decremento a la variable para que no sea infinito*/

/* for (let control = 1; control <= 10; control++) {
    console.log(control);
} */

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

