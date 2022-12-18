/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				NunitoSans: ['Nunito Sans, sans-serif'],
			},
			colors: {
				dModeElements: 'hsl(209, 23%, 22%)',
				dModeBackground: 'hsl(207, 26%, 17%)',
				lModeText: 'hsl(200, 15%, 8%)',
				lModeInput: 'hsl(0, 0%, 52%)',
				lModeBackground: 'hsl(0, 0%, 98%)',
				dMTextLModeElements: 'hsl(0, 0%, 100%)',
			},
		},
	},
	plugins: [],
};
