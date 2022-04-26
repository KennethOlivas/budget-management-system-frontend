module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "night"
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  
}