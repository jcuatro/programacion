<?php
require "circulo.php";
require "cuadrado.php";
require "triangulo.php";

$circulo= new circulo();
$circulo->setRadio($_POST['radio']);

$cuadrado= new cuadrado();
$cuadrado->setLado($_POST['lado']);

$triangulo= new triangulo();
$triangulo->setBase($_POST['base']);
$triangulo->setAltura($_POST['altura']);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Calculos</title>
  </head>
  <body>
    <table>
      <tr>
        <td>Circulo</td><td><?php echo  $circulo->area() ?></td><td><?php echo $circulo->perimetro() ?></td>
      </tr>
      <tr>
        <td>Cuadrado</td><td><?php echo $cuadrado->area() ?></td><td><?php echo $cuadrado->perimetro() ?></td>
      </tr>
      <tr>
        <td>Triángulo</td><td><?php echo $triangulo->area() ?></td>
      </tr>
    </table>
  </body>
</html>
