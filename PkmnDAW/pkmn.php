<?php
/**
 *
 */
class Pokemon
{
  //variables
  private $vida=100;
  function __construct()
  {
  }
  public function getVida()
  {
    return $this->vida;
  }
  public function setVida($vida)
  {
    $this->vida = $vida;
  }
}
