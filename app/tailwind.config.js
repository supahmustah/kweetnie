/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Lato']
    },
    extend: {
      colors: {
        bgWhite: '#f8f8ff',
        accentBlack: '#242423'
      },
      keyframes: {
        expandLine: {
          '0%': { width: '0%', opacity: 1},
          '100%': { width: '12.5%', opacity: 1}
        },
        moveTextDown: {
          '0%': { transform: 'translateY(-75px)', opacity: 0},
          '100%': { transform: 'translateY(0px)', opacity: 1}
        },
        moveTextUp: {
          '0%': { transform: 'translateY(75px)', opacity: 0},
          '100%': { transform: 'translateY(0px)', opacity: 1}
        }
      },
      animation: {
        expandLine: 'expandLine 0.65s ease-out 1.3s forwards',
        moveTextDown: 'moveTextDown 0.65s ease-out forwards',
        moveTextUp: 'moveTextUp 0.65s ease-out 0.65s forwards'
      },
      width: {
        '1/8': "12.5%"
      }
    },
  },
  plugins: [],
}
