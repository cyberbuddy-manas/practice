var db = firebase.database();

function get_data() {
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var blood = document.getElementById("blood").value;

  db.ref("data/")
    .once("value", (value) => {
      console.log(value.val());
      value.forEach((ele) => {
        if (ele.val().state == state) {
          var br = document.createElement("br");
          var td = document.createElement("td");
          var td1 = document.createElement("td1");
          var td2 = document.createElement("td2");
          var td3 = document.createElement("td3");
          var td4 = document.createElement("td4");
          var td5 = document.createElement("td5");
          td.innerHTML = ele.val().user;
          td1.innerHTML = ele.val().number;
          td2.innerHTML = ele.val().mail;
          td5.innerHTML = ele.val().blood;
          td3.innerHTML = ele.val().city;
          td4.innerHTML = ele.val().state;
          document.getElementById("root").append(td);
          document.getElementById("root").append(td1);
          document.getElementById("root").append(td2);
          document.getElementById("root").append(td3);
          document.getElementById("root").append(td4);
          document.getElementById("root").append(td5);

          document.getElementById("root").appendChild(br);
        }
      });
    })
    .then((onResolved) => {
      document.getElementById("container").style.display = "none";
    });
}
