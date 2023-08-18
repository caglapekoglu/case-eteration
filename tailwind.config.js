/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#2A59FE",
        "secondary":"rgba(51, 51, 51, 0.70)",
        "primary-bg":"#F9F9F9"
      }
    },
  },
  plugins: [],
}

