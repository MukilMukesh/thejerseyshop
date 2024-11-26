/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ['Myriad Pro Regular', 'Inter', 'Arial', 'sans-serif'], // Define the sans-serif stack
        placeholder: ['Myriad Pro Regular', 'Inter', 'Arial', 'sans-serif'], // Define the sans-serif stack
      },
    },
  },
  plugins: [],
};
