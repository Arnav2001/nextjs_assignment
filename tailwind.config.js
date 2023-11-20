/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray:'#3F4C5A',
        customLightGray:'#6B778C',
        customBlue:'#19154E',
      },
      fontSize: {
        'base': '16px',
      },
      lineHeight: {
        '69': '24px',
      },
    },
  },
  plugins: [],
}