/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway']
      },
      // colors: {
      //   "orange": "#F07E22",
      //   "brightBlue": "#0A59F3",
      // }
    },
  },
  plugins: [],
}
