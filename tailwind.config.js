/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        '1/2': '50vh',
        '1/3': '33.333333vh',
        '2/3': '66.666667vh',
        '1/4': '25vh',
        '3/4': '75vh',
        '1/5': '20vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '4/5': '80vh',
        '1/10': '10vh',
        '9/10': '90vh',
        
        
      },
      rotate: {
        '135': '135deg',
        '225': '225deg',
      },
    },
  },
  plugins: [],
}

