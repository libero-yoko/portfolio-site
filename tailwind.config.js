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
        yellow: '#f8ecc7',
      },
      backgroundImage: {
        'green-dots': "url('/img/watercolor-green-s.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade: {
          '0% ': { opacity: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-out 1',
        'fade-in': 'fade 0.75s ease-in',
      },
    },
  },
  plugins: [],
}
