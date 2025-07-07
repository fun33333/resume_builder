/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          orbitron: ['var(--font-orbitron)', 'sans-serif'],
          'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
          'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
          inter: ['var(--font-inter)', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
          display: ['Inter', 'sans-serif'],
        },
        colors: {
          primary: {
            50: '#f0f7ff',
            100: '#e0efff',
            200: '#baddff',
            300: '#7cc2ff',
            400: '#3aa0ff',
            500: '#0078ff',
            600: '#0057d5',
            700: '#0042ab',
            800: '#00378c',
            900: '#002f75',
          },
          secondary: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
          },
          accent: '#FEFAE0',
          bgLight: '#748f5553',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          pulse: {
            '0%, 100%': { 
              opacity: '1',
              transform: 'scale(1)',
            },
            '50%': { 
              opacity: '.7',
              transform: 'scale(0.95)',
            },
          },
          glow: {
            '0%, 100%': { 
              opacity: '1',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
            },
            '50%': { 
              opacity: '.7',
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
            },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };