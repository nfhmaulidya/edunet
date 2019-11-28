function ceklogin(){
  var email    = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  $.ajax({
    url: 'http://localhost/edunet/model/login.php',
    method: 'POST',
    data: {email: email, password: password},
    dataType: "json",
    success: function(data) {
      if(data == true){
        alert("login success");
        self.location.href = "kelas_guru.html";
      }else{
        alert("login failed");
        location.reload();
      }
    }
  });	
}