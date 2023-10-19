import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          'from': { 
            opacity: '0' 
          },
          'to': { 
            opacity: '1' 
          },
        }
      },
      animation: {
        fadeUp: 'fadeUp .4s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
