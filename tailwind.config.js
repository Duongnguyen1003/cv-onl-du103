/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', 
          './src/*.{js,jsx,ts,tsx}',
          './src/**/*.{js,jsx,ts,tsx}',
          './src/**/**/*.{js,jsx,ts,tsx}',
          './src/**/*.{js,jsx,ts,tsx}'],

  content: ['./src/**/*.{html,js,jsx}',
            './src/*.{js,jsx,ts,tsx}',
            './src/**/*.{js,jsx,ts,tsx}',
            './src/**/**/*.{js,jsx,ts,tsx}',
            './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.8, 0.5, 0.2, 1.4)',
      },
      fontFamily: {
        'Nunito': ["'Nunito', sans-serif"],
        'Paprika': ["Paprika"],
        'Brygada': ["'Brygada 1918', serif"]
      },
      transitionProperty: {
        'right': 'right',
      },
      inset: {
        '30': '120px',
      },
      margin: {
        '25': '100px',
      },
      padding:{
        '25': '100px',
      },
      colors: {
        dark_primary: "#042154",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    require('tailwindcss-3d')({ legacy: true })
  ],
}

