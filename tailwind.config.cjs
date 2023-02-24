/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkblue: '#171c73',
      blue: '#1f248c',
      lightgrey: '#bfbfbf',
      grey: '#595959',
      darkgrey: '#262626',
    },
    extend: {
      fontFamily: {
        h1Font: "'Francois One'",
        h2Font: "'Old Standard TT'",
        textFont: "'Old Standard TT'",
      },
      fontSize: {
        h1SizeMobile: '48.83px',
        h1SizeWeb: '120px',
        h2SizeMobile: '31.25px',
        h2SizeWeb: '36px',
        h2SizeWebQuote: '55px',
        pSizeMobile: '16px',
        pSizeWeb: '22px',
      },
      opacity: {
        imgOpacityMobile: '50%',
        imgOpacityWeb: '60%',
      },
      padding: {
        outerPadding: '3rem',
      },

      dropShadow: {
        customShadow: '0 20px 16px rgba(78, 13, 218, 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
