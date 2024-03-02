//TODO Varibales
let numeroSecreto = generaNumero();

console.log(numeroSecreto);

//TODO Funciones 
//? Asignar valores a los elementos html desde el código JavaScript
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//? Función de intentos del usuario
function verificarIntento() {
    // Numero de tipo entero
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    return;
}

//? Generando un número aleatorio
function generaNumero(){
    // Genera un numero aleatorio y lo retorna
    return Math.floor(Math.random()*10)+1;
}

//TODO LLamada a las funciones
//? LLamando a la función reutilizable fuera de todo bloque de código
asignarTexto("h1", "DESCUBRE EL <br> NÚMERO SECRETO");
asignarTexto("p", "Bienvenido al juego del Número Secreto. ¿Tienes la habilidad para descubrir el número oculto? <br> Ingresa tu mejor suposición y descubre si eres el maestro de los números.");