class Carro {
    constructor(marca, color, modelo, numeroPuertas, velocidad) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.numeroPuertas = numeroPuertas;
        this.velocidad = velocidad;
    }
    acelerar() {
        this.velocidad += 1;
    }
    frenar() {
        this.velocidad = 0;
    }
    reversa() {
        this.velocidad -= 1;
    }
    get toString() {
        const status = `El modelo de auto es ${this.modelo}, es de la marca ${this.marca}, el color es ${this.color} y el numero de puertas es ${this.numeroPuertas}, su velocidad es ${this.velocidad} <br>`
        return status;
    }
}
const miCarro = new Carro("Nissan", "Azul", "Sentra", 0, 4);
console.log(miCarro);

let mensaje = miCarro.toString;
document.write(mensaje)

miCarro.acelerar();
miCarro.acelerar();
miCarro.acelerar();
mensaje = miCarro.toString
document.write(mensaje);

miCarro.reversa();
mensaje = miCarro.toString
document.write(mensaje);

miCarro.frenar();
mensaje = miCarro.toString
document.write(mensaje);

