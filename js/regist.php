<?php
header("Content-type: text/html; charset=utf-8");
$username=$_POST["username"];
$password=$_POST["password"];

if($username==''){
	echo '请输入用户名！';
}
if($password==''){
	echo '请输入密码！';
}

$conn=mysqli_connect('localhost','root','','web');
if($conn->connect_error){
	echo '数据库连接失败';
}
$sql = "select username from users where username = '$_POST[username]'";
$name=mysqli_query($conn,$sql);
$num=mysqli_num_rows($name);
if($num==0){
	$sql_insert = "insert into users (username,password) values ('$_POST[username]','$_POST[password]')";
	$res_insert=mysqli_query($conn,$sql_insert);
	if ($res_insert) {
	    echo '注册成功，1秒后跳转到登录页面';
	    header("refresh:1;url='../login.html'");
	} else {
	    echo '注册失败';
	}
}else{
	echo '用户名已存在';
	echo $num;
	echo $username;
}

?>