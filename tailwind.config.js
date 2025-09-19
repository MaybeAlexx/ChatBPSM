module.exports = {
  purge: ['./src/**/*.{html,js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#D0021B',
        accent: '#F5A623',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}