/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     
        'green1': '#1b8057',
        'greenn': '#d8f2de',
        'white1': '#ffffff',
        'white2': '#fefdf3',
        'white3': '#f7f7f7',
       
      },
      display: ["group-hover"],
    },
    screens: {
      "xsm":"320px",
      "msm": "375px",
      "sm":"425px",
      'lsm': '640px',
      "md":"768px",
      "lmd":"992px",
      'lg': '1124px',
      'llg': '1280px',
      "xl": "1350px",
      "xxl": "1440px"
      
    },
   
 
  },
  plugins: [],
}

