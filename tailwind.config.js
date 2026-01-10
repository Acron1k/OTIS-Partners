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
          DEFAULT: '#B35C44', // Терракотовый
          50: '#fbf5f3',
          100: '#f6ebe7',
          200: '#edd8d1',
          300: '#dfbaae',
          400: '#ca907f',
          500: '#b35c44',
          600: '#a3503b',
          700: '#874232',
          800: '#6c362a',
          900: '#592f25',
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
