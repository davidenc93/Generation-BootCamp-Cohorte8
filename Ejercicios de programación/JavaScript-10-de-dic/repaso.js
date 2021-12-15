
/*
condicionales
if(condicion){
    Bloque de código
} else if(condición){
    Bloque de código
} else {
    Bloque de código
}
*/

/* 
Función
Bloque de código reutilizable:

function nombre (parametros) {
    return
}

nombre(argumentos);

*/

function procesadorDeFrutas(manzana, naranjas) {
    let jugo = "Jugo de " + manzana + " manzanas y " 
    + naranjas + " naranjas.";
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0,5);
console.log(jugoDeNaranja);

