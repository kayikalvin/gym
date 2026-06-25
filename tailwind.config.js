/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Anton", "Arial Narrow", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        iron: "#0B0B0C",
        ironsoft: "#16161A",
        chalk: "#F3F1EC",
        concrete: "#D6D2C4",
        steel: "#8A8578",
        lime: "#E8FF4D",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};