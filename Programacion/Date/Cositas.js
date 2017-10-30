//Inicialización de fechas
var fechahoy=new Date(2018,2,3);
var fechacumple=new Date(2018,10,3)

//Muestro el dia de hoy
console.log(fechahoy);
console.log(fechacumple);
console.log("Julio cumple el dia:"+fechacumple.getDate());


//Dia de la semana formato letra
console.log("Dia de la semana"+fechacumple.getDay());
console.log("Jonhy is cani");

switch (fechacumple.getDay()) {
  case 0:
  console.log("Dia de la semana: Domingo");
    break;
  case 1:
  console.log("Dia de la semana: Lunes");
    break;
  case 2:
  console.log("Dia de la semana: Martes");
    break;
  case 3:
  console.log("Dia de la semana: Miercoles");
    break;
  case 4:
  console.log("Dia de la semana: Jueves");
    break;
  case 5:
  console.log("Dia de la semana: Viernes");
    break;
  case 6:
  console.log("Dia de la semana: Sabado");
    break;
  console.log("Dia de la semana: Domingo");
    break;
  default:
  alert("Esto se va a descontrolar");
    break;
  }
fechacumple.setFullYear(2019);
switch (fechacumple.getDay(2019)) {
  case 0:
  console.log("Dia de la semana: Domingo");
    break;
  case 1:
  console.log("Dia de la semana: Lunes");
    break;
  case 2:
  console.log("Dia de la semana: Martes");
    break;
  case 3:
  console.log("Dia de la semana: Miercoles");
    break;
  case 4:
  console.log("Dia de la semana: Jueves");
    break;
  case 5:
  console.log("Dia de la semana: Viernes");
    break;
  case 6:
  console.log("Dia de la semana: Sabado");
    break;
  console.log("Dia de la semana: Domingo");
    break;
  default:
  alert("Esto se va a descontrolar");
    break;
  }
