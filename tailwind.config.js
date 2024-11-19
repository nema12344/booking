/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your component files
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1262AE', // Add your color here
      },
    },
  },
  plugins: [],
}
