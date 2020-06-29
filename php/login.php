<?php
include "conn.php";
if (isset($_POST['uep']) && isset($_POST['key'])) {
    $uep = $_POST['uep'];
    $key = sha1($_POST['key']);
    $result = $conn->query("select * from registry where username='$uep' or email='$uep' or phone='$uep' and password='$key'");
    $username = $conn->query("select username from registry where username='$uep' or email='$uep' or phone='$uep'")->fetch_assoc();
    if ($result->fetch_assoc()) {
        echo $username['username']; //用户名和密码存在
    } else {
        echo false;
    }
} else {
    exit('非法操作');
};
