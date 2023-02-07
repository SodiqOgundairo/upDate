/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        theme: '#0ec344'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), ('flowbite/plugin')],
}
