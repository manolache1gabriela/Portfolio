/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c1a2e',
        secondary: '#dda955',
        tertiary: '#00509d',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      keyframes: {
        border: {
          '0%': {
            'border-top-left-radius': '60%',
            'border-top-right-radius': '70%',
            'border-bottom-right-radius': '40%',
            'border-bottom-left-radius': '70%',
          },
          '100%': {
            'border-top-left-radius': '70%',
            'border-top-right-radius': '40%',
            'border-bottom-right-radius': '60%',
            'border-bottom-left-radius': '50%',
          },
        },
      },
      animation: {
        border: 'border 5s ease-in-out alternate infinite',
      },
    },
  },
  safelist: [
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
  ],
  plugins: [],
};
