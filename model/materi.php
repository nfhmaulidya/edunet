<?php   REQUIRE_ONCE('koneksi.php'); 
header('Content-Type:application/json;charset=utf-8');

$kode    = trim($_POST['kode']);


 $QUERY = MYSQLI_QUERY($conn,"SELECT * FROM materi where kode_kelas='{$kode}'"); 
//  $QUERY = MYSQLI_QUERY($conn,"SELECT * FROM materi"); 
 
 $materi = new stdClass; 
 $materi = array();

 while( $ROW = mysqli_fetch_assoc($QUERY)){
     $materi[]=array(
    'id' => $ROW['id'],
    'kode_kelas' => $ROW['kode_kelas'], 
    'judul' => $ROW['judul'],  
    'deskripsi' => $ROW['deskripsi'],  
    'lampiran' => $ROW['lampiran'],  
     );

}
 header('Content-Type:application/json;charset=utf-8'); 
 ECHO JSON_ENCODE ($materi);
 MYSQLI_CLOSE($conn); 
?>