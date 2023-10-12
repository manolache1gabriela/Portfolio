/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#10002B',
        'secondary': '#C8B6FF',
        'tertiary': '#9D4EDD'
      },
      fontFamily: {
        // 'poppins': ['Poppins'],
      },
    },
  },
  safelist: [
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
  ],
  plugins: [],
}