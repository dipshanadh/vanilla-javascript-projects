const body = document.querySelector("body"),
	span = document.querySelector("span"),
	button = document.querySelector("button")

const array = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9]

function colorFlipper() {
	let hex = "#"

	for (let i = 0; i < 6; i++) {
		hex += array[Math.floor(Math.random() * array.length)]
	}

	body.style.background = hex
	span.textContent = hex
}

colorFlipper()

button.addEventListener("click", colorFlipper)
