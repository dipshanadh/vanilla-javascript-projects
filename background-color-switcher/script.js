let body = document.querySelector("body");
let button = document.querySelectorAll("button");
let elements = document.querySelectorAll("*");
// console.log(elements);

body.addEventListener("click", changeBackground);

function changeBackground(e) {
	// console.log(e.target);

	let className = e.target.className;
	// console.log(className);

	switch (className) {
		case "black":
			body.style.background = "var(--black)";
			changeColor();
			break;
		case "green":
			body.style.background = "var(--green)";
			changeColor();
			break;
		case "blue":
			body.style.background = "var(--blue)";
			changeColor();
			break;
		case "pink":
			body.style.background = "var(--pink)";
			changeColor();
			break;
		case "brown":
            body.style.background = "var(--brown)"
			changeColor();
			break;
	}
}

function changeColor() {
	elements.forEach((element) => {
		element.style.color = "var(--white)";
	});
}
