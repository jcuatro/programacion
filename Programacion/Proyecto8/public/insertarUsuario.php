<?php
require_once __DIR__.'/../vendor/autoload.php';
use Proyecto8\models\baseDeDatos;
$baseDatos=new Db();
$baseDatos->conectar();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registro</title>
    <link rel="stylesheet" href="css/perfil.css">
  </head>
  <body>
    <h1>CREAR PERFIL</h1>
    <form method="post" action="listadoUsuarios.php">
      <fieldset class="caja">
        <legend>¿QUIEN ERES?</legend>
        <p>Nombre <b>*</b><br>
        <input type="text" name="nombre" value="" placeholder="Introduce tu nombre" required></p>
        <p>Apellidos <br>
          <input type="text" name="apellidos" value="" placeholder="Introduce tus apellidos"></p>
        <p>Año de nacimiento: <br>
        <input type="text" name="edad" placeholder="Introduce tu año de nacimiento"></p>
        <p>Curso <br>
          <select name="curso" placeholder="Introduce tu curso">
            <option value="">--Selecciona uno--</option>
            <option value="2daw">2º DAW</option>
            <option value="1daw">1º DAW</option>
            <option value="bachiller">Bachiller</option>
            <option value="eso">ESO</option>
            <option value="primaria">Magisterio</option>
          </select></p>
      </fieldset>
      <fieldset class="caja">
        <legend>¿CÓMO QUIERES INICIAR SESIÓN?</legend>
        <p>Nombre de usuario <b>*</b><br>
          <input type="text" name="usuario" value="" placeholder="Introduce tu usuario" required></p>
        <p>Contraseña <br>
          <input type="password" name="contrasenya" value="" placeholder="Introduce tu contraseña" required></p>
        <p>Repite la contraseña <br>
          <input type="password" name="contrasenya2" value="" placeholder="Introduce tu contraseña de nuevo" required></p>
      </fieldset>
      <fieldset class="caja">
        <legend>¿CONDICIONES DE REGISTRO?</legend>
        <p>Me va a gustar este juego <br>
        <input type="radio" name="gusto" value="si">Si
        <input type="radio" name="gusto" value="no se">Lo veo posible
        <input type="radio" name="gusto" value="no">Rotundamente no</p>
      </fieldset>
      <input type="submit" name="crear" value="Crear cuenta">
    </form>
    <button type="button" name="button" onclick="location.href='listadoUsuarios.php'">Volver</button>
    <script src="js/comprobarInsertar.js" charset="utf-8"></script>
  </body>
</html>
