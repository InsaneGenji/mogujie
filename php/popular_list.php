<?php
include "conn.php";
$result = $conn->query("select * from popular_list");
$popular_list = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $popular_list[$i] = $result->fetch_assoc();
}
echo json_encode($popular_list);
