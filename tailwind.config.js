/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif']
      },
      colors:
      {
        'primary2': '#404040',
        'zinc': '#f4f4f5',
        'zinc-200': '#e4e4e7',
        'zinc-300': '#d4d4d8'
      }
      
    },
  },
  plugins: [],
}