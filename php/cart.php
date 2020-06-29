<?php
    include "conn.php";
    $result=$conn->query("select * from pbl_list");
    $cartlist=array();
    for($i=0;$i<$result->num_rows;$i++){
        $cartlist[$i]=$result->fetch_assoc();
    }
    echo json_encode($cartlist);