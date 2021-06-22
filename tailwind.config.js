module.exports = {
	purge: {enabled: true, content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx']},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'dm-heading': 'DM Serif Text, serif',
				'dm-base': 'DM Sans, sans-serif'
			},
			backgroundImage: {
				'plan-1': "url('../assets/img/plan-1.png')",
				'plan-2': "url('../assets/img/plan-2.png')"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('tailwind-scrollbar')]
}
