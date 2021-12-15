/*
Condicionales se utilizan para tomar decisiones dentro de nuestro 
programa
*/
/* 
if (condicion) {

} */

let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18 && edad < 30) {
    document.write("Eres un adulto joven");

} else if (edad >= 30 && edad <60) {
    document.write("Eres un adulto maduro");

} else if (edad >= 60) {
    document.write("eres adulto mayor");
    
} else {
    document.write("Estas morro");
}