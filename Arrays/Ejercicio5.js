var empleados = [
    { nombre: "pedro", salario: 5000000, profesion: "Abogado" },
    { nombre: "Angie", salario: 3900000, profesion: "Odontóloga" },
    { nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario" },
    { nombre: "Lina", salario: 4500000, profesion: "Psicóloga" }
];

function compararSalario(a, b) {
    return b.salario - a.salario;
}

empleados.sort(compararSalario);

console.log("Orden de mayor a menor:");
console.log(empleados);
