/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Goldman", "cursive"],
        text: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
