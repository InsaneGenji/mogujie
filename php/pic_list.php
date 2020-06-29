<?php
include "conn.php";
$result = $conn->query("select * from pic_list");
$pic_list = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $pic_list[$i] = $result->fetch_assoc();
}
echo json_encode($pic_list);
