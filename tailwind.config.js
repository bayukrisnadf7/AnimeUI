/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4379F2',
        'secondary': '#6439FF',
        'tertiary': '#0000ff',
        'quaternary': '#ffff00',
        'quinary': '#ff00ff',
      }
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}

