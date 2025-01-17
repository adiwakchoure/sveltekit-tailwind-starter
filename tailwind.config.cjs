const { fontFamily, screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
				serif: ['Didot', ...fontFamily.sans],
			}
		}
	},
	daisyui: {
		themes: [
		  "corporate",
		],
	},
	plugins: [require('@tailwindcss/forms'), require("daisyui")]
};
