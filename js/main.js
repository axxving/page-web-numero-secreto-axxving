let numeroSecreto = 0;
let contadorIntentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;
let juegoTerminado = false;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function asignarImagen(imagen, ilustracion) {
    let imagenElement = document.getElementById(imagen);
    imagenElement.src = ilustracion;
}

function verificarIntento() {
    if (juegoTerminado) {
        return;  // No permitir más intentos si el juego ha terminado
    }

    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroUsuario === numeroSecreto) {
        asignarTexto("h6", `Has adivinado el número secreto en ${contadorIntentos} ${(contadorIntentos === 1) ? "Intento" : "Intentos"} ¡Eres un maestro de los números!`);
        var modalFelicitaciones = new bootstrap.Modal(document.getElementById('modalFelicitaciones'));
        modalFelicitaciones.show();
        asignarImagen("imagen-robot", "/imgs/ilustraciones/8.png");
        document.getElementById("reiniciar").removeAttribute("disabled");

        juegoTerminado = true;  // Juego ha terminado
    } else if (numeroUsuario > numeroSecreto) {
        asignarTexto("p", "El número es menor.");
        asignarImagen("imagen-robot", "/imgs/ilustraciones/4.png");
    } else {
        asignarTexto("p", "El número es mayor.");
        asignarImagen("imagen-robot", "/imgs/ilustraciones/5.png");
    }

    contadorIntentos++;

    if (contadorIntentos === 3 && numeroUsuario !== numeroSecreto) {
        // Mostrar una imagen diferente en el tercer intento (si no ha adivinado)
        asignarImagen("imagen-robot", "/imgs/ilustraciones/5.png");
    }

    if (contadorIntentos === 4) {
        asignarTexto("p", "Ya se han agotado todos los intentos. ¡Game Over!");
        var modalGameOver = new bootstrap.Modal(document.getElementById('modalGameOver'));

        if (numeroUsuario !== numeroSecreto) {
            modalGameOver.show();
            asignarImagen("imagen-robot", "/imgs/ilustraciones/4.png");
        }

        document.getElementById("reiniciar").removeAttribute("disabled");

        juegoTerminado = true;  // Juego ha terminado
    }

    limpiarCaja();
}


function generaNumero() {
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeros.length === numeroMaximo) {
        asignarTexto("p", "Ya se sortearon todos los números posibles.");
    } else {
        if (listaNumeros.includes(numeroAleatorio)) {
            return generaNumero();
        } else {
            listaNumeros.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }

    return numeroAleatorio;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego() {
    limpiarCaja();
    estadosIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function estadosIniciales() {
    asignarTexto("h1", "DESCUBRE EL <br> NÚMERO SECRETO");
    asignarTexto("p", `Indica un número del 1 al ${numeroMaximo}.`);
    asignarImagen("imagen-robot", "/imgs/ilustraciones/1.png");
    numeroSecreto = generaNumero();
    contadorIntentos = 1;
    juegoTerminado = false;  // Reiniciar el juego
}


document.getElementById("valorUsuario").addEventListener("input", function () {
    validarInput();
});

function validarInput() {
    let inputUsuario = document.getElementById("valorUsuario");
    let valorIngresado = inputUsuario.value;

    if (!/^(10|[1-9])$/.test(valorIngresado)) {
        // Mostrar modal de advertencia
        mostrarModalAdvertencia();
        // Limpiar el valor del input
        inputUsuario.value = "";
    }
}

function mostrarModalAdvertencia() {
    var modalAdvertencia = new bootstrap.Modal(document.getElementById('modalAdvertencia'));
    modalAdvertencia.show();
}

estadosIniciales();

// Agrega la clase "loaded" al body cuando la página haya cargado completamente
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});