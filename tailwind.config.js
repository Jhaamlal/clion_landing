module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clion-red": "#F20505",
        "clion-gray": "#D9D9D9",
        "clion-dark-gray": "#727272",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
}
