const pokedex = "src/images/pokedex.png";
const snazzysnacks = "src/images/snazzysnacks.png";
const scheduler = "src/images/scheduler.png";
const resourcewall = "src/images/resourcewall.png";
const tweeter = "src/images/tweeter.png";
const weather = "src/images/weather.png";
const portfoliov1 = "src/images/portfoliov1.png";

export const projects = [
	{
		id: 1,
		title: "Pokedex",
		description:
			"Pokedex is a fully responsive single-page app that allows users to search for pokemon in the entire pokemon directory. Users can filter their search by pokemon type as well. This project is built using Next.js, Axios, PokeAPI and Tailwind CSS.",
		skills: ["HTML5", "CSS3", "Next.js", "React.js", "Javascript", "API"],
		image: {
			src: pokedex,
			alt: "Pokedex thumbnail",
		},
		links: {
			github: "https://github.com/thekatcodes/pokedex",
		},
	},
	{
		id: 2,
		title: "Snazzy Snacks",
		description:
			"Snazzy Snacks is a full-stack React app that offers monthly subscriptions of randomized snack selections based on three tiers. This project was built in a team environment for the final project at Lighthouse Labs. This project is built with React, React-Router-Dom, Axios, SweetAlert2, SCSS, Node.js, Express, PostgreSQL, Stripe, Bcrypt and designed with Figma.",
		skills: [
			"HTML5",
			"CSS3",
			"SASS",
			"Javascript",
			"React.js",
			"React-Router",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"Stripe",
			"Bcrypt",
			"Figma",
		],
		image: {
			src: snazzysnacks,
			alt: "Snazzy Snacks thumbnail",
		},
		links: {
			github: "https://github.com/thekatcodes/snazzy-snacks",
		},
	},
	{
		id: 3,
		title: "Snazzy Snacks",
		description:
			"A single-page app that allows users to book interviews. It makes requests to an provided API with Axios to fetch and store appointment data from a database. This project is built with React.js, Axios, SCSS and tested using Storybook, Jest and Cypress.",
		skills: [
			"HTML5",
			"CSS3",
			"SASS",
			"Javascript",
			"React.js",
			"Node.js",
			"API",
			"Storybook",
			"Jest",
			"Cypress",
		],
		image: {
			src: scheduler,
			alt: "Interview Scheduler thumbnail",
		},
		links: {
			github: "https://github.com/thekatcodes/scheduler",
		},
    },
    {
		id: 4,
		title: "Resource Wall",
		description:
			"A full-stack app built in a team environment for the Lighthouse Labs midterm project. This app allow learners to save learning resources in a central place that is publicly available to any user. This project is designed with Figma and built with HTML, SCSS, Bootstrap, Javascript, jQuery, Node.js, Express and PostgreSQL.",
		skills: [
			"HTML5",
			"CSS3",
			"SASS",
			"Bootstrap",
			"Javascript",
			"React.js",
			"jQuery",
			"Node.js",
			"Express",
			"PostgreSQL",
		],
		image: {
			src: resourcewall,
			alt: "Resource Wall thumbnail",
		},
		links: {
			github: "https://github.com/thekatcodes/resource-wall",
		},
    },
    {
		id: 5,
		title: "Tweeter",
		description:
        "A simple, single-page Twitter clone. A particular attention was put on the UI of this web page. This project was built upon a provided server-side starter code with the goal of implementing client-side functionality. This project is built using jQuery, JS, AJAX, HTML, CSS, Node, Express and is responsive across desktop and mobile platforms.",
		skills: [
			"HTML5",
			"CSS3",
			"Javascript",
			"Ajax",
			"jQuery",
			"Node.js",
			"Express",
		],
		image: {
			src: tweeter,
			alt: "Tweeter thumbnail",
		},
		links: {
			github: "https://github.com/thekatcodes/tweeter",
		},
	},
];
