/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#637a5f',
        yellow: '#f8ecc7'
      },
      backgroundImage: {
        'green-dots': "url('/img/watercolor-green-s.jpg')",
      },
    },
  },
  plugins: [],
}
