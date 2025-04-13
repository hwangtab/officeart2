const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // New Color Palette (Based on user feedback)
      colors: {
        'primary': '#FF7043', // Orange 400 (Header, primary buttons)
        'background-main': '#FFFBF0', // Very light cream/ivory (Main background)
        'background-section': '#FFFFFF', // White (Section/Card background)
        'accent-blue': '#4FC3F7', // Light Blue 400 (Accent)
        'accent-yellow': '#FFF176', // Yellow 400 (Accent)
        'accent-green': '#80CBC4', // Teal 200 (Accent)
        'text-primary': '#424242', // Grey 800 (Primary text)
        'text-secondary': '#757575', // Grey 600 (Secondary text)
        'text-on-primary': '#FFFFFF', // White (Text on primary color)
        'border-light': '#E0E0E0', // Grey 300 (Borders)
        'card-background': '#FFFFFF', // White for cards (back to white)

        // Keep functional colors (or adjust if needed)
        'warning-red': '#FF3B30',
        'success-green': '#4CD964',
        // Keep brand colors
        'kakao': '#FEE500', // Kakao yellow
        'naver-green': '#03C75A',
        'naver-green-dark': '#02B350',
      },
      fontFamily: {
        sans: ['GmarketSansMedium', '"Noto Sans KR"', ...defaultTheme.fontFamily.sans], // Set GmarketSansMedium as default
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

module.exports = config;