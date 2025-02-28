/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['"Roboto"','sans-serif']
      },
      colors:{
        "4f4747":"#4f4747",
        "b7aaaa":"#b7aaaa",
      },
      fontSize:{
        'newproject-input':'15px',
        'savedproject-button':'18px'
      }
    },
  },
  plugins: [],
}

