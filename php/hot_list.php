<?php
include "conn.php";
$result = $conn->query("select * from hot_list");
$hot_list = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $hot_list[$i] = $result->fetch_assoc();
}
echo json_encode($hot_list);
