/* Un flujo es el orden en que se van ejecutando las instrucciones que vamos escribiendo

Por lo regular va de arriba a abajo.
*/

let miVariable = 10;
console.log(miVariable);

/* Estructuras de control de flujo */

let edad = 9;
let tienesINE = false;

if(edad>=18 || tienesINE == true){
    document.write("Puedes entrar");
}/* else {
    document.write("No puedes entrar");
} */


/* Operador ternario */

/*
(Condición a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;
*/

let edad1 = 54;

/* (edad1 >= 18) ? document.write("Mayor de edad") : document.write("Menor de edad"); */

/* Otra forma de hacerlo guardandolo en una variable */

let pregunta = (edad1 >= 18) 
    ? "Mayor de edad"
    : "Menor de edad";
document.write(pregunta);

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? "Mayor" : "Menor"} de edad` 
document.write(preguntaEdad); // tambien se puede meter dentro de otro código

/* 
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sábado - 6
*/

/* let dia = 10; */

/* if(dia ===0) { 
    document.write("Domingo");
} else if(dia ===1) { 
    document.write("Lunes");
} else if(dia ===2) { 
    document.write("Martes");
} else if(dia ===3) { 
    document.write("Miercoles");
} else if(dia ===4) { 
    document.write("Jueves");
} else if(dia ===5) { 
    document.write("Viernes");
} else if(dia ===6) { 
    document.write("Sábado");
} else { 
    document.write("No existe ese día");
}  */

// Switch - case

/* 
switch(variable a evaluar) { 
    case valor:
        codigo a ejecutar
    break;
    case valor:
        codigo a ejecutar
    break;
    default:
        codigo a ejecutar si ninguna de las anteriores jalan
    break;
}
*/
let dia = 5;

switch (dia) {
    case 0:
        document.write("Domingo");
    break;

    case 1:
        document.write("Lunes");
    break;

    case 2:
        document.write("Martes");
    break;

    case 3:
        document.write("Miercoles");
    break;

    case 4:
        document.write("Jueves");
    break;

    case 5:
        document.write("Viernes");
    break;

    case 6:
        document.write("Sábado");
    break;
    
    default:
        document.write("No es un valor válido");
    break;
}

let cuponDescuento = "RAMA";
let descuento;

switch(cuponDescuento) {
    case "Bronce":
        descuento = 5;
    break;
    case "Plata":
        descuento = 10;
    break;
    case "Oro":
        descuento = 15;
    break;
    default:
        console.log("El cupon es erróneo");
    break;
}

console.log(`Como eres un miembro nivel ${cuponDescuento}, tu descuento equivale al ${descuento}%`);







