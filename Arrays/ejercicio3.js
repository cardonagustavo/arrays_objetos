var arreglo = ["zanahoria", "banano", "manzana", "pera", "cebolla", "papa", "fresas", "Ajo", "Sandía"];

for (var i = 0; i < arreglo.length; i++) {
  var elemento = arreglo[i];

  if (esFruta(elemento)) {
    console.log(elemento);
  }
}

function esFruta(elemento) {
  var frutas = ['banano', 'manzana', 'pera', 'fresas', 'Sandía'];
  return frutas.includes(elemento.toLowerCase());
}
