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
    } else if (numeroUsuario < numeroSecreto) {
        asignarTexto("p", "El número secreto es menor al número que estoy pensando.");
        asignarImagen("imagen-robot", "/imgs/ilustraciones/4.png");
    } else {
        asignarTexto("p", "El número secreto es mayor al número que estoy pensando.");
        asignarImagen("imagen-robot", "/imgs/ilustraciones/5.png");
    }

    contadorIntentos++;

    return;
}

//? Generando un número aleatorio
function generaNumero() {
    // Genera un numero aleatorio y lo retorna
    return Math.floor(Math.random() * 10) + 1;
}

//TODO LLamada a las funciones
//? LLamando a la función reutilizable fuera de todo bloque de código
asignarTexto("h1", "DESCUBRE EL <br> NÚMERO SECRETO");
asignarTexto("p", "Bienvenido al juego del Número Secreto. ¿Tienes la habilidad para descubrir el número oculto? <br> Ingresa tu mejor suposición y descubre si eres el maestro de los números.");

asignarImagen("imagen-robot", "/imgs/ilustraciones/1.png");
