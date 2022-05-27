var db = firebase.database();

function login() {
  var number = document.getElementById("number_log").value;
  var pass = document.getElementById("pass_log").value;

  db.ref("data/").once("value", (value) => {
    console.log(value.val());
    value.forEach((e) => {
      if (e.key ==  number) {
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
