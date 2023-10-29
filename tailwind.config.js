const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			width: {
				69: '17rem',
				'half-plus': '57%',
			},
			height: {
				69: '17rem',
			},
			colors: {
				'gray-title': '#CCC',
				'gray-item': '#A7A7A7',
				'gray-bg': '#191919',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans'],
				dmsans: ['DM Sans', 'mono'],
			},
		},
	},
	plugins: [],
}
