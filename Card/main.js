if (window.localStorage.getItem("id") == undefined) {
	window.localStorage.setItem("id", 1);
}

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

function formReset() {
	document.getElementById('category').value = "0";
	document.getElementById('title').value = "";
	document.getElementById('desc').value = "";
	document.getElementById(imgCon).style.border = "none"
	imgCon = undefined;
}

function fetchData() {
	var category = document.getElementById('category');
	var title = document.getElementById('title');
	var desc = document.getElementById('desc');
}

// var img1, img2, img3, img4, img5, img6;

// for (var i = 0; i < arrImages.length; i++) {
// 	arrImages[i] = document.getElementById(i+1);
// 	arrImages[i].addEventListener("click", () => {
// 		selection(arrImages[i]);
// 		imgCon = arrImages[i].id;
// 	})
// }

var img1 = document.getElementById('1');
var img2 = document.getElementById('2');
var img3 = document.getElementById('3');
var img4 = document.getElementById('4');
var img5 = document.getElementById('5');
var img6 = document.getElementById('6');

var arrImages = [img1, img2, img3, img4, img5, img6];

function selection(ele) {
	for (var i = 0; i < arrImages.length; i++) {
		if (arrImages[i] == ele) {
			ele.style.border = "2px solid black";
			console.log(ele);
			continue;
		}
		arrImages[i].style.border = "none";
		console.log(ele);
	}
}

var imgCon;
var arrImg = ["./images/card3/1.jpeg", "./images/card3/2.jpeg", "./images/card3/3.jpeg", "./images/card3/4.jpeg", "./images/card3/5.jpeg", "./images/card3/6.jpeg"];

img1.onclick = () => {
	imgCon = img1.id;
	selection(img1);
};

img2.onclick = () => {
	imgCon = img2.id;
	selection(img2);
};

img3.onclick = () => {
	imgCon = img3.id;
	selection(img3);
};

img4.onclick = () => {
	imgCon = img4.id;
	selection(img4);
};

img5.onclick = () => {
	imgCon = img5.id;
	selection(img5);
};

img6.onclick = () => {
	imgCon = img6.id;
	selection(img6);
};

document.getElementById('submit').onclick = () => {
	fetchData();
	if (category.value == "" || title.value == "" || desc.value == "" || imgCon == undefined ){
		alert("Enter valid value.");
	} else {
		var id = parseInt(window.localStorage.getItem("id"));
		window.localStorage.setItem("category" + id, category.value);
		window.localStorage.setItem("title" + id, title.value);
		window.localStorage.setItem("desc" + id, desc.value);
		window.localStorage.setItem("imgCon" + id, imgCon);

		compo(arrImg[window.localStorage.getItem("imgCon" + id) - 1], window.localStorage.getItem("category" + id), window.localStorage.getItem("title" + id), window.localStorage.getItem("desc" + id));

		id = id + 1;
		window.localStorage.setItem("id", id);

		formReset();
	}
};

function loadCards() {
	var id = parseInt(window.localStorage.getItem("id"));
	for (var i = 1; i < id; i++) {
		compo(arrImg[window.localStorage.getItem("imgCon" + i) - 1], window.localStorage.getItem("category" + i), window.localStorage.getItem("title" + i), window.localStorage.getItem("desc" + i));
	}
}