function openCreate() {
	var home = document.getElementById("home");
	home.style.display = "none";

	var create = document.getElementById("create");
	create.style.display = "unset";
}

document.querySelector(".btn").onclick = openCreate;

function openHome() {
	var home = document.getElementById("home");
	home.style.display = "unset";

	var create = document.getElementById("create");
	create.style.display = "none";
}

document.querySelector(".back").onclick = openHome;