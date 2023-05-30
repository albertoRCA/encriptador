function procesar() {
  var texto = document.getElementById("text").value;
  var opcion = document.getElementById("option").value;
  var resultado = "";

  if (opcion === "encriptar") {
    resultado = encriptar(texto);
  } else if (opcion === "desencriptar") {
    resultado = desencriptar(texto);
  }

  document.getElementById("result").value = resultado;
}

function encriptar(texto) {
  var encriptado = "";
  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    switch (letra) {
      case "e":
        encriptado += "enter";
        break;
      case "i":
        encriptado += "imes";
        break;
      case "a":
        encriptado += "ai";
        break;
      case "o":
        encriptado += "ober";
        break;
      case "u":
        encriptado += "ufat";
        break;
      default:
        encriptado += letra;
    }
  }
  return encriptado;
}

function desencriptar(texto) {
    var desencriptado = "";
    var i = 0;
    while (i < texto.length) {
      var letra = texto.substr(i, 1);
      if (letra === "e" && texto.substr(i + 1, 4) === "nter") {
        desencriptado += "e";
        i += 5; // Avanzar 5 caracteres en lugar de 4
      } else if (letra === "i" && texto.substr(i + 1, 3) === "mes") {
        desencriptado += "i";
        i += 4; // Avanzar 4 caracteres en lugar de 3
      } else if (letra === "a" && texto.substr(i + 1, 1) === "i") {
        desencriptado += "a";
        i += 2; // Avanzar 2 caracteres en lugar de 1
      } else if (letra === "o" && texto.substr(i + 1, 3) === "ber") {
        desencriptado += "o";
        i += 4; // Avanzar 4 caracteres en lugar de 3
      } else if (letra === "u" && texto.substr(i + 1, 3) === "fat") {
        desencriptado += "u";
        i += 4; // Avanzar 5 caracteres en lugar de 4
      } else {
        desencriptado += letra;
        i++;
      }
    }
    return desencriptado;
  }