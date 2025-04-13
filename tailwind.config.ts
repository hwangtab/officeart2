import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Restore original color definitions
      colors: {
        'primary-blue': '#4A90E2',
        'secondary-green': '#50E3C2',
        'naver-green': '#03C75A',
        'naver-green-dark': '#02B350',
        'accent-purple': '#9013FE',
        'dark-gray': '#333333',
        'medium-gray': '#555555', // Add medium gray for body text
        'light-gray': '#F5F5F5',
        'warning-red': '#FF3B30',
        'success-green': '#4CD964',
        'info-blue': '#5AC8FA',
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', ...defaultTheme.fontFamily.sans],
        // gong: ['var(--font-gong)', ...defaultTheme.fontFamily.sans], // Removed GongGothic
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
