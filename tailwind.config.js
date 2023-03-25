/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "orange-500": "#F07E22",
        "brightBlue": "#0A59F3",
        "textColor" : "#010101",
        "overlay": "#343434bf",
      }
    },
  },
  plugins: [
        require('flowbite/plugin')
    ],
}
