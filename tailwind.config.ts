import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary : '#4D3DF6',
        secondary: '#bcb9ff', // Adjust this to your desired purple shade
          // Example secondary color (light gray)
      },
    },
  },
  plugins: [],
} satisfies Config

