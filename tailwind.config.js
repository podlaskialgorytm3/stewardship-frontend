/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7e007e",
        dark: "#540154",
        ligth: "#b564b5"
      }
    },
  },
  plugins: [],
}