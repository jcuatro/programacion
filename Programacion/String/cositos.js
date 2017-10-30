//Definición de una frase
var parrafolargo="Esto es un ejemplo\
 de un parrafo ENORME\
 con mucho que dar";

console.log(parrafolargo);
var parrafotwitter=parrafolargo.trim();
//Cabe en twitter?
if(parrafolargo.length<140){
  console.log(parrafolargo.length);
  console.log("!!!CABE EN RWITTER¡¡¡");
  console.log(parrafotwitter);
}

//Sacar la 3ºera letra
console.log(parrafolargo.charAt(0));

var palabra=prompt("Introduce una palabra marinero");
var arbalap="";
for (var i = palabra.length-1; i>=0; i--){
  arbalap=arbalap+palabra.charAt(i);
}
console.log(arbalap);
