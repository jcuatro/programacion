var num=Math.round(Math.random() * (6 - 0));
console.log(num);

var palabras=["urnas", "almanaque", "votar", "peluquin", "generalidad", "independiente", "españa"];
var intento=palabras[num];
console.log(intento);

var intentos=prompt("Elije un número entre 5 y 10 para determinar así tus intentos.");
var contador=0;
if (intentos<5) {
  alert("Vuleve a elegir el número");
  var intentos=prompt("Elije un número entre 5 y 10 para determinar así tus intentos.");
}
if (intentos>10) {
  alert("Vuleve a elegir el número");
  var intentos=prompt("Elije un número entre 5 y 10 para determinar así tus intentos.");
}
var palabraAcertar=[];
for (let i=0; i<=intento.length-1;i++){
  palabraAcertar[i]=intento.charAt(i);
}

var palabra=[];
for (let i=0; i<=palabraAcertar.length-1;i++){
  palabra[i]="0";
}
var cero=6;
var encontrada=false;
var fallo="";
while(intentos>contador && cero!=0){
  var letra=prompt("Te quedan "+(intentos-contador)+" intentos");;
  while (isNaN(letra)==false){
    letra=prompt("Introduce una letra en minúscula");
  }

  for (let i=0; i<=palabra.length-1; i++){
    if (letra == palabraAcertar[i]) {
      palabra[i]=letra;
      encontrada=true;
    }
  }

  if (encontrada==true){
    console.log(letra);
    alert("Letra encontrada");
  }else{
    fallo=fallo+letra;
    console.log(fallo);
    contador++
  }
  comp=false

  var l="";
  for (let i=0; i<=intento.length-1; i++){
    l=l+palabra[i];
  }
  console.log(l);

  cero=0;
  preguntar=false;
  for (let i=0; i<=intento.length-1; i++){
    if(palabra[i]=="0") cero=cero+1;
  }
}

if (cero==0) alert("¡¡ENHORABUENA!!, no has ganado nada.");
else alert("Mejor suerte la próxima vez");
