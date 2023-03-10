/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#6504b5',
				'orange-paw': '#e7470c',
				'purple-paw': '#630abb',
				'yellow-paw': '#e5a62d'
      },
			flex: {
        '2': '2 2 0%'
      },
      screens:{
        'xxl': '1600px',
      },
			fontSize: {
				bgIcon: '50vW',
			},
			boxShadow: {
        'lg-centered': '0 5px 15px -3px rgba(0, 0, 0, 0.2)',
        'xl-centered': '0 5px 25px -5px rgba(0, 0, 0, 0.2)',
      },
			maxWidth: {
        'third': 'calc(100% / 3)',
        'fourth': 'calc(100% / 4)',
      }
    },
  },
  plugins: [],
}
