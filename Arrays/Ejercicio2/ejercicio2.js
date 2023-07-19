

var numeros = [];

var formulario = document.getElementById("numero2"),
    numeroInput = document.getElementById("numero-in"),
    calcularBtn = document.getElementById("calcular-btn"),
    calcularMayor = document.getElementById("mayor"),
    calcularMenor = document.getElementById("menor"),
    calcularPromedio = document.getElementById("promedio");



calcularBtn.addEventListener("click", function () {
    var mayor = Math.max.apply(null, numeros);
    var menor = Math.min.apply(null, numeros);
    var suma = numeros.reduce((acc, num) => acc + num, 0);
    var promedio = (suma / numeros.length).toFixed(2);

    calcularMayor.textContent = `El mayor: ${mayor}`;
    calcularMenor.textContent = `El menor: ${menor}`;
    calcularPromedio.textContent = `El promedio: ${promedio}`;
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    var numero = Number(numeroInput.value);
    numeros.push(numero);
    numeroInput.value = "";

    console.log(`Agrega numero: ${numero}`);
});






