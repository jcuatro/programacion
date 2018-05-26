<?php
namespace Proyecto9\models;
/**
 *
 */
class Session
{
  function __construct()
  {
    session_start();
  }
  public function cerrarSesion(){
    session_destroy();
  }
}
