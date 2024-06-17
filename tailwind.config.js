/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "6xl": "2560px",
        "5xl": "2150px",
        "4xl": "1920px",
        "3xl": "1700px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "cat-tongue": "cat-tongue 3s linear infinite",
        "cat-tongue-2": "cat-tongue-2 1.5s linear infinite",
        "cat-tongue-3": "cat-tongue-3 3s linear infinite",
        "cat-sleep": "cat-sleep 1.5s infinite",
        "paw-loader": "cat-paw 1s infinite",
        "paw-loader-2": "cat-paw-2 1s infinite",
        "paw-loader-3": "cat-paw-3 1s infinite",
      },
      keyframes: {
        "cat-tongue": {
          "0%, 100%": { transform: "translateY(-11%)", "-webkit-transform": "translateY(-11%)" },
          "50%": { transform: "translateY(0)", "-webkit-transform": "translateY(0)" },
        },
        "cat-tongue-2": {
          "0%, 100%": { transform: "translateY(-9%)" },
          "50%": { transform: "translateY(0)" },
        },
        "cat-tongue-3": {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(0)" },
        },
        "cat-paw": {
          "0%, 20%": { opacity: 1 },
          "80%, 100%": { opacity: 0 },
        },
        "cat-sleep": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "cat-paw-2": {
          "0%, 20%": { opacity: 0 },
          "25%, 45%": { opacity: 1 },
          "80%, 100%": { opacity: 0 },
        },
        "cat-paw-3": {
          "0%, 45%": { opacity: 0 },
          "50%, 70%": { opacity: 1 },
          "80%, 100%": { opacity: 0 },
        },
      },
    },
    fontFamily: {
      arial: "'Arial', monospace",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
