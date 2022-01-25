// local reviews data
const reviews = [
	{
		id: 1,
		name: "susan smith",
		job: "web developer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

// selecting all the required elements
const img = document.getElementById("img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");

// selecting the buttons
const prevBtn = document.querySelector("#btnPrev");
const nextBtn = document.querySelector("#btnNext");

// set starting to
let count = 0;

// set default value when the page loads
document.addEventListener("DOMContentLoaded", data);

// adding an event listener to prevBtn and nextBtn
nextBtn.addEventListener("click", update);
prevBtn.addEventListener("click", update);

// data function to reduce code
function data() {
	item = reviews[count];
	img.src = item.img;
	name.textContent = item.name;
	job.textContent = item.job;
	text.textContent = item.text;
}

// defining the function to update the information when any button is clicked
function update(e) {
	// if next btn is clicked, increase the count
	if (e.target.parentElement == nextBtn) {
		if (count + 1 == reviews.length) {
			count = 0;
		} else {
			count++;
		}
		// if prev btn is clicked, decrease the count
	} else if (e.target.parentElement == prevBtn) {
		if (count == 0) {
			count = reviews.length - 1;
		} else {
			count--;
		}
	}

	// now update the data
	data();
}
