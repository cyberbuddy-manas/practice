var db = firebase.database();

function login() {
  var license = document.getElementById("license_log").value;
  var pass = document.getElementById("pass_log").value;

  db.ref("bloodbankdata/").once("value", (value) => {
    console.log(value.val());
    value.forEach((e) => {
      if (e.key ==  license) {
        var username = e.val();
        if (username.pass == pass) {
          alert("Login Successful");
        } else {
          alert("Try Again");
        }
      }
    });
  });
}