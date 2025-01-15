import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {},
  },
  plugins: [],
};

export default config;
