/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FDCC49',
        grey: '#EDEDED',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': '#rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF454A 45.05%, #FFBA00 78.07%,)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 107.73%,)',
      }),
      fontFamily: {
        playFair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      // content: {
      //   brush: "url('./assets/brush.png')",
      //   person1: "url('./assets/person-1.png')",
      //   person2: "url('./assets/person-2.png')",
      //   person3: "url('./assets/person-3.png')",
      // }
    },
    screenshot: {
      xs: '480px',
      sm: '720px',
      md: '1060px',
    },
  },
  plugins: [],
};
