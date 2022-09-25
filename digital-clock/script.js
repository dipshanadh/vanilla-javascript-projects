const hour = document.querySelector(".hour"),
	minute = document.querySelector(".minute"),
	second = document.querySelector(".second"),
	meridian = document.querySelector("#meridian"),
	calender = document.querySelector(".calender")

setInterval(() => updateTime(), 1000)

function updateTime() {
	const date = new Date()

	let hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds()

	meridian.textContent = hours > 12 ? "PM" : "AM"

	hours = hours > 12 ? hours - 12 : hours

	hour.textContent = hours.toString().padStart(2, "0")
	minute.textContent = minutes.toString().padStart(2, "0")
	second.textContent = seconds.toString().padStart(2, "0")

	calender.textContent = date.toLocaleDateString("en-us", {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	})
}
