// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '5rem',
          xl: '7rem',
          '2xl': '8rem',
        },
        screens: {
          sm: '600px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1440px',
        },
      },
    },
}