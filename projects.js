const projects = [
	{
		name: "Navigation Footer And LightDark Mode",
		link: "Navigation-Footer-and-LightDark-mode",
	},
	{
		name: "Advice Generator",
		link: "advice-generator",
	},
	{
		name: "Background Color Switcher",
		link: "background-color-switcher",
	},
	{
		name: "Color Flipper",
		link: "color-flipper",
	},
	{
		name: "Contact Us",
		link: "contact-us",
	},
	{
		name: "Countdown Timer",
		link: "countdown-timer",
	},
	{
		name: "Digital Clock",
		link: "digital-clock",
	},
	{
		name: "Faq Accordion",
		link: "faq-accordion",
	},
	{
		name: "Filter Menu",
		link: "filter-menu",
	},
	{
		name: "Github User Finder",
		link: "github-user-finder",
	},
	{
		name: "Input Separator",
		link: "input-separator",
	},
	{
		name: "Newletter",
		link: "newletter",
	},
	{
		name: "Pomodoro Timer",
		link: "pomodoro-timer",
	},
	{
		name: "Random Joke Generator",
		link: "random-joke-generator",
	},
	{
		name: "Stopwatch",
		link: "stopwatch",
	},
	{
		name: "Todo Lister",
		link: "todo-lister",
	},
	{
		name: "Url Shortener",
		link: "url-shortener",
	},
	{
		name: "Years Facts App",
		link: "years-facts-app",
	},
];

const container = document.getElementById("projects");

container.innerHTML = projects
	.map(
		project =>
			`
<div
	class="h-48 rounded-2xl flex justify-center items-center relative bg-[url('./screenshots/${project.link}.png')] bg-cover bg-center"
>
	<div
		class="w-full h-full absolute top-0 left-0 bg-black opacity-50"
	></div>

	<p class="drop-shadow-md">${project.name}</p>

	<a
		href="./${project.link}/index.html"
		class="absolute right-4 top-4 px-2 py-1 bg-orange roundetext-white text-sm font-semibold hover:underline underline-offset-2"
	>
		See live
	</a>
</div>
`
	)
	.join("");
