module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        minDesktop: "1200px",
        tablet: "1135px",
        ipod: "980px",
        mobile: "768px",
        small: "540px",
        extraSmall: "400px",
      },
      colors: {
        main: '#FF0000',
        gray: "#828282",
        graySecondry: "#CFCFCF"
      },
    },
  },
  plugins: [],
};
