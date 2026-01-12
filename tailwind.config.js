/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FEC900', // Желтый (фирменный OTIS)
          50: '#FEFDF2',
          100: '#FEFBE6',
          200: '#FEF7C9',
          300: '#FEF39C',
          400: '#FEEE00',
          500: '#FEC900',
          600: '#E6B400',
          700: '#C29300',
          800: '#9E7600',
          900: '#7A5900',
        },
        sand: {
          50: '#FAF9F6', // Кость
          100: '#F2F0E9',
          200: '#E5E0D1',
          300: '#D1C8B0',
        },
        charcoal: {
          DEFAULT: '#121212',
          800: '#1A1A1A',
          900: '#0A0A0A',
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.01em',
        widest: '0.1em',
      }
    },
  },
  plugins: [],
}
