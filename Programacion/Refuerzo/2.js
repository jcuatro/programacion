x=prompt("Elije un número par");
y=prompt("Elije otro número par diferente al anterior");
do {
  if (isNaN(x)==true || isNaN(y)==true) {
    alert("He dicho número");
  }
if (x==y) {
  y=prompt("Vuelve a introducir un número");
}
if (x%2!=0) {
  x=prompt("Vuleva a introducir el número");
}
if (y%2!=0) {
  y=prompt("Vuelva a introducir el número");
}
} while (x==y || x%2!=0 || y%2!=0);
alert("Sabes seguir instrucciones muy bien, progresas adecuadamente");
