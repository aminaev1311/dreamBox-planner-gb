<?php
require_once '../core/display_errors.php';
require_once '../core/classes/dream_db.php';

$dr_db = new Dream_DB();

$res = $dr_db->get_rows();

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
// echo'<pre>';print_r(json_encode($res, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));echo'<pre>';
echo json_encode($res, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT);
exit;
?>