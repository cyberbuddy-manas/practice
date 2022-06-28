function compo(source, category, title, para) {
	var div1 = document.createElement("div");
	div1.className = "card";

	var img = document.createElement("img");
	img.src = source;

	var div2 = document.createElement("div");
	div2.className = "space";

	var h2 = document.createElement("h2");
	h2.innerHTML = category;

	var h1 = document.createElement("h1");
	h1.innerHTML = title;

	var p = document.createElement("p");
	p.innerHTML = para;

	div2.append(h2, h1, p);
	div1.appendChild(img);
	div1.appendChild(div2);

	document.getElementById("root").append(div1);
}

compo("https://fakeimg.pl/300x200", "Food", "How to make Ice-Popsicles at Home", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

function fetchData() {
	var category = document.getElementById('category');
	var title = document.getElementById('title');
	var desc = document.getElementById('desc');
}

var img1 = document.getElementById('1');
var img2 = document.getElementById('2');
var img3 = document.getElementById('3');
var img4 = document.getElementById('4');
var img5 = document.getElementById('5');
var img6 = document.getElementById('6');

var imgCon;
var arrImg = ["./images/card3/1.jpeg", "./images/card3/2.jpeg", "./images/card3/3.jpeg", "./images/card3/4.jpeg", "./images/card3/5.jpeg", "./images/card3/6.jpeg"];

img1.onclick = () => {
	imgCon = img1.id;
	img1.style.border = "2px solid black";
	img2.style.border = "none";
	img3.style.border = "none";
	img4.style.border = "none";
	img5.style.border = "none";
	img6.style.border = "none";
};

img2.onclick = () => {
	imgCon = img2.id;
	img2.style.border = "2px solid black";
	img1.style.border = "none";
	img3.style.border = "none";
	img4.style.border = "none";
	img5.style.border = "none";
	img6.style.border = "none";
};

img3.onclick = () => {
	imgCon = img3.id;
	img3.style.border = "2px solid black";
	img2.style.border = "none";
	img1.style.border = "none";
	img4.style.border = "none";
	img5.style.border = "none";
	img6.style.border = "none";
};

img4.onclick = () => {
	imgCon = img4.id;
	img4.style.border = "2px solid black";
	img2.style.border = "none";
	img3.style.border = "none";
	img1.style.border = "none";
	img5.style.border = "none";
	img6.style.border = "none";
};

img5.onclick = () => {
	imgCon = img5.id;
	img5.style.border = "2px solid black";
	img2.style.border = "none";
	img3.style.border = "none";
	img4.style.border = "none";
	img1.style.border = "none";
	img6.style.border = "none";
};

img6.onclick = () => {
	imgCon = img6.id;
	img6.style.border = "2px solid black";
	img2.style.border = "none";
	img3.style.border = "none";
	img4.style.border = "none";
	img5.style.border = "none";
	img1.style.border = "none";
};

document.getElementById('submit').onclick = () => {
	fetchData();
	if (category.value == "" || title.value == "" || desc.value == "" || imgCon == undefined ){
		alert("Enter valid value.");
	} else {
		window.localStorage.setItem("category", category.value);
		window.localStorage.setItem("title", title.value);
		window.localStorage.setItem("desc", desc.value);
		window.localStorage.setItem("imgCon", imgCon);

		compo(arrImg[window.localStorage.getItem("imgCon") - 1], window.localStorage.getItem("category"), window.localStorage.getItem("title"), window.localStorage.getItem("desc"));

		document.getElementById('category').value = "0";
		document.getElementById('title').value = "";
		document.getElementById('desc').value = "";
		document.getElementById(imgCon).style.border = "none"
		imgCon = undefined;
	}
};

function loadCards() {
	compo(arrImg[window.localStorage.getItem("imgCon") - 1], window.localStorage.getItem("category"), window.localStorage.getItem("title"), window.localStorage.getItem("desc"));
}