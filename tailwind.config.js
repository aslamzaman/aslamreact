/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'SutonnyMJ_Regular': ['SutonnyMJ-Regular'],
      'SutonnyMJ_Bold': ['SutonnyMJ-Bold'],
    }
  },
  plugins: [],
}
