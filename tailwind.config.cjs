/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#151312',
        'card-dark': '#1e1c1b',
        'card-lighter': '#2a2827',
        orange: {
          DEFAULT: '#f46c38',
          light: '#f8845a',
        },
        lime: {
          DEFAULT: '#c5ff41',
          dark: '#a8e02b',
        },
        muted: '#998f8f',
        'muted-light': '#b6b4bd',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['110px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-md': ['86px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-sm': ['52px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'section': ['78px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'section-md': ['62px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'section-sm': ['36px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'subtitle': ['30px', { lineHeight: '1.2' }],
        'subtitle-sm': ['24px', { lineHeight: '1.2' }],
        'body-lg': ['25px', { lineHeight: '1.4' }],
        'body': ['18px', { lineHeight: '1.5' }],
        'body-sm': ['16px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'card': '10px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section': '82px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
