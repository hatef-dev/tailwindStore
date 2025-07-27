// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
      container: {
        center: true,
        padding: {
          sm: '0.5px',
          md: '1rem',
          lg: '8rem',
          xl: '10rem',
          '2xl': '12.5rem',
        },
        screens: {
          sm: '300px',
          md: '600px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1440px',
        },
      },
      screens: {
        sm: '300px',
        md: '600px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
      },
    },
}