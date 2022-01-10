<?php
$uploadDir = $_SERVER['DOCUMENT_ROOT'] . '/temp/';
$typeFile = explode('/', $_FILES['voice']['type']);
$fileName = basename(md5($_FILES['voice']['tmp_name'] . time()) . '.' . $typeFile[1]);
$uploadFile = $uploadDir . $fileName;

if (move_uploaded_file($_FILES['voice']['tmp_name'], $uploadFile)) {
    $response = ['result'=>'OK', 'data'=>'/temp/' . $fileName];
} else {
    $response = ['result'=>'ERROR', 'data'=>''];
}
echo json_encode($response);
?>