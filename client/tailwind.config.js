/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mygray: "#0d0e0f",
        myblack: "#000305", // your custom background color
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sixcaps: ['"Six Caps"', "sans-serif"],
      },
      backgroundImage: {
        "hero-img": "url('./assets/images/g1.png')",
        stars: "url('./assets/images/stars.jpg')",
      },
    },
  },
  plugins: [],
};
// 0d0e0f
