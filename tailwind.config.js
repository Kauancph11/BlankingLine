/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blkBlack:{
          100: "#181818",
          200: "#131313",
          300: "#AFAFAF",
          400: "#DEDEDE"
        },

        blkAside: "#1F7290"
      },
    },
  },
  plugins: [],
}

