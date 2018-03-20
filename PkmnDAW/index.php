<?php

require_once "/REGIgigas.php";
require_once "/Jinxep.php";
require_once "/Pablowoodo.php";

$regi= new REGIgigas();
print "<img src=\"descarga.jpg\">"."</br>";
echo "Características de Regi:<br>";
echo "Tiene ".$regi-> getVida()." de vida.<br>";
echo "Tiene una fuerza ".$regi-> getFuerza().".<br>";
echo "Su apodo es ".$regi-> getApodo()."<br>";
echo "Su habilidad es Valencianismo:  ".$regi->getMAC()."<br><br>";

$josep= new Jynxep();
print "<img src=\"descarga2.jpg\">"."</br>";
echo "Características de Josep:<br>";
echo "Tiene ".$josep-> getVida()." de vida.<br>";
echo "Tiene ".$josep-> getHp()." de vida social.<br>";
echo "Su apodo es ".$josep-> getApodo()."<br>";
echo "Su habilidad es Jalar:  ".$josep->getJalar()."<br><br>";

$pablo= new Pablowoodo();
print "<img src=\"descarga3.jpg\">"."</br>";
echo "Características de Pablo:<br>";
echo "Tiene ".$pablo-> getVida()." de vida.<br>";
echo "Tiene una altura de ".$pablo-> getBaloncesto().".<br>";
echo "Su apodo es ".$pablo-> getApodo()."<br>";
echo "Su habilidad es UPV:  ".$pablo->getUPV()."<br><br>";
