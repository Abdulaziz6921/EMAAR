/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#071C35",
        secondary: "#777777",
      },
    },
  },
  plugins: [],
};
