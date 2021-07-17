<?php  
header("content-type:application/json;charset=utf-8");//设置编码,设置文件为json
$socon=$_GET['socon'];
$con=mysqli_connect('localhost','root','','web');//连接数据库
//数据库内容查询  
mysqli_query($con,"set names 'utf8'");//设置编码
$sql = "SELECT * FROM users WHERE users.username LIKE '%$socon%'";  
$result = mysqli_query($con,$sql);//执行sql语句


$jarr = array();//新建数组
while ($rows=mysqli_fetch_array($result)){//将从数据库获取的值，以数组的形式循环输出到rows中
    array_push($jarr,$rows);//把值给jarr
}

$str=json_encode($jarr);//将数组进行json编码
echo $str;
// header("refresh:0;url='../soso.html'");
?>