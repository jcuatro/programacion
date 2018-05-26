<?php
require_once __DIR__.'/../vendor/autoload.php';
use Proyecto9\models\Session;
session_start();
$_SESSION=[]; //
session_destroy();
header('Location: index.php');
