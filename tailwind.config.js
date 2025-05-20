/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",  // Add JSX files if not already present
  ],
  animation: {
    'gradient-spin': 'gradient 6s linear infinite',
  },
  keyframes: {
    gradient: {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}