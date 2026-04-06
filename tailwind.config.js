/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        republic: {
          blue: '#002395',
          white: '#FFFFFF',
          red: '#ED2939',
        }
      }
    },
  },
  plugins: [],
}
