/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#333333',
        dark: {
          primary: '#ffffff',
          secondary: '#e5e5e5',
          background: '#1a1a1a',
          surface: '#2d2d2d',
        },
        light: {
          primary: '#000000',
          secondary: '#333333',
          background: '#ffffff',
          surface: '#f5f5f5',
        }
      },
      animation: {
        'typing': 'blink 1s step-end infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} 