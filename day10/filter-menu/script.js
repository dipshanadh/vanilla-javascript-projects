// -- querySelectors start --
let input = document.querySelector("input");
let item = document.querySelectorAll(".item");
let filterItems = document.querySelectorAll(".filter-items");
// -- querySelectors end

// -- event listeners start ---
input.addEventListener("keyup", keyFilter);
filterItems.forEach(el => el.addEventListener("click", filter));
document.querySelector("form").addEventListener("submit", keyFilter);
// -- event listeners end --

// -- functions start --
function filter(e) {
    input.value = "";
	let toFilter = e.target.textContent;
	toFilter == "all"
		? item.forEach(el => (el.style.display = "flex"))
		: item.forEach(el => el.classList.contains(toFilter) ? (el.style.display = "flex") : (el.style.display = "none"))
}

function keyFilter(e) {
    e.preventDefault();
    var text = input.value.toLowerCase();
    item.forEach(el => {
        let itemName = el.children[1].textContent;
        itemName.toLowerCase().indexOf(text) != -1
            // display if it matches
			? el.style.display = "flex"
            // don't display if not matches
			: el.style.display = "none";
    })
}
// -- functions end --