/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1CBCCF',
        primary_200: '#E8F0F1',
        primary_400: '#c4e9ed',
        gray: '#777F81',
        dark: '#4C5354',
        light: '#fff',
        cadet: '#9AB4B7',
      },
    },
    container: {
      center: true,
    },

  },
  plugins: [],
}

