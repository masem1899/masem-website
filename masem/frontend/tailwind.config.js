
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        masem: '#10B981',        // Emerald
        masemDark: '#0F766E',    // Teal shade
        masemLight: '#6EE7B7',   // Light green
        accent: '#0EA5E9',       // Sky blue
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
