<?php
$juegos=new mysqli("localhost","root","","juegos");
if ($juegos->connect_errno) {
  echo "Fallo al conectar a MySQL: " . $juegos->connect_error;
} else {
  $registro = $juegos->query("INSERT  into usuarios
  (correo,nombre,apellidos,usuario,contrasenya,edad,curso)
  values ('".$_POST['correo']."','".$_POST['nombre']."','".$_POST['apellidos']."',
  '".$_POST['usuario']."','".$_POST['contrasenya']."',".$_POST['edad'].",
  '".$_POST['curso']."')");
}
header('Location: listadoUsuarios.php');
?>
