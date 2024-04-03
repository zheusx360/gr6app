/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/tailwind/native');
const colors = require('./src/themes/colors.json');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [nativewind()],
};
