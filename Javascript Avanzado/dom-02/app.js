/* let $titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.textContent = "Titulo escrito desde JS";
 */

let $titulo = document.querySelector("#titulo");
$titulo.textContent = "Titulo escrito desde Java Script";

let $parrafo = document.querySelector("p");
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll("p");
console.log($parrafos[1].textContent);

let subtitulo = document.createElement("h3");
subtitulo.textContent = "Este es un subtitulo creado en JS";

$titulo.insertAdjacentElement("beforebegin",subtitulo);
$titulo.remove();

document.body.append(subtitulo); //agrega un elemento dentro del bodu al final.

let $contenido = document.querySelector("#contenido");

/* console.log($contenido.innerHTML = "<br>");
console.log($contenido.outerHTML = "Hola"); */

let contenidoParrafo = document.createElement("p");
contenidoParrafo.textContent = "Contenido de mi nuevo parrafo";
$contenido.appendChild(contenidoParrafo);

