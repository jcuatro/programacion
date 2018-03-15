<?php
class cuadrado
{
  private $lado=4;
  function __construct()
  {
    $this->base=4;
  }
  public function getLado(){
    return $this->lado;
  }
  public function setLado($nuevo){
    $this->lado=$nuevo;
  }
  public function area(){
    return $this->lado * $this->lado;
  }
  public function perimetro(){
    return $this->lado * 4;
  }
}
