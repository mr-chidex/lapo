/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          500: "#001735",
          600: "#121212",
          700: "#101828",
        },
        light: {
          50: "#F6F6F6",
          100: "#D0D5DD",
          150: "#F2F4F7",
          600: "#808080",
          900: "#344054",
        },
        primary: {
          50: "#014DAF",
        },
        secondary: {
          50: "#F1F7FF",
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
      boxShadow: {
        "header-search": "0px 0.98px 1.96px 0px #1018280D",
      },
    },
  },
  plugins: [],
};
