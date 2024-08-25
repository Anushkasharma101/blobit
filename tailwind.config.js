/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customPurple:'#6442BB',
        customSearch:'#F5F7FA',
        customText:'#EBD3F8'
      },
      fontFamily: {
        customKanitRegular:['Kanit-Regular', 'sans-serif'],
        customOutfit:['Outfit','sans-serif'],
        customPacifico:['Pacifico-Regular','cursive'],
      },
    },
  },
  plugins: [],
}