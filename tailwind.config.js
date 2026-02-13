/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4', // cyan
          dark: '#0891b2',
        },
        secondary: {
          DEFAULT: '#a855f7', // purple
          dark: '#9333ea',
        },
        accent: {
          DEFAULT: '#10b981', // green
          dark: '#059669',
        },
        dark: {
          bg: '#0f172a', // slate-900
          card: '#1e293b', // slate-800
          border: '#334155', // slate-700
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
