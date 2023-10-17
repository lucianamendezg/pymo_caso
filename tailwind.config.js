/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    colors: {
      'blue':'#1D22DC',
      'pink': '#B96493',
      'red': '#C55042',
      'orange': '#E28E25',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    extend: {
      fontFamily: {
        agoraSans: ['agora-sans'],
        filson: ['filson'],
        agoraSlab: ['agora-slab'],
      },
      colors: {
        'light-blue': '#5C7DF3'
      },
    },
  },
  plugins: [],
}

