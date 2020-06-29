<?php
include "conn.php";
// 非法操作
if (!isset($_POST['yhm']) && !isset($_POST['yx']) && !isset($_POST['sjh']) && !isset($_POST['password'])) {
    exit('非法操作');
}



// 判断用户名是否存在
if (isset($_POST['yhm']) || isset($_POST['register'])) { //获取用户名
    $yhm = @$_POST['yhm']; //取值
    $resultyhm = $conn->query("select * from registry where username='$yhm'"); //如果能够找到记录，用户名存在的
    if ($resultyhm->fetch_assoc()) { //如果$result->fetch_assoc()有值，返回true,否则就是false;
        echo true; //存在
    } else {
        echo false;
    }
};
// 判断邮箱是否存在
if (isset($_POST['yx']) || isset($_POST['register'])) {
    $yx = @$_POST['yx'];
    $resultyx = $conn->query("select * from registry where email='$yx'");
    if ($resultyx->fetch_assoc()) {
        echo true;
    } else {
        echo false;
    }
};
// 判断手机号是否存在
if (isset($_POST['sjh']) || isset($_POST['register'])) {
    $sjh = @$_POST['sjh'];
    $resultsjh = $conn->query("select * from registry where phone='$sjh'");
    if ($resultsjh->fetch_assoc()) {
        echo true;
    } else {
        echo false;
    }
};



//将表单的值接收，放入数据库。
if (isset($_POST['register'])) { //点击了注册按钮
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = sha1($_POST['password']);
    $conn->query("insert registry values(null,'$username','$email','$phone','$password')");
    header('location:http://10.31.155.17/MoGuJie/src/login&register.html'); //页面跳转
};
