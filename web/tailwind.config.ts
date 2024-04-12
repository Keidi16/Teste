/** @type {import('tailwindcss').Config} */

const colors = {
  'light-bg': '#FAFAFA',
  'dark-bg': '#111111'
}

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        ...colors
      },
    },
    fontFamily: {
      default: ['"Poppins", sans-serif'],
    },
  },
  plugins: [],
}

