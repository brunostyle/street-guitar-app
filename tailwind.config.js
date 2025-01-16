import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",                                                                                                                                                                                                                                
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui({
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