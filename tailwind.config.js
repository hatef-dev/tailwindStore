// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '8rem',
          xl: '10rem',
          '2xl': '12.5rem',
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