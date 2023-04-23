/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			//mobile,tablet portrait
			'sm': '480px',
			// mobile,tablet portrait
			
			// tablet landscape, small laptop
			'md': '768px',
			// tablet landscape, small laptop
			
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			// }
		},
		extend: {
			// backgroundImage: {
			//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			//   'gradient-conic':
			//     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			// },
			colors: {
				'bb-primary-white': 'hsl(0,0,100%)',
				'bb-primary-black': 'hsl(0,0%,0%)',
				'bb-secondary-black': 'hsl(0,0%,75%)',
				'bb-tertiary-black': 'hsl(0,0%,50%)',
				'bb-quaternary-black': 'hsl(0,0%,20%)',
				'bb-quincy-black': 'hsl(180,88.2%,3.3%)',
				'bb-primary-brown': 'hsl(35, 69%, 35%)'
			},
			fontSize: {
				'14': '1.4rem',
				'16': '1.6rem',
				'18': '1.8rem',
				'20': '2rem',
				'24': '2.4rem',
				// '32': '3.2rem',
				'34': '3.432rem',
				'36': '3.6rem',
				// '40': '4rem',
				'48': '4.8rem',
				'56': '5.6rem'
			},
			fontWeight: {
				'30': '300',
				'40': '400',
				'50': '500',
				'80': '800'
			}
		},
	},
	plugins: [],
}
