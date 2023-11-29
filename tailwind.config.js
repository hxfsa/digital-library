/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#F4F2F2",
        primaryDark: "#9837A3",
      },

      
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        script: ["RougeScript", "sans-serif"],
      },

    },
  },
  plugins: [],
};
