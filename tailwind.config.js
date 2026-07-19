/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        secondary: {
          DEFAULT: '#0F172A',
          hover: '#1E293B',
        },
        accent: {
          DEFAULT: '#14B8A6',
          hover: '#0D9488',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        bgDark: '#030712',
        cardDark: '#111827',
        borderDark: '#1F2937',
        textPrimary: '#FFFFFF',
        textSecondary: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
