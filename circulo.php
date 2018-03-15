<?php
class circulo
{
  private $radio=3;
  function __construct()
  {
    $this->radio=3;
  }
  public function getRadio(){
    return $this->radio;
  }
  public function setRadio($nuevo){
    $this->radio=$nuevo;
  }
  public function area(){
    return pi() * $this->radio * $this->radio;
  }
  public function perimetro(){
    return $this->radio * 2 * pi();
  }
}
