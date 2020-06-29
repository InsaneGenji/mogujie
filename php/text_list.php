<?php
include "conn.php";
$result = $conn->query("select * from text_list");
$text_list = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $text_list[$i] = $result->fetch_assoc();
}
echo json_encode($text_list);
