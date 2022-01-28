// -- selecting the required elements --
const input = document.getElementById("input"),
	detialsSection = document.querySelector(".details"),
	img = document.querySelector("img"),
	fullName = document.getElementById("name"),
	email = document.getElementById("email"),
	bio = document.getElementById("bio"),
	company = document.getElementById("company"),
	website = document.getElementById("website"),
	userLocation = document.getElementById("location"),
	twitterUsername = document.getElementById("twitter"),
	publicRepos = document.getElementById("public-repos"),
	followers = document.getElementById("followers"),
	following = document.getElementById("following"),
	joinedAt = document.getElementById("joined-at"),
	alert = document.querySelector(".alert"),
	warning = document.querySelector(".warning");

// adding an event listener to the form which will call getDetails
document.querySelector("form").addEventListener("submit", getDetails);

async function getDetails(e) {
	// preventing the form from submitting
	e.preventDefault();
	// adding some form validation
	if (input.value == "") {
		warning.style.display = "block";
		setTimeout(() => (warning.style.display = "none"), 3000);
	} else {
		// getting the username from the user, converting it to lowercase and putting it in the url
		let url = `https://api.github.com/users/${input.value.toLowerCase()}`;
		// fetch the data from the url and save in "response"
		let response = await fetch(url);
		// if response status is ok
		if (response.ok) {
			// read the response and return as json
			let details = await response.json();
			// and update the DOM using the updateDOM function
			updateDOM(details);
		} else {
			// catching the error if any occurs
			if (detialsSection !== null) {
				detialsSection.style.display = "none";
				alert.style.display = "block";
			} else {
				alert.style.display = "block";
			}
			setTimeout(() => (alert.style.display = "none"), 3000);
		}
	}
}

function updateDOM(details) {
	// removing the alert if it is there
	alert.style.display = "none";
	// changing the details section to display block which was previously none
	detialsSection.style.display = "block";
	img.src = details.avatar_url;
	fullName.innerHTML = `<a href="${details.html_url}" target="_blank" style="text-decoration: none">${details.name}</a>`;
	// display the email if it is not null else remove that section
	details.email !== null
		? (email.textContent = details.email)
		: email.parentElement.remove();
	// display the company name if it exists else remove that section
	details.company !== null
		? (company.textContent = details.company)
		: company.parentElement.remove();
	details.bio !== null
		? // display the bio if it is not null else remove the bio section
		  (bio.textContent = details.bio)
		: bio.parentElement.remove();
	// display the webiste url if it exists, if not remove that section
	details.blog !== ""
		? (website.innerHTML = `<a href = "${details.blog}" target="_blank">${details.blog}</a>`)
		: website.parentElement.remove();
	// same for this twitter username
	details.twitter_username !== null
		? (twitterUsername.innerHTML = `<a href = "https://twitter.com/${details.twitter_username}" target="_blank">@${details.twitter_username}`)
		: twitterUsername.parentElement.remove();
	userLocation.textContent = details.location;
	publicRepos.textContent = details.public_repos;
	followers.textContent = details.followers;
	following.textContent = details.following;
	// using slice to trim the unnecessary characters, like 2020-12-25T09:04:41Z will be only 2020-12-25
	joinedAt.textContent = details.created_at.slice(0, -10);
}
