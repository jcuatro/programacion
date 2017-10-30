var num=Math.floor(Math.random()*(123-97)) + 97;
console.log(num);

var letra="";
letra=String.fromCharCode(num);
console.log(letra);

var introducirletra=prompt("Intenta introducir la letra correcta en minúscula")
while (introducirletra!=letra) {
  var introducirletra=prompt("Inserta la letra otra vez");
}
alert("Buen trabajo marinero")
console.log("funciona");
