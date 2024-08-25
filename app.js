const inputField = document.getElementById('user-input');
const dynamicImage = document.getElementById('dynamicImage');

inputField.addEventListener('input', function() {
  const inputLength = inputField.value.length;
  dynamicImage.style.transform = `rotate(${inputLength * 10}deg)`;
  asignarTextoElemento('p','Escribiendo...');
});

function encriptarTexto() {
  let texto = document.getElementById("user-input").value;
  
  if (texto.trim() === "") {
    alert("Por favor, ingrese algún texto antes de continuar.");
    return; 
  }


  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  let resultado = procesarTexto(texto, desplazamiento);
  document.getElementById("resultado").innerText = resultado;
  limpiarCaja();
  asignarTextoElemento('p','Encriptado');
}

function desencriptarTexto() {
  let texto = document.getElementById("user-input").value;
  if (texto.trim() === "") {
    alert("Por favor, ingrese algún texto antes de continuar.");
    return; 
  }
  
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  let resultado = procesarTexto(texto, -desplazamiento);
  document.getElementById("resultado").innerText = resultado;
  limpiarCaja();
  asignarTextoElemento('p','Desencriptado');
}

function limpiarCaja() {
 
  inputField.value = "";
  dynamicImage.style.transform = 'rotate(0deg)'; 
 
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}


function procesarTexto(texto, desplazamiento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];

      if (caracter >= 'A' && caracter <= 'Z') {
          let indice = caracter.charCodeAt(0) - 'A'.charCodeAt(0);
          let nuevaLetra = String.fromCharCode((indice + desplazamiento + 26) % 26 + 'A'.charCodeAt(0));
          resultado += nuevaLetra;
      } else if (caracter >= 'a' && caracter <= 'z') {
          let indice = caracter.charCodeAt(0) - 'a'.charCodeAt(0);
          let nuevaLetra = String.fromCharCode((indice + desplazamiento + 26) % 26 + 'a'.charCodeAt(0));
          resultado += nuevaLetra;
      } else if (caracter >= '0' && caracter <= '9') {
          let nuevoNumero = (parseInt(caracter) + desplazamiento) % 10;
          if (nuevoNumero < 0) {
              nuevoNumero += 10;
          }
          resultado += nuevoNumero;
      } else {
          resultado += caracter; 
      }
  }

  return resultado;
}