/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue1': '#222d33',
        'custom-blue2': '#1d262d',
        'text-title': '#7c858c',
        'text-opciones': '#878d93',
        'bgBody': '#e7e7e9',
      },
    },
  },
  plugins: [],
}

