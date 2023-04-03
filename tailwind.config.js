/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "978px",
      xll: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
