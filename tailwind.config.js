/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#B35C44', // Terracotta
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
          50: '#FAF9F6', // Bone / Off-white
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
        tighter: '-0.05em',
        tight: '-0.025em',
        widest: '0.2em',
      },
      backgroundImage: {
        'grain': "url('https://grain-y.com/images/grain.png')",
      }
    },
  },
  plugins: [],
}
