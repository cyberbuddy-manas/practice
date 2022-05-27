var db = firebase.database();

function send_data() {
  let user = document.getElementById("user").value;
  let license = document.getElementById("license").value;
  let web = document.getElementById("web").value;
  let number = document.getElementById("number").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;

 if (
    user == "" ||
    license == "" ||
    web == "" ||
    number == "" ||
    mail == "" ||
    pass == "" ||
    state == "" ||
    city == "" ||
    address == ""
  ) {
    alert("Please enter valid values");
  } else {
    db.ref("bloodbankdata/" + license).set({
      user: user,
      license: license,
      web: web,
      number: number,
      mail: mail,
      pass: pass,
      state: state,
      city: city,
      address: address,
    });

    db.ref("bloodbankusers/")
      .push({
        license:license,
        pass:pass,
      })
      .then((onResolved) => {
        alert("Register Success");
      });

    reset_input();
  }
}

function reset_input() {
  document.querySelectorAll("input").value = "";
}