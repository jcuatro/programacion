var numero=Math.round(Math.random() * (20-1))+1;
console.log(numero);


var introducirnum=prompt("Introduce un número del 1 al 20");
var element1=document.getElementById("p1");
var element2=document.getElementById("p2");
var element3=document.getElementById("p3");
var contador=1;

while (numero!=introducirnum) {
  introducirnum=prompt("Llevas "+contador+" intentos");
  contador++;
}
if (introducirnum==numero) {
alert("Felicidades marinero");
}
element2.textContent="Has necesitado "+contador+" intentos";
element3.textContent="El número a acertar era "+número;
if (numero=introducirnum) {
  element1.textContent="Has acertado"
if (contador>=10) {
  alert("No eres demasiado listo")
}
