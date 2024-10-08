/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing  : {
        '256': '35rem',
      },
      colors : {
        'day': '#323232',
      }
    },
  },
  plugins: [],
}