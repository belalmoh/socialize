const colors = require('tailwindcss/colors');

module.exports = {
	theme: {
		extend: {
			colors: {
				primary: colors.blue
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}