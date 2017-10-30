function msjError(texto){
  console.log("ERROR");
  console.log("ERROR");
  console.log("ERROR");
}
function beneficio(precioCompra,precioVenta){
  let Venta=0;
  let Compra=0;

  precioCompra=parseFloat(compra);
  if (isNaN(precioCompra)){
    msjError("Error");
    precioCompra=0;
  }
  precioVenta=parseFloat(Venta);
  if(isNaN(precioVenta)){
    msjError("Error")
  }
  return Venta-Compra
}
var Venta=prompt("Introduce el precio de venta");
var Compra=prompt("Introduce el precio de compra");
