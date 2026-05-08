/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mermaid-blues": "#004177",
        "golden-coin": "#FFDA72",
        "bold-irish": "#208052",
        "munsell-blue": "#009CA9",
        "cracked-pepper": "#4F5253",
        "orange-crush": "#F77930",
        widowmaker: "#98B6F7",
        "prism-pink": "#F495BD",
        mosque: "#00575D",
        vulcanised: "#414344",
      },
      fontFamily: {
        monserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
