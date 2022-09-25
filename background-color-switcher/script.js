const body = document.querySelector("body"),
	buttons = document.querySelectorAll("button")

buttons.forEach(
	button => (button.onclick = () => changeColor(button.className))
)

function changeColor(className) {
	body.style.background = `var(--${className})`
	body.style.color = "white"
}
