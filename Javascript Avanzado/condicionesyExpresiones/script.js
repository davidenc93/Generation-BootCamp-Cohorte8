/* Operadores Aritméticos */

// + - / * % ()

let operation = 3 * 5 + (10 - 5);
console.log(operation);

let operation2 = 3 - 5 / 2 * 4;
console.log(operation2);

 /* Operadores relacionales */
// <. >, <=, >=, ==, ===, !=, !==
//boolean true false

console.log(7 < 7); //No estamos incluyendo el numero a comparar
console.log(7 <= 7); // incluyendo el numero a comparar

console.log(7 == "7"); //compara el valor
console.log(7 === "7"); //compara el valor y tipo de dato

console.log(7 != "7"); //compara el valor
console.log(7 !== "7"); //compara el valor y tipo de dato

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 5; // incremento = incremento + 5;
console.log(incremento); //10

incremento -= 5;
console.log(incremento); // 5

incremento *= 5;
console.log(incremento); // 25

incremento /= 5;
console.log(incremento); // 5

 /* Operador uniario */
// ++, --
// Sumar uno, restar uno

let sumar = 0;
console.log(sumar + "linea 45");
sumar++;
console.log(sumar + "linea 47");
sumar++;
console.log(sumar + "linea 49");
sumar--;
sumar--;
sumar--;
console.log(sumar); //-1

for(let i = 0; i < 10; i++) {
    /* codigo */
}

let num = 5;
console.log(num++); //5
console.log(++num); //6