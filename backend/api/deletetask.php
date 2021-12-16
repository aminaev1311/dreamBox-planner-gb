<?php
require_once '../core/display_errors.php';
require_once '../core/classes/dream_db.php';

$res_data = array('delete' => '', 'errors' => '');

// $front_data = file_get_contents('php://input');
$front_data = '{"id":"20"}';

if (empty($front_data)) {
    $res_data['errors'] = 'Empty data!';
} else {
    $json = json_decode($front_data);

    if (!empty($json->id)) {
        $ins_ar = [
            'id'    => $json->id
        ];

        if (!empty($ins_ar['id'])) {
            $dr_db = new Dream_DB();
            $res_data['delete'] = $dr_db->delete_row($ins_ar['id']);
        }
    } else {
        $res_data['errors'] = 'Empty id!';
    }
}

header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Origin: null");
header('Content-Type: application/json');
echo json_encode($res_data, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT);
exit;
?>