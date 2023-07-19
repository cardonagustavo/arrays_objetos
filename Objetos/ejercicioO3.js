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


var totalPagarSinIva = 0;
productos.forEach(function(producto) {
  totalPagarSinIva += producto.precio * producto.cantidad;
});

var iva = 0.19; 
var totalMasIva = totalPagarSinIva + (totalPagarSinIva * iva);

document.write(`El Total antes de IVA es: ${totalPagarSinIva} <br>`);
document.write(`El total IVA incluido es: ${totalMasIva}`);