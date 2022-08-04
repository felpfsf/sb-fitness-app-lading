/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sbPallet: {
          bgBlack: '#0D0D0E',
          cardBg: '#181818',
          accent: '#FA3A10',
          hover: '#C4C4C4'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
