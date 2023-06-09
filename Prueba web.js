var carrito = [];
var total = 0;

function agregarAlCarrito(producto) {
  carrito.push(producto);
  total += obtenerPrecioProducto(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  var carritoElemento = document.getElementById("carrito");
  var totalElemento = document.getElementById("total");
  carritoElemento.innerHTML = "";
  carrito.forEach(function(producto) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(producto));
    carritoElemento.appendChild(li);
  });
  totalElemento.innerHTML = "$" + total;
}

function obtenerPrecioProducto(producto) {
  // Aquí puedes implementar la lógica para obtener el precio del producto desde tu base de datos o cualquier otra fuente de datos
  // Por simplicidad, asumiremos precios fijos para cada producto en este ejemplo
  switch (producto) {
    case "Camiseta":
      return 20;
    case "Pantalón":
      return 30;
    // Agrega más casos para los productos adicionales
    default:
      return 0;
  }
}

function realizarCompra() {
  // Aquí puedes agregar la lógica para procesar la compra, como enviar los detalles al servidor, realizar el pago, etc.
  // Por simplicidad, simplemente mostraremos una alerta en este ejemplo
  alert("Compra realizada correctamente. Gracias por su compra.");
  carrito = [];
  total = 0;
  actualizarCarrito();
}
