/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: { 'max': '500px' },
        tab: { 'min': '501px', 'max': '800px' },
        tabXl: { 'min': '801px', 'max': '1000px' },
        desk: { 'min': '1001px', 'max': '1200px' },
        deskXl: { 'min': '1201px' },
        deskXXl: { 'min': '1201px', 'max': '1370px' },
      },
    },
  },
  plugins: [],
}

