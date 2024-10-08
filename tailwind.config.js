
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter'],
        'Roboto': ['Roboto'],
        'Sen': ['Sen'],
        'Poppins':['Poppins'],
        'Monda':['Monda'],
        'Exo':['Exo 2'],

      },
    },
    
  },
  plugins: [],
};