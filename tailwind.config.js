/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      light: 250,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1260px", // your design width
        xl: "1260px",
        "2xl": "1260px",
      },
    },
    extend: {
      colors: {
        primary: "#B92B5D", // main
        secondary: "#373052", // text
        accent: "#F3F3E9", // backgrounds
        light: "#D9D9D9", // borders, lines
        success: "#06AF52", // success messages
        warning: "#AF9B06", // warning messages
        danger: "#B92B5D", // danger / error
      },

      fontSize: {
        h1: ["4rem", { lineHeight: "1.2" }],   // 64px
        h2: ["2.5rem", { lineHeight: "1.25" }],// 40px
        h3: ["2rem", { lineHeight: "1.3" }],   // 32px
        h4: ["1.5rem", { lineHeight: "1.35" }],// 24px
        base: ["1.25rem", { lineHeight: "1.5" }], // 20px
      },

      /* TRANSITIONS */
      animation: {
        fadeIn: "fadeIn 0.2s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};