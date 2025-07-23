/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        iran: ["IRANSansWebFaNum", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
