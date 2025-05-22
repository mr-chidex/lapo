/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          600: "#121212",
        },
        light: {
          600: "#808080",
        },
      },
      backgroundImage: {
        "gradient-login": "linear-gradient(180deg, #E5F0FF 0%, #F4F9FF 100%)",
        "gradient-preview":
          "linear-gradient(360deg, #F4F9FF 42.43%, rgba(244, 249, 255, 0.8) 70.3%, rgba(244, 249, 255, 0.2) 91.6%)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
