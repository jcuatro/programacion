//Inicialización
var poblaciones=[i];
var resultadodeusuario="";

//Solicitar poblaciones
for (var i = 0; i < 3; i++) {
  resultadodeusuario=prompt("Dame una población de valencia");
  poblaciones.push(resultadodeusuario);
}

//Visualizar elementos
for (var i = 0; i < poblaciones.length; i++) {
console.log(poblaciones[i]);
}
