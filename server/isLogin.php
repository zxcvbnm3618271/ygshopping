<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/1 0001
 * Time: 上午 9:17
 */

session_start();
if (!empty($_SESSION['username'])){
    print_r(json_encode(array("status"=>2,"msg"=>"已经登录","username"=>$_SESSION['username'],"admin"=>$_SESSION['admin'])));
}else{
    print_r(json_encode(array("status"=>-1,"msg"=>"请登录")));
}