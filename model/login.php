<?php   
REQUIRE_ONCE('koneksi.php'); 
 header('Content-Type:application/json;charset=utf-8');

 $email    = trim($_POST['email']);
 $password = trim($_POST['password']);

 $cek=mysqli_query($conn, "SELECT * FROM user WHERE `email`='{$email}' AND `password`='{$password}'");
 $result = mysqli_fetch_assoc($cek);
 $nama = $result['nama'];
 $id = $result['id'];
 if(mysqli_num_rows($cek)>0){
	 echo true;
	 $_SESSION['login']['id'] = $id;
	 $_SESSION['login']['nama'] = $nama;
	 $_SESSION['login']['email'] = $email;
	 $_SESSION['login']['password'] = $password;

 }else{
	 echo false;
 }
?>