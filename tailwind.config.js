/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'studentGroup' : "url('/src/assets/images/pexels-kampus-5940827.jpg')",
       
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Bebas_Neue: ["Bebas_Neue", "sans-serif"],
        Lato_Regular: ["Lato_Regular", "sans-serif"],

      },
    },
  },
  plugins: [],
}

