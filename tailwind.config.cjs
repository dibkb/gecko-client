/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Goldman", "cursive"],
        text: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#121927",
        modalOverlay: "rgba(98, 98, 98, .72)",
      },
      letterSpacing: {
        brand: "1.02em",
      },
    },
  },
  plugins: [],
};
