var numeroInicialTexto="";
var n1=0;
var npar=0;
var numeroFinalTexto="";
var n0=0;
var numerosBienIntroducidos=false;

while(!numerosBienIntroducidos){
  numeroInicialTexto=prompt("Introduce un número inicial ");
  n1l=parseInt(numeroInicialTexto);
  numeroFinalTexto=prompt("Introduce un número final mayor que el primero");
  n0=parseInt(numeroFinalTexto);
  if(isNaN(n0)||isNaN(n1))
  {
    numerosBienIntroducidos=false;
  }else{
    if(n0>n1) numerosBienIntroducidos=true;
  }
}
if((n1%2)==0) {
npar=n1-1;
}else{
    npar=n1;
}
for (var i = npar+1; i <= n0; i=i+2) {
  console.log(i);
}
