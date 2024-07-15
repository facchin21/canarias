/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Almarai" : ["Almarai", "sans-serif"],
        "Fugaz" : ["Fugaz One", "sans-serif"],
        "Archivo" : ["Archivo Black", "sans-serif"],

      },
      colors : {
        "primary" : "#01A340",
        "secondary" : "#DFCD84",
        "footer" : "#392F29",
        
      },
      fontSize : {
        '10xl' : '10rem',
        '11xl' : '11rem',
        '12xl' : '12rem',
        '13xl' : '13rem',
        '14xl' : '14rem',
      },
      padding: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

