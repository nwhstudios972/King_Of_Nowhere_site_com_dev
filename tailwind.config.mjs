import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#e8eaf2',
          100: '#cfd2e0',
          900: '#06070b',
          800: '#0b0d14',
          700: '#13161f',
          600: '#1c2030',
        },
        angel: {
          50: '#f5f9ff',
          100: '#e3efff',
          300: '#9ec5ff',
          500: '#5b8def',
          700: '#2a5bb8',
          glow: '#a8c7ff',
        },
        demon: {
          50: '#fff4f1',
          100: '#ffd9cf',
          300: '#ff8a6a',
          500: '#d83a1a',
          700: '#8a1c0a',
          glow: '#ff6a3a',
        },
        gold: {
          300: '#f3d488',
          500: '#c89a3a',
          700: '#8a6a1f',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
};
