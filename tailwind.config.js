module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundColor: {
        navColor: 'rgb(192, 149, 101)',
        footerColor: "#1f2324",
        buttonColor: "#c19566"
      },
      backgroundImage: {
        navBackground: "url('/src/assets/nav_background.jpg')",
        joinUs: "url('/src/assets/nav_background2.jpg')",
      },
      colors: {
        textColor: "#493929",
        c19566: "#c19566"
        
      },
      padding: {
        navPadding: "200px"
      },
      width: {
        footerTextWidth: "300px"
      },
      height: {
        500 : "500px"
      },
      opacity: {
        0.349 : 0.349
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
