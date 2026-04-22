import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCF6F2',
        ink:   '#000000',
        muted: '#212121',
      },
      fontFamily: {
        display: ['Italiana', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ken-burns': 'kenburns 26s ease-out forwards',
      },
      keyframes: {
        kenburns: {
          '0%':   { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1.13) translate3d(-1.2%,1%,0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
