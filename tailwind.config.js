const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [heroui({
    defaultTheme: 'dark',
    layout: {
      borderWidth: {
        medium: "1px"
      },
    },
    themes: {
      light: {
        layout: {},
        colors: {},
      },
      dark: {
        layout: {},
        colors: {
          content1: "#09090b",
        },
      },
    },
  })],
}