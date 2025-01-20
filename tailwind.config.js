/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/App.{vue,js,ts,jsx,tsx}",
    "./src/App.vue",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F7F9FC',
        'title-gray': '#808191',
        'blue': '#0F0A2F',
        'violet': '#9771FD',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(-30px)" },
        },
      },
      // gridColumn: {
      //   "span-16": "span 14 / span 14",
      // },
      animation: {
        translate_y: "wiggle 2s ease-in-out",
      },
    },
  },
  plugins: [],
}
