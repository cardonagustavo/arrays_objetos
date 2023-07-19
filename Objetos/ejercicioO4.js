var cupones = [
  { cupon: "semana10", descuento: "20%", fecha_caducidad: "29-07-2023" },
  { cupon: "comprasmayores100", descuento: "10%", fecha_caducidad: "25-07-2023" },
  { cupon: "viernesloco", descuento: "15%", fecha_caducidad: "27-07-2023" }
];

var nombre = cupones;

cupones.forEach(function(cupon) {
  cupon.nombre = cupon.cupon;
  delete cupon["cupon"];
})

cupones.forEach(function(nombre) {
  var mensaje = `Cupón: ${nombre.nombre}
                 Descuento: ${nombre.descuento}
                 Fecha de caducidad: ${nombre.fecha_caducidad}`;
  document.write(mensaje + "<br>");
});

