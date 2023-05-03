const pokedex = "src/images/pokedex.png";
const snazzysnacks = "src/images/snazzysnacks.png";
const scheduler = "src/images/scheduler.png";

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
	,
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
];
