var db = firebase.database();

function login() {
  var user = document.getElementById("user_log").value;
  var pass = document.getElementById("pass_log").value;

  db.ref("admin/").once("value", (value) => {
    if (user == value.val().user && pass == value.val().pass) {
      alert("Login Successful")
    }
    else {
      alert("Try again")
    }
  })
}