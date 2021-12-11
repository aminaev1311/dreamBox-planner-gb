<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

require_once '../core/classes/dream_db.php';

$dr_db = new Dream_DB();

$ins_ar = [
    'title' => 'Моя мечта',
    'text'  => 'Хочу совершить восхождение на Эверест!',
    'deadline' => '2022-04-11 08:00:00'
];

// $ins = $dr_db->insert_row($ins_ar);

$res = $dr_db->get_rows();

header('Content-Type: application/json');
// echo'<pre>';print_r(json_encode($res, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));echo'<pre>';
echo json_encode($res, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT);
exit;
?>