<?php
require_once '../core/display_errors.php';
require_once '../core/classes/dream_db.php';

$res_data = array('id' => '', 'errors' => '');

$front_data = file_get_contents('php://input');

if (empty($front_data)) {
    $res_data['errors'] = 'Empty data!';
} else {

    if (strpos($front_data, '=')) {
        
        $front_data_arr = explode('=', $front_data);

        $json = json_decode($front_data_arr[1]);

        if (!empty($json->title)) {
            $ins_ar = [
                'title' => $json->title,
                'text'  => $json->text,
                'deadline' => $json->deadline
            ];
            /* DATETIME YYYY-MM-DD hh:mm:ss */

            $dr_db = new Dream_DB();

            $res_data['id'] = $dr_db->insert_row($ins_ar);
        } else {
            $res_data['errors'] = 'Empty title!';
        }
    } else {
        // copy prev code
    }
}

//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: null");
header('Content-Type: application/json');
echo json_encode($res_data, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT);
exit;
?>