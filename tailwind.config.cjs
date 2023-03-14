/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Goldman", "cursive"],
        brand_two: ["EB Garamond", "serif"],
        text: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#121927",
        modalOverlay: "rgba(0, 0, 0, 0.46)",
      },
      letterSpacing: {
        brand: "1.02em",
      },
    },
  },
  plugins: [],
};
