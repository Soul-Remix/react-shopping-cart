module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      xl: '520px',
    },
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        right: {
          '0%': { width: '0px' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        show: 'show 1s ease-in-out forwards',
        right: 'right 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
