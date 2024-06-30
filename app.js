let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 100;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {  
    asignarTextoElemento("p", `¡Felicidades! ¡Has adivinado el número secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");

  } else {
    // El usuario no ha acerto
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es mayor");
    } else {
      asignarTextoElemento("p", "El número secreto es menor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);

  if (listaNumeroSorteados.length === numeroMaximo) {
    return asignarTextoElemento("p", "Se han agotado los intentos. Reinicia el juego");
  }

  if (listaNumeroSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();

  }else{
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado(); 
 }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar nuevo numero secreto
    //Inicilizar en numero de intentos
    condicionesIniciales();
    //Desactivar boton reiniciar
    document.querySelector("#reiniciar").setAttribute("disabled", "true");


  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  asignarTextoElemento("p", "Indica un numero del 1 al 100");
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  limpiarCaja();
}

condicionesIniciales();


let lenguajesDeProgramacion = ['JavaScritp, Ruby, Golang'];
lenguajesDeProgramacion.push('Python', 'Java', 'Kotlin', 'C#');