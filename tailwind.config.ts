import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f2fd",
          100: "#e2e1fa",
          200: "#c6c4f5",
          300: "#a19ceb",
          400: "#7e76de",
          500: "#5f56cc",
          600: "#4a41ac",
          700: "#3c358a",
          800: "#312c6f",
          900: "#211e4d",
        },
        ink: {
          900: "#13111f",
          800: "#201d33",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
