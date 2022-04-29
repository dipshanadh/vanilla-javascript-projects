let jokeDiv = document.querySelector("#jokeDiv");
const button = document.querySelector("#getJoke");

window.addEventListener("DOMContentLoaded", () => getJoke());
button.addEventListener("click", () => getJoke());

function getJoke() {
	let xhr = new XMLHttpRequest();
	let url = "https://api.chucknorris.io/jokes/random";

	xhr.open("GET", url, true);
	xhr.send();

	xhr.onreadystatechange = function () {
		if (this.readyState < 4) {
			jokeDiv.innerHTML = "Loading...";
		} else if (this.status == 200 && this.readyState == 4) {
			let data = JSON.parse(this.responseText);
			jokeDiv.textContent = `${data.value}`;
		} else if (this.status !== 200) {
			jokeDiv.textContent = `Error ${this.status}: ${this.statusText}`;
		}
	};

	xhr.onerror = function () {
		jokeDiv.textContent = "There was error fetching the data.";
	};
}
