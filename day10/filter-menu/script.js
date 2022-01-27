// -- querySelectors  --
let input = document.querySelector("input"), 
    item = document.querySelectorAll(".item"), 
    filterItems = document.querySelectorAll(".filter-items");

// -- event listeners  ---
input.addEventListener("keydown", keyFilter);
filterItems.forEach(el => el.addEventListener("click", filter));
document.querySelector("form").addEventListener("submit", e => e.preventDefault());

// -- functions  --
function filter(e) {
    input.value = "";
	let toFilter = e.target.textContent;
	toFilter == "all"
		? item.forEach(el => (el.style.display = "flex"))
		: item.forEach(el => el.classList.contains(toFilter) ? (el.style.display = "flex") : (el.style.display = "none"))
}

function keyFilter(e) {
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