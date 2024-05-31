import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transform: ['hover', 'focus'],
      scale: {
        '110': '1.1',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },

  },
  plugins: [],
} satisfies Config