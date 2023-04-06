/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        raleway: "Raleway",
        poppins: "Poppins",
        righteous: "Righteous",
        unbounded: "Unbounded",
      },
      colors: {
        bluey: "#10101a",
      },
      maxWidth: {
        content: "max-content",
      },
    },
  },
  plugins: [],
};
