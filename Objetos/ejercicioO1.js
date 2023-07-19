var productos = [];


for (var i = 1; i <= 2; i++) {
    var nombre = prompt(`Ingrese un producto: ${i}`);
    var cantidad = parseFloat(prompt(`Ingrese la cantidad ${i}`));
    var precio = parseFloat(prompt(`Ingrese el precio ${i}`));

    var producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    productos.push(producto);
}


productos.forEach(function (producto, indice) {
    var mensaje = `producto: ${indice + 1 } :
                    nombre: ${producto.nombre}
                    precio: ${producto.precio}
                    cantidad: ${producto.cantidad}`  
    document.write(mensaje + "<br>");
});
