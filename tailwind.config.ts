import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#253C84",
          50: "#EBF0FF",
          100: "#D6E0FF",
          200: "#ADC2FF",
          300: "#85A3FF",
          400: "#5C85FF",
          500: "#3366FF",
          600: "#253C84",
          700: "#1C2D63",
          800: "#141F42",
          900: "#0B1021",
        },
        secondary: {
          DEFAULT: "#72C5F0",
          50: "#F0FAFF",
          100: "#E0F4FF",
          200: "#BAEAFF",
          300: "#94DFFF",
          400: "#6ED5FF",
          500: "#72C5F0",
          600: "#5BA9CC",
          700: "#438099",
          800: "#2C5466",
          900: "#162A33",
        },
        accent: {
          DEFAULT: "#FFD400",
          50: "#FFFAEB",
          100: "#FFF5D6",
          200: "#FFEBAD",
          300: "#FFE185",
          400: "#FFD75C",
          500: "#FFD400",
          600: "#CCAA00",
          700: "#998000",
          800: "#665500",
          900: "#332B00",
        },
        neutral: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#E5E5E5",
          400: "#D4D4D4",
          500: "#A3A3A3",
          600: "#737373",
          700: "#525252",
          800: "#404040",
          900: "#262626",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
