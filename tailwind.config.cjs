/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      white: "#fff",
      black: "#000",
      gray:{
        100: "#f6f6f5",
        400: "#898d94",
        500: "#6d6e70"
      },
      orange: "#ff7348",
      green: "#97D044",
    }
  },
  plugins: [],
}
