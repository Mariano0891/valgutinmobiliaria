/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: "#252525",
        two: "#d9d9d9",
        three: "#0260A9",
        four: "#0385CD",
        five: "#04AEE8",
        six: "#06DEFA"
      }
    },
  },
  plugins: [require('daisyui'),],
}

