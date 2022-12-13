

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
  
      
      colors: {
        primary: "#CC0000",
      },
      fontFamily: {
        main: ["Roboto Slab", "serif"],
        
      },
      zIndex:{
        '100':'100',
        '101':'101',
        '102':'102',
        '103':'103',
        '104':'104',
        '105':'105'
      },
      backgroundImage: {
        Service: "url('assets/it.jpg')"
      }
 
    },
    
  },
  plugins: [],
};
