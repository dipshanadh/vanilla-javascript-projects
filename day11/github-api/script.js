let input = document.getElementById("input"),
	img = document.querySelector("img"),
	fullName = document.getElementById("name"),
	email = document.getElementById("email"),
	bio = document.getElementById("bio"),
	company = document.getElementById("company"),
	website = document.getElementById("website"),
	twitterUsername = document.getElementById("twitter"),
	publicRepos = document.getElementById("public-repos"),
	followers = document.getElementById("followers"),
	following = document.getElementById("following"),
	joinedAt = document.getElementById("joined-at");

document.querySelector("form").addEventListener("submit", getDetails);

async function getDetails(e) {
	e.preventDefault();
	let url = `https://api.github.com/users/${input.value.toLowerCase()}`;
	let response = await fetch(url);
	let details = await response.json();
	updateDOM(details);
}

function updateDOM(details) {
	document.querySelector(".details").style.display = "block";
	img.src = details.avatar_url;
	fullName.textContent = details.name;
	details.email !== null
		? (email.textContent = details.email)
		: email.parentElement.remove();
	details.email !== null
		? (company.textContent = details.email)
		: company.parentElement.remove();
	bio.textContent = details.bio;
	website.innerHTML = `<a href = "${details.blog}">${details.blog}`;
	twitterUsername.innerHTML = `<a href = "https://twitter.com/${details.twitter_username}">${details.twitter_username}`;
	publicRepos.textContent = details.public_repos;
	followers.textContent = details.followers;
	following.textContent = details.following;
	joinedAt.textContent = details.created_at.slice(0, -10);
}
