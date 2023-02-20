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
      screens:{
        'xxl': '1600px',
      }
    },
  },
  plugins: [],
}
