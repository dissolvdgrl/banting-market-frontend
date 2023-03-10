/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'script': ['Bad Script', 'sans-serif']
      },
      colors: {
        'dark-green': '#7ba982'
      },
      gridTemplateColumns: {
        '1-3': '1fr 3fr;'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
