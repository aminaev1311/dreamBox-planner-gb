<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

require $_SERVER['DOCUMENT_ROOT'] . '/composer/vendor/autoload.php';

use Google\Cloud\Speech\V1\SpeechClient;
use Google\Cloud\Speech\V1\RecognitionAudio;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\RecognitionConfig\AudioEncoding;

/** Uncomment and populate these variables in your code */
// $audioFile = $_SERVER['DOCUMENT_ROOT'] . '/temp/508bad61ba9a37fa9db3d3b135dc9bf5.wav';

// change these variables if necessary
$encoding = AudioEncoding::OGG_OPUS;
$languageCode = 'ru-RU';
// $sampleRateHertz = 8000;
// $sampleRateHertz = 12000;
// $sampleRateHertz = 16000;
// $sampleRateHertz = 24000;
$sampleRateHertz = 48000;

if (!empty($_FILES['voice']['type'])) {
    $uploadDir = $_SERVER['DOCUMENT_ROOT'] . '/temp/';
    $typeFile = explode('/', $_FILES['voice']['type']);
    $fileName = basename(md5($_FILES['voice']['tmp_name'] . time()) . '.' . $typeFile[1]);
    $uploadFile = $uploadDir . $fileName;
}

if (!empty($_FILES['voice']['tmp_name']) && move_uploaded_file($_FILES['voice']['tmp_name'], $uploadFile)) {
    // get contents of a file into a string
    $content = file_get_contents($uploadFile);

    // set string as audio content
    $audio = (new RecognitionAudio())
        ->setContent($content);

    // set config
    $config = (new RecognitionConfig())
        ->setEncoding($encoding)
        ->setSampleRateHertz($sampleRateHertz)
        ->setLanguageCode($languageCode);

    // create the speech client
    $client = new SpeechClient();

    try {
        $response = $client->recognize($config, $audio);
        // echo"<pre>";print_r($response->getResults());echo"</pre>";
        foreach ($response->getResults() as $result) {
            $alternatives = $result->getAlternatives();
            $mostLikely = $alternatives[0];
            $transcript = $mostLikely->getTranscript();
            // $confidence = $mostLikely->getConfidence();
            // printf('Transcript: %s' . PHP_EOL, $transcript);
            // printf('Confidence: %s' . PHP_EOL, $confidence);

            $response = ['result'=>'OK', 'data'=>strval($transcript)];
        }

        if (file_exists($uploadFile)) {
            unlink($uploadFile);
        }
    } finally {
        $client->close();
    }

} else {
    $response = ['result'=>'ERROR', 'data'=>'No file send!'];
}
echo json_encode($response);
?>