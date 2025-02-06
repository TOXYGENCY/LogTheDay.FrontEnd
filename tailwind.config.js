/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/primeui/**/*.html" 
  ],
  safelist: [
    { pattern: /text\w*/ } // ← Caution: Only for development!
  ],
  plugins: [require('tailwindcss-primeui')],
}

