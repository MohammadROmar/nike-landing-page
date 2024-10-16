import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        palanquin: 'var(--font-palanquin)',
        montserrat: 'var(--font-montserrat)',
      },
      colors: {
        title: 'rgba(var(--text-title))',
        'coral-red': '#FF6452',
        'slate-gray': 'rgba(var(--text-slate-gray))',
        'pale-blue': '#F5F6FF',
        'white-400': 'rgba(255, 255, 255, 0.80)',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        hero: "url('../assets/images/collection-background.svg')",
        card: "url('../assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
