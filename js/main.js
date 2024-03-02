//TODO Varibales
//? Número secreto
let numeroSecreto = generaNumero();

//? Contador de intentos
let contadorIntentos = 1;

console.log(numeroSecreto);

//TODO Funciones 
//? Asignar valores a los elementos html desde el código JavaScript
function asignarTexto(elemento, texto) {
    // Selecciona el elemento
    let elementoHTML = document.querySelector(elemento);
    // Inserta el contenido al elemento
    elementoHTML.innerHTML = texto;
    return;
}

//? Asignar imagen al HTML desde el código
function asignarImagen(imagen, ilustracion) {
    // Obtén la referencia del elemento de imagen por su ID o clase, dependiendo de tu HTML
    let imagenElement = document.getElementById(imagen);
    // Cambia la fuente de la imagen
    imagenElement.src = ilustracion;
}

//? Función de intentos del usuario
function verificarIntento() {
    // Numero de tipo entero
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(contadorIntentos);
    // Condicion de intento
    if (numeroUsuario === numeroSecreto) {
        // Muestra el modal de felicitaciones
        asignarTexto("h6", `Has adivinado el número secreto en ${contadorIntentos} ${(contadorIntentos === 1) ? "Intento" : "Intentos"} ¡Eres un maestro de los números!`);
        var modalFelicitaciones = new bootstrap.Modal(document.getElementById('modalFelicitaciones'));
        modalFelicitaciones.show();
        asignarImagen("imagen-robot", "/imgs/ilustraciones/8.png");

        // Habilitacion del boton para reiniciar
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (numeroUsuario < numeroSecreto) {
        // Muestra ayuda
        asignarTexto("p", "El número secreto es menor al número que estoy pensando.");
        // Cambia la imagen 
        asignarImagen("imagen-robot", "/imgs/ilustraciones/4.png");
    } else {
        // Muestra ayuda
        asignarTexto("p", "El número secreto es mayor al número que estoy pensando.");
        // Cambia la imagen 
        asignarImagen("imagen-robot", "/imgs/ilustraciones/5.png");
    }
    // Contador de intentos se incrementa en 1
    contadorIntentos++;

    limpiarCaja();

    return;
}

//? Generando un número aleatorio
function generaNumero() {
    // Genera un numero aleatorio y lo retorna
    return Math.floor(Math.random() * 10) + 1;
}

//? Limpiar caja
function limpiarCaja(){
    // Selecciona el elemento con ese ID
    let valorCaja = document.querySelector("#valorUsuario").value = "";
    
}

//TODO LLamada a las funciones
//? Cambia el contenido del h1 del HTML
asignarTexto("h1", "DESCUBRE EL <br> NÚMERO SECRETO");

//? Cambia el contenido de la etiqueta p del HTML
asignarTexto("p", "Bienvenido al juego del Número Secreto. ¿Tienes la habilidad para descubrir el número oculto? <br> Ingresa tu mejor suposición y descubre si eres el maestro de los números.");

//? Cambia la imagen del HTML
asignarImagen("imagen-robot", "/imgs/ilustraciones/1.png");
