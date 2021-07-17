<?php
    header("Content-type: text/html; charset=utf-8");
    $username = $_POST['username'];
    $password = $_POST['password'];
    $conn =mysqli_connect('localhost','root','','web');
    if ($conn->connect_error){
        echo '数据库连接失败！';
        exit(0);
    }else{
        if ($username == ''){
            echo '<script>alert("请输入用户名！");history.go(-1);</script>';
            exit(0);
        }
        if ($password == ''){
            echo '<script>alert("请输入密码！");history.go(-1);</script>';
            exit(0);
        }
        $sql = "select username,password from users where username = '$_POST[username]' and password = '$_POST[password]'";
		$result=mysqli_query($conn,$sql);
        $number = mysqli_num_rows($result);
        if ($number) {
            echo '登录成功，1秒后跳转到网站首页';
			header("refresh:1;url='../index.html'");
        } else {
			echo '登录失败！';
        }
    }
?>