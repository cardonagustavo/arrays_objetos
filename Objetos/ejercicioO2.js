
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


var totalPagar = 0;
productos.forEach(function(producto) {
  totalPagar += producto.precio * producto.cantidad;
});

document.write(`El Total es: ${totalPagar}`);
