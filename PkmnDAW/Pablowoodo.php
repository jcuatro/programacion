<?php
require_once "/Pkmn.php";
/**
 *
 */
class Pablowoodo extends Pokemon
{
  private $UPV="La universidad tiene un nivel alto en informática";
  private $baloncesto="Más de 2 metros";
  private $apodo="Pablowoodo";
  function __construct()
  {
  }
  public function getUPV()
  {
    return $this->UPV;
  }
  public function setUPV($UPV)
  {
    $this->UPV = $UPV;
  }
  public function getApodo()
  {
    return $this->apodo;
  }
  public function setApodo($apodo)
  {
    $this->apodo = $apodo;
  }
  public function getBaloncesto()
  {
    return $this->baloncesto;
  }
  public function setBaloncesto($baloncesto)
  {
    $this->baloncesto = $baloncesto;
  }
}
