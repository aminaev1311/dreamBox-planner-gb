<?php
class Dream_DB {
    private $host = 'localhost';
    private $user = 'dreambox';
    private $pass = 'Db_dreamB0X';
    private $name = 'dreambox';
    private $conn = null;
    private $limit = '1000';

    public function __construct() {
        $this->connect();
    }

    public function closeConnect () {
        $this->conn-close();
    }

    private function sanitizeStr ($str = '') {
        $str = trim($str);
        $str = addslashes($str);
        $str = htmlspecialchars($str);
        return $str;
    }

    private function rollBackSanitize ($str = '') {
        $str = htmlspecialchars_decode($str);
        $str = stripslashes($str);
        return $str;
    }

    private function connect() {
        try {
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

            $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->name);

            $this->conn->set_charset('utf8');

            $this->conn->query('SET NAMES utf8');
            $this->conn->query('SET CHARACTER SET utf8');

            // printf("Success... %s\n", $this->conn->host_info);
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }

    public function get_rows () {
        $result = [];
        if ($this->conn) {
            $query = 'SELECT id, title, text, deadline FROM tasks LIMIT ' . $this->limit;
            $fetch = $this->conn->query($query, MYSQLI_USE_RESULT);
            while ($row = $fetch->fetch_assoc()) {
                array_push($result, array(
                                    'id' => $row['id'], 
                                    'title' => $this->rollBackSanitize($row['title']), 
                                    'text' => $this->rollBackSanitize($row['text']), 
                                    'deadline' => $this->rollBackSanitize($row['deadline'])
                                    // 'status' =>  $this->rollBackSanitize($row['status'])
                                    )
                                );
            }
        }
        if (!empty($result)) {
            function cmp ($a, $b) {
                if ($a['id'] == $b['id']) {
                    return 0;
                }
                return ($a['id'] < $b['id']) ? -1 : 1;
            }
            usort($result, 'cmp');
        }
        return $result;
    }

    public function insert_row ($array = []) {
        $result = '';
        if ($this->conn && !empty($array)) {
            
            $vals = array_values($array);
            foreach($vals as &$val) {
                $val = $this->sanitizeStr($val);
            }
            
            function prepare_query_str (&$item) {
                $item = "'$item'";
            }
            array_walk($vals, 'prepare_query_str');

            $tbl_names = implode(', ', array_keys($array));
            $tbl_vals = implode(', ', array_values($vals));
            
            $query = "INSERT INTO tasks (" . $tbl_names . ") VALUES(" . $tbl_vals . ")";
            $res_obj = $this->conn->query($query);
            
            $result = $this->conn->insert_id;
        }
        return $result;
    }

    public function update_row ($array = []) {
        $result = '';
        if ($this->conn && !empty($array)) {
            $query_str = '';
            $i = 0;
            
            foreach ($array as $k => $v) {
                if ($k === 'id') {
                    continue;
                }
                $query_str .= $k . " = " . "'" . $this->sanitizeStr($v) . "'";
                if ((count($array) - 2) > $i) {
                    $query_str .= ', ';
                }
                $i++;
            }
            
            $query = "UPDATE tasks SET " . $query_str . " WHERE id = '" . $array['id'] . "'";
            if ($this->conn->query($query)) {
                $result = 'success';
            }
        }
        return $result;
    }

    public function delete_row ($id = '') {
        $result = '';
        if (!empty($id)) {
            $int_id = intval($id);
             if ($int_id !== 0) {
                $query = "DELETE FROM tasks WHERE id = " . $int_id;
                if ($this->conn->query($query)) {
                    $result = 'success';
                }
             } else {
                 $result = 'Неверный ID!';
             }
        }
        return $result;
    }
}

?>