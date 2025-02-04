// tailwind.config.js
module.exports = {
    purge: [],
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        gridTemplateColumns: {
          '70/30': '70% 28%',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }