<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

require $_SERVER['DOCUMENT_ROOT'] . '/composer/vendor/autoload.php';

use Google\Cloud\Speech\V1\SpeechClient;
use Google\Cloud\Speech\V1\RecognitionAudio;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\RecognitionConfig\AudioEncoding;

$client = new SpeechClient();

$client->close();

// $uploadDir = $_SERVER['DOCUMENT_ROOT'] . '/temp/';
// $typeFile = explode('/', $_FILES['voice']['type']);
// $fileName = basename(md5($_FILES['voice']['tmp_name'] . time()) . '.' . $typeFile[1]);
// $uploadFile = $uploadDir . $fileName;

// if (move_uploaded_file($_FILES['voice']['tmp_name'], $uploadFile)) {
//     $response = ['result'=>'OK', 'data'=>'/temp/' . $fileName];
// } else {
//     $response = ['result'=>'ERROR', 'data'=>''];
// }
// echo json_encode($response);
?>