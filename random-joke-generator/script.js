const jokeDiv = document.querySelector("#jokeDiv"),
	button = document.querySelector("#getJoke")

button.addEventListener("click", getJoke)

function getJoke() {
	const xhr = new XMLHttpRequest(),
		url = "https://api.chucknorris.io/jokes/random"

	xhr.open("GET", url, true)
	xhr.send()

	xhr.onreadystatechange = function () {
		if (this.readyState < 4) {
			jokeDiv.innerHTML = "Loading..."
		} else if (this.status == 200 && this.readyState == 4) {
			const data = JSON.parse(this.responseText)
			jokeDiv.textContent = `${data.value}`
		} else if (this.status !== 200) {
			jokeDiv.textContent = `Error ${this.status}: ${this.statusText}`
		}
	}

	xhr.onerror = () => {
		jokeDiv.textContent = "There was error fetching the data."
	}
}

getJoke()
