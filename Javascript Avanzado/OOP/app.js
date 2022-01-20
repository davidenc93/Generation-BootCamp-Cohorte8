// Clases, molde que nos permite crear objetos.

class Animal {
    nombre = null;
    especie = null;
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`;
        return mensaje;
    }
    
}

const Animal1 = new Animal("Scooby", "Perro"); // creamos un objeto
console.log(Animal1);

const Animal2 = new Animal ("Pecas", "Gato");
console.log(Animal2);

const Aminal3 = new Animal();
console.log(Aminal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Oddie"
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre("Oddie");


/* function constructor () {

} */

