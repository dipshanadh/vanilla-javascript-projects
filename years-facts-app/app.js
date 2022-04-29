let fact = document.querySelector("#fact");
let factText = document.querySelector("#fact-text");
let yearInput = document.querySelector("#yearInput");
let container = document.querySelector(".container");
let hr = document.querySelector("hr");

yearInput.addEventListener("input", getFactFetch);

function getFactFetch() {
	let year = yearInput.value;

	if (year !== "") {
        fetch(`http://numbersapi.com/${year}/year`)
		.then((response) => response.text())
		.then((data) => {
			if (year !== "") {
				fact.style.display = "block";
				hr.style.display = "block";
				container.style.paddingBottom = 0;
				factText.innerText = data;
			}
		})
		.catch((err) => (factText.innerText = err));
    }
}
