let modal = document.querySelector(".modal");
let openButton = document.querySelector(".open");
let closeButton = document.querySelector(".close");
let body = document.querySelector("body");

openButton.addEventListener("click", showModal);

closeButton.addEventListener("click", closeModal);

setTimeout(() => showModal(), 10000);

function showModal() {
	modal.style.display = "grid";
	body.style.background = "rgba(0, 0, 0, 0.01)";
}

function closeModal() {
	modal.style.display = "none";
	body.style.background = "#fef6e4";
}