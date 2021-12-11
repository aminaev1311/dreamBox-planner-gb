<?php
require_once '../core/display_errors.php';
require_once '../core/classes/dream_db.php';

$dr_db = new Dream_DB();

$ins_ar = [
    'title' => 'Моя мечта',
    'text'  => 'Хочу совершить восхождение на Эверест!',
    'deadline' => '2022-04-11 08:00:00'
];

// $ins = $dr_db->insert_row($ins_ar);

?>