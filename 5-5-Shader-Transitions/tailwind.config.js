/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik Doodle Shadow", "sans-serif"],
        sans: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
