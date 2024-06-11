/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    screens: {
      'xxsm': '380px',

      'xsm': '420px',
      // => @media (min-width: 420px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.fade-mask': {
          ' -webkit-mask-image': 'linear-gradient(to bottom, black 50%, transparent 100%)',
          'mask-image': 'linear-gradient(to bottom, black 10%, transparent 100%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

