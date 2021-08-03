module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "Rubik":"'Rubik', sans-serif",
      },
      minWidth:{
        "400":"400px"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        "mac":"-36px 50px 28px rgba(0,0,0,0.15)",
        "folder":"-28px 32px 18px rgba(0,0,0,0.25)"
      },
      boxShadow:{
        "cardshadow":"0px 5px 0px -1px rgba(0,0,0,0.09)"
      },
      height:{
        "leftcontent":"calc(100vh - 5rem)",
      },
      colors:{
        methodbg:"#F0F0F0",
        headcardbg:"#FAB425",
        placebg:"#F5A90E"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor:["active","disabled"],
      translate:["active"],
      opacity:"disabled",
      cursor:"disabled"
    },
  },
  plugins: [],
}
