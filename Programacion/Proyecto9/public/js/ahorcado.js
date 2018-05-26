function comprobar(){
  if(intentos>cont && cero!=0){
  letra=entrada.value;
  entrada.value="";
    }
    for (let i=0; i<=palabra.length-1; i++){
      if (letra == palabraAcertar[i]) {
        palabra[i]=letra;
        comp=true;
      }
    }

    //comprobar si encontrada
    if (comp==true){
      console.log(letra);
    }else{
      fallo=fallo+letra;
      fallos.textContent=fallo;
      cont++;

      intentado.textContent="Llevas "+cont+" intentos.";
    }
    comp=false;
    var j="";
    for (let i=0; i<=adivinar.length-1; i++){
      j=j+palabra[i];
    }
    comprobante.value=j;
    barrabaja=0;
    preguntar=false;
    for (let i=0; i<=adivinar.length-1; i++){
      if(palabra[i]=="_") barrabaja=barrabaja+1;
    }
  }else {
    //solución
    if (barrabaja==0) resultado.textContent="Felicidades, supongo";
    else resultado.textContent="Mala suerte";
  }
}
var numAl=Math.round(Math.random() * (4 - 0));
console.log(numAl);

var palabras=["almanaque", "independencia", "gato", "caja", "murcielago"]

var adivinar=palabras[numAl];
console.log(adivinar);
var intentos=9;
var cont=0;

var palabraAcertar=[];
for (let i=0; i<=adivinar.length-1;i++){
  palabraAcertar[i]=adivinar.charAt(i);
}

var palabra=[];
for (let i=0; i<=palabraAcertar.length-1;i++){
  palabra[i]="_";
}
var barrabaja=6;  //cualquier número diferente de 0
var comp=false;
var fallo="";

var entradaLetra=document.getElementById('entrada');
var letra = "";
var fallos=document.getElementById('fallos');
var comprobante=document.getElementById('comprobante');
var intentado=document.getElementById('intentos');
var resultado=document.getElementById('resultado');
