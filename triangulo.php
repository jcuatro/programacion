<?php
class triangulo
{
  private $base=3;
  private $altura=2;
  function __construct()
  {
    $this->base=3;
    $this->altura=2;
  }
  public function getBase(){
    return $this->base;
  }
  public function setBase($nuevo){
    $this->base=$nuevo;
  }
  public function getAltura(){
    return $this->altura;
  }
  public function setAltura($nuevo){
    $this->altura=$nuevo;
  }
  public function area(){
    return ($this->base * $this->altura)/2;
  }
}
