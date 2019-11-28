<?php   REQUIRE_ONCE('koneksi.php'); 

 $id_guru = $_SESSION['login']['id'];

 $QUERY = MYSQLI_QUERY($conn,"SELECT * FROM kelas_guru where `id_guru`='{$id_guru}'"); 
 
 $kelas = new stdClass; 
 $kelas = array();
 
 while($ROW = mysqli_fetch_assoc($QUERY)){
     $kelas[]=array(
    'kode' => $ROW['kode'],
    'id_guru' => $ROW['id_guru'], 
    'nama_kelas' => $ROW['nama_kelas'],  
     );
 }
 header('Content-Type:application/json;charset=utf-8'); 
 ECHO JSON_ENCODE ($kelas);
 MYSQLI_CLOSE($conn); 
?>