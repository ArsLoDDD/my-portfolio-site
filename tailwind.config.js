const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			width: {
				69: '17rem',
				76: '19rem',
				'half-plus': '57%',
			},
			height: {
				69: '17rem',
				120: '30rem',
			},
			colors: {
				'gray-title': '#CCC',
				'gray-item': '#A7A7A7',
				'gray-bg': '#191919',
				'gray-bg-item': '#363636',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans'],
				dmsans: ['DM Sans', 'mono'],
			},
		},
	},
	plugins: [],
}
