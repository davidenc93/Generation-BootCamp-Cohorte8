let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span");

$btnMensaje.addEventListener("click", function () {
    console.log("NO ME PRESIONES PORFA");
});

$mensaje.addEventListener("keydown", (e) => {
    console.log(e.target.value);
    /* console.log(e); */
});

if(e.target.value.length < 3) {
    $spanError.classList.remove("hide");
    $spanError.classList.add("error");
} else {
    $spanError.classList.add("hide");
    $spanError.classList.remove("error");
}