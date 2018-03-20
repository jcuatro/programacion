<?php
require_once "/Pkmn.php";
/**
 *
 */
class REGIgigas extends Pokemon
{
  private $MAC="Windows es merda";
  private $fuerza="Sobrehumana";
  private $apodo="REGIgias";
  function __construct()
  {
  }
  public function getMAC()
  {
    return $this->MAC;
  }
  public function setMAC($MAC)
  {
    $this->MAC = $MAC;
  }
  public function getApodo()
  {
    return $this->apodo;
  }
  public function setApodo($apodo)
  {
    $this->apodo = $apodo;
  }
  public function getFuerza()
  {
    return $this->fuerza;
  }
  public function setFuerza($fuerza)
  {
    $this->fuerza = $fuerza;
  }
}
