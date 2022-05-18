// selecting all the required elements
const form = document.getElementById("addForm"),
	itemList = document.getElementById("items"),
	filter = document.getElementById("filter"),
	deleteAll = document.getElementById("deleteAll")

// all event listeners from here !!
// form submit event
form.addEventListener("submit", addItem)
// delete event
itemList.addEventListener("click", removeItem)
// filter event
filter.addEventListener("keyup", filterItems)
// show the saved items from local storage when the page loads
document.addEventListener("DOMContentLoaded", fetchItems)
// delete all the elements by clicking on the deleteAll button
deleteAll.addEventListener("click", deleteItems)

// all functions from here
// fetch items
function fetchItems() {
	// steps
	// get the items from the localStorage only if there is
	if (JSON.parse(localStorage.getItem("Items") !== null)) {
		let ItemDetails = JSON.parse(localStorage.getItem("Items"))

		// loop the items and show it to UI
		ItemDetails.forEach(function (data) {
			// create new li element
			let li = document.createElement("li")
			// add a class name
			li.className = "list-group-item"
			// add text node with input value
			li.appendChild(document.createTextNode(data))

			// create delete button element
			var deleteBtn = document.createElement("i")
			// adding the class names
			deleteBtn.className =
				"btn btn-danger btn-sm delete fas fa-times float-right"
			// append the button to the li
			li.appendChild(deleteBtn)

			// append li to list
			itemList.appendChild(li)
		})
	}
}

// add item
function addItem(e) {
	// prevent normal condition
	e.preventDefault()

	if (document.querySelector("#item").value !== "") {
		// console.log("ok tested");

		// getting the value of input
		newItem = document.querySelector("#item").value

		// create new li element
		let li = document.createElement("li")
		// add a class name
		li.className = "list-group-item"
		// add text node with input value
		li.appendChild(document.createTextNode(newItem))
		// create delete button element

		// create delete button element
		let deleteBtn = document.createElement("i")
		// adding the class names
		deleteBtn.className =
			"btn btn-danger btn-sm delete fas fa-times float-right"
		// append the button to the li
		li.appendChild(deleteBtn)

		// append li to list
		itemList.appendChild(li)

		// clear the form
		document.querySelector("#item").value = ""

		// show success message

		// create a div for the success message
		const successMessage = document.createElement("div")
		// adding a class name for the success message
		successMessage.className = "bg-primary p-2 mb-3 text-white card"
		successMessage.id = "successMessage"
		// inserting the text content
		successMessage.textContent = "Details added succesfully"
		// adding some styles
		successMessage.style.fontSize = "18px"

		// inserting the success message div before the form element
		document
			.getElementById("main")
			.insertAdjacentElement("beforebegin", successMessage)

		// erasing the success message after ten seconds
		setTimeout(function () {
			if (successMessage !== null) {
				successMessage.remove()
			}
		}, 3000)

		// store it on the localStorage
		if (localStorage.getItem("Items") === null) {
			let arr = []
			arr.push(newItem)

			localStorage.setItem("Items", JSON.stringify(arr))
		} else {
			let arr = []
			arr = JSON.parse(localStorage.getItem("Items"))
			arr.push(newItem)

			localStorage.setItem("Items", JSON.stringify(arr))
		}
	} else {
		if (document.querySelector("#error-message") === null) {
			// to display the error message when form is submitted with any empty fields
			const errEl = document.createElement("div")

			// giving class name to error message element that is errEl
			errEl.id = "error-message"
			// adding a class name for the success message
			errEl.className = "bg-warning p-2 mb-3 text-white card"

			// giving some text content
			errEl.textContent = "Please fill all the fields"

			// inserting the error message before the form
			main.insertAdjacentElement("beforebegin", errEl)

			// erasing the error message after 3 seconds
			setTimeout(function () {
				if (document.querySelector("#error-message") !== null) {
					errEl.remove()
				}
			}, 3000)
		}
	}
}

// remove item
function removeItem(e) {
	if (e.target.classList.contains("delete")) {
		// confirm if user wants to delete it
		// removing the element from the dom
		if (confirm("Are you sure you want to delete ?")) {
			let li = e.target.parentElement
			itemList.removeChild(li)

			// delete data from localStorage

			// first getting all the values of Items
			let Items = JSON.parse(localStorage.getItem("Items"))
			// finding out the property to remove from the local storage
			let toDelete = e.target.parentElement.firstChild.textContent
			// finding out the index of property, so that we can remove it
			var i = Items.indexOf(toDelete)
			//  removing it from the array
			Items.splice(i, 1)
			// finally removing it from the local storage by overwriting items
			localStorage.setItem("Items", JSON.stringify(Items))
		}
	}
}

// filter items
function filterItems(e) {
	// convert everything to lower case
	let text = e.target.value.toLowerCase()
	// get the list items
	let items = itemList.getElementsByTagName("li")
	// convert it to array
	Array.from(items).forEach(function (item) {
		var itemName = item.firstChild.textContent

		if (itemName.toLowerCase().indexOf(text) != -1) {
			// display if it is matched
			item.style.display = "block"
		} else {
			// don't display if not matched
			item.style.display = "none"
		}
	})
}

function deleteItems() {
	let Items = []

	// finally removing it from the local storage by overwriting items
	localStorage.setItem("Items", JSON.stringify(Items))

	location.reload()
}
