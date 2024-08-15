/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        one: "#252525",
        two: "#d9d9d9",
        three: "#6E6E6E",
        four: "#DEDEDE",
        five: "#04AEE8",
        six: "#06DEFA"
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

