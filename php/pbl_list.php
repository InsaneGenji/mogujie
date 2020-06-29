<?php
include "conn.php";
$result = $conn->query("select * from pbl_list");
$pbl_list = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $pbl_list[$i] = $result->fetch_assoc();
}
echo json_encode($pbl_list);