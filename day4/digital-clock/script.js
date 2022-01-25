let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let meridian = document.querySelector("#meridian");
let calender = document.querySelector(".calender");

setInterval(() => updateTime(), 1000);

function updateTime() {
	let date = new Date();

	date.getHours() > 12
		? (hour.textContent = `${date.getHours() - 12}`)
		: (hour.textContent = `${date.getHours()}`);

	date.getMinutes() < 10
		? (minute.textContent = `0${date.getMinutes()}`)
		: (minute.textContent = `${date.getMinutes()}`);

	date.getSeconds() < 10
		? (second.textContent = `0${date.getSeconds()}`)
		: (second.textContent = `${date.getSeconds()}`);

	date.getHours() >= 12
		? (meridian.textContent = "PM")
		: (meridian.textContent = "AM");

	updateCalender(date);
}

function updateCalender(date) {
	var month = date.getMonth();
	var dayOfMonth = date.getDate();
	var year = date.getFullYear();
	var day = date.getDay();

	switch (month) {
		case 0:
			month = "Jan";
			break;
		case 1:
			month = "Feb";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "Aug";
			break;
		case 8:
			month = "Sep";
			break;
		case 9:
			month = "Oct";
			break;
		case 10:
			month = "Nov";
			break;
		case 11:
			month = "Dec";
			break;
	}

	switch (day) {
		case 0:
			day = "Sun";
			break;
		case 1:
			day = "Mon";
			break;
		case 2:
			day = "Tue";
			break;
		case 3:
			day = "Wed";
			break;
		case 4:
			day = "Thu";
			break;
		case 5:
			day = "Fri";
			break;
		case 6:
			day = "Sat";
			break;
	}

	calender.textContent = `${day}, ${month} ${dayOfMonth} ${year}`;
}