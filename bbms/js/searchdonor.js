var db = firebase.database();

function get_data() {
  var sts = document.getElementById("sts").value;
  var state = document.getElementById("state").value;
  var blood = document.getElementById("blood").value;
  var container = document.getElementById("container").value;

  db.ref("data/")
    .once("value", (value) => {
      console.log(value.val());
      value.forEach((ele) => {
        if (ele.val().sts == sts && ele.val().state == state && blood == blood) {
          var br = document.createElement("br");
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          td.innerHTML = ele.val().user;
          td1.innerHTML = ele.val().number;
          td2.innerHTML = ele.val().mail;
          td3.innerHTML = ele.val().blood;
          td4.innerHTML = ele.val().state;
          td5.innerHTML = ele.val().sts;
          tr.append(td, td1, td2, td3, td4, td5);

          document.getElementById("root").appendChild(tr);
        }

        else {
          // alert("error");
        }
      });
    })
    .then((onResolved) => {
      document.getElementById("container").style.display = "none";
    });
}
