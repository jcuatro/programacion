<?php
require_once "/Pkmn.php";
/**
 *
 */
class Jynxep extends Pokemon
{
  private $Jalar="Más grande mejor";
  private $hp=0;
  private $apodo="Jynxep";
  function __construct()
  {
  }
  public function getJalar()
  {
    return $this->Jalar;
  }
  public function setJalar($Jalar)
  {
    $this->Jalar = $Jalar;
  }
  public function getApodo()
  {
    return $this->apodo;
  }
  public function setApodo($apodo)
  {
    $this->apodo = $apodo;
  }
  public function getHp()
  {
    return $this->hp;
  }
  public function setHp($hp)
  {
    $this->hp = $hp;
  }
}
