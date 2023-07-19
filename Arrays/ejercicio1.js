/* Guarda en un Array  6 frutas y muestra en el navegador cuales están guardadas en las posiciones pares e impares.*/


var frutas = ["pera", "mandarina", "Banano", "naranja", "mango", "piña"];

for (var i = 0; i < frutas.length; i++) {
  if (i % 2 === 0) {
    console.log("Fruta en posición par:", frutas[i]);
  } else {
    console.log("Fruta en posición impar:", frutas[i]);
  }
}

