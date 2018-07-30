<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/25 0025
 * Time: 下午 3:05
 */


include "config.php";

if($_SERVER["REQUEST_METHOD"]!="POST")
{
    exit("非法访问");
}
$username = $_REQUEST["loginName"];
$password = $_REQUEST["memberPwd"];

$querySQL="select admin from users where username=? and password=? limit 1";
$stmt=$conn->prepare($querySQL);
$stmt->bind_param("ss",$username,$password);
$stmt->execute();
$result = $stmt->get_result();
$result2=mysqli_fetch_row($result);
$admin=$result2[0];
if($result->num_rows>=1){
    session_start();
   $_SESSION['username'] = $username;
   $_SESSION['admin'] = $admin;
 //   echo $username,' 欢迎你！进入 <a href="login.html">用户中心</a><br />';
   // echo '点击此处 <a href="login.php?action=logout">注销</a> 登录！<br />';
    print_r(json_encode(array("status"=>1,"msg"=>"登录成功","username"=>$_SESSION['username'])));
   exit;
}else{
//   exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
    print_r(json_encode(array("status"=>0,"msg"=>"登录失败")));
}
//if($_GET['action'] == "logout"){
//  unset($_SESSION['admin']);
//   unset($_SESSION['username']);
//  echo '注销登录成功！点击此处 <a href="login.html">登录</a>';
//  exit;
//}



