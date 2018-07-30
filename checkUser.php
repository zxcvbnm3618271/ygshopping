<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/27
 * Time: 14:37
 */
include "config.php";
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json;charset=utf-8");
if($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_REQUEST["memberName"])){
    $users = $_REQUEST["memberName"];

    //1.准备sql语句
    $querySql = "SELECT*FROM users WHERE username=?";
    //2.预处理
    $stmt = $conn->prepare($querySql);
    $stmt->bind_param("s", $users);
    $stmt->execute();
    $result = $stmt->get_result();
   if( $result->num_rows>=1){
       //存在就返回fasle
       print_r("false");
   }else{
       print_r("true");
       //不存在就返回true
   }
}
