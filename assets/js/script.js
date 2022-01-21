let divLetras = document.getElementById("divLetras");
let divNumeros = document.getElementById("divNumeros");

const botones = {
  aButton: document.getElementById("aButton"),
  bButton: document.getElementById("bButton"),
  cButton: document.getElementById("cButton"),
  dButton: document.getElementById("dButton"),
  eButton: document.getElementById("eButton"),
  fButton: document.getElementById("fButton"),
  gButton: document.getElementById("gButton"),
  hButton: document.getElementById("hButton"),
  iButton: document.getElementById("iButton"),
  jButton: document.getElementById("jButton"),
};

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


letras.forEach((letra)=> 
  
)

for (const boton in botones) {
  botones[boton].onclick = () => {
    if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] === undefined &&
      botones[boton].innerHTML[0] == "A"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "A" &&
      botones[boton].innerHTML[0] == "B"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "B" &&
      botones[boton].innerHTML[0] == "C"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "C" &&
      botones[boton].innerHTML[0] == "D"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if ( 
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "D" &&
      botones[boton].innerHTML[0] == "E"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "E" &&
      botones[boton].innerHTML[0] == "F"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "F" &&
      botones[boton].innerHTML[0] == "G"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "G" &&
      botones[boton].innerHTML[0] == "H"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "H" &&
      botones[boton].innerHTML[0] == "I"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "I" &&
      botones[boton].innerHTML[0] == "J"
    ) {
      divLetras.innerHTML += botones[boton].innerHTML[0];
    } else if (
      divLetras.innerHTML[divLetras.innerHTML.length - 1] == "J" &&
      botones[boton].innerHTML[4] == "1"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "1" &&
      botones[boton].innerHTML[4] == "2"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "2" &&
      botones[boton].innerHTML[4] == "3"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "3" &&
      botones[boton].innerHTML[4] == "4"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "4" &&
      botones[boton].innerHTML[4] == "5"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "5" &&
      botones[boton].innerHTML[4] == "6"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "6" &&
      botones[boton].innerHTML[4] == "7"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "7" &&
      botones[boton].innerHTML[4] == "8"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "8" &&
      botones[boton].innerHTML[4] == "9"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else if (
      divNumeros.innerHTML[divNumeros.innerHTML.length - 1] == "9" &&
      botones[boton].innerHTML[4] == "0"
    ) {
      divNumeros.innerHTML += botones[boton].innerHTML[4];
    } else {
      alert("Presione los botones en orden");
    }
  };
}
