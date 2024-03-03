//TODO Varibales
//? Número secreto
let numeroSecreto = 0;

//? Contador de intentos
let contadorIntentos = 0;

//? Lista de números
let listaNumeros = [];

//? Número maximo
let numeroMaximo = 10;

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
    } else if (numeroUsuario > numeroSecreto) {
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
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroAleatorio);
    console.log(listaNumeros);

    // Si ya sorteamos todos los numeros
    if (listaNumeros.length === numeroMaximo) {
        asignarTexto("p", "Ya se sortearon todos los números posibles.");
    } else {
        // Si el número genera esta incluido en la lista 
        if (listaNumeros.includes(numeroAleatorio)) {
            return generaNumero();
        } else {
            listaNumeros.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }



    return numeroAleatorio;
}

//? Limpiar caja
function limpiarCaja() {
    // Selecciona el elemento con ese ID
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

//? Reiniciar juego
function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();

    // Generar nuevo numero aleatorio
    // Inicializar el numero de intentos
    // Indicar mensaje de intervalo de numeros
    estadosIniciales();

    // Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

//? Estados iniciales
function estadosIniciales() {
    //? Cambia el contenido del h1 del HTML
    asignarTexto("h1", "DESCUBRE EL <br> NÚMERO SECRETO");

    //? Cambia el contenido de la etiqueta p del HTML
    asignarTexto("p", `Inidica un número del 1 al ${numeroMaximo}.`);

    //? Cambia la imagen del HTML
    asignarImagen("imagen-robot", "/imgs/ilustraciones/1.png");

    //? Generar nuevo numero aleatorio
    numeroSecreto = generaNumero();

    //? Inicializar el numero de intentos
    contadorIntentos = 1;
}



//TODO LLamada a las funciones
estadosIniciales();
