var empleados = [
    { nombre: "pedro", salario: 5000000, profesion: "Abogado" },
    { nombre: "Angie", salario: 3900000, profesion: "Odontóloga" },
    { nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario" },
    { nombre: "Lina", salario: 4500000, profesion: "Psicóloga" }
];

empleados[3].profesion = "Medico";

empleados[0]["apellidos"] = "Gómez Pérez";
empleados[1]["apellidos"] = "Sánchez Ríos";
empleados[2]["apellidos"] = "García López";
empleados[3]["apellidos"] = "Rodríguez Mendoza";


var sumaSalarios = 0;
for (var i = 0; i < empleados.length; i++) {
    sumaSalarios += empleados[i].salario;
}


console.log("La suma total de los salarios es: " + sumaSalarios);

console.log(empleados);
