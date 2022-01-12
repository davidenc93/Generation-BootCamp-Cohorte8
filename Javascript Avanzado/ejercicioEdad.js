/* 1. Almacenar el año actual en una variable. Pedirle al usuario su edad y calcular su edad. */

let year = 2022;
let resta = document.getElementById("edad");

function calcular() {
    let edad = prompt("Introduzca su año de nacimiento")
    resta.textContent = year - edad;
}
