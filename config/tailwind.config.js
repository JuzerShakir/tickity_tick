const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./public/*.html",
		"./app/helpers/**/*.rb",
		"./app/javascript/**/*.js",
		"./app/views/**/*.{erb,haml,html,slim}",
		"./app/assets/stylesheets/**/*.css",
	],

	theme: {
		fontFamily: {
			sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				// Fuchsia
				primary: {
					50: "#fdf4ff",
					100: "#fae8ff",
					200: "#f5d0fe",
					300: "#f0abfc",
					400: "#e879f9",
					500: "#d946ef",
					600: "#c026d3",
					700: "#a21caf",
					800: "#86198f",
					900: "#701a75",
					950: "#4a044e",
				},
				// Purple
				secondary: {
					50: "#faf5ff",
					100: "#f3e8ff",
					200: "#e9d5ff",
					300: "#c4b5fd",
					400: "#c084fc",
					500: "#a855f7",
					600: "#9333ea",
					700: "#7e22ce",
					800: "#6b21a8",
					900: "#581c87",
					950: "#3b0764",
				},
			},
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/container-queries"),
	],
};
