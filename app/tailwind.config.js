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
        bgWhite: '#f5f5ff',
        accentBlack: '#242423'
      },
      margin: {
        '1/8': '12.5%'
      },
      padding:{
        '1/8': '12.5%'
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
        },
        showSocial: {
          '0%': {transform: 'scale(0.8)',opacity:0},
          '100%': { transform: 'scale(1)', opacity:1}
        },
        showPulse :{
          "0%": {
            boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.2)"
          },
          "100%": {
            boxShadow: "0 0 0 20px rgba(0, 0, 0, 0)"
          }
        }
      },
      animation: {
        expandLine: 'expandLine 0.65s ease-out 1.3s forwards',
        moveTextDown: 'moveTextDown 0.65s ease-out forwards',
        moveTextUp: 'moveTextUp 0.65s ease-out 0.65s forwards',
        showSocial: 'showSocial 0.5s ease-out 1.3s forwards',
        showPulse: 'showPulse 1.5s 1.6s infinite;' 
      },
      width: {
        '1/8': "12.5%"
      },
      inset: {
          '1/5': "20%"
      },
      boxShadow: {
        innerShadow: "inset 0 8px 16px 0 rgb(0 0 0 / 0.05);"
      },
      height: {
        third: "33%"
      }
    },
  },
  plugins: [],
}
