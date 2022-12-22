/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif']
      },
      colors: {
        green: '#637a5f',
        yellow: '#f8ecc7',
        pink: '#B84B62'
      },
      backgroundImage: {
        'green-dots': "url('/img/watercolor-green-s.jpg')"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        pulse: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '.3' }
        },
        slideup: {
          '0%': { transform: 'translateY(75%)' },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-out 1',
        'fade-in': 'fade 0.75s ease-in',
        hoverup: 'slideup 0.5s ease-in-out forwards',
        pulse: 'pulse 0.75s ease-in'
      }
    }
  },
  plugins: []
}
