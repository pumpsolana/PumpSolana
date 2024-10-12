/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "25": "#32B9FF",
        "50": "#2894FF",
        "100": "#2B3858",
        "200": "#181C2C",
      },
      black: {
        "100": "#13111A",
      },
      yellow: {
        "50": "#B558FF",
        "100": "#B558FF",
      },
      white: {
        "50": "#D8D5DB",
        "100": "#fff",
        "200": "#D2F4FF",
      }
    },
    fontFamily: {
      'sniglet': ["'Sniglet', system-ui"],
      'lilita': ["'Lilita One', sans-serif"],
      'fredoka': ["'Fredoka', sans-serif"],
      'wedges': ["Wedges"]
    }
  },
  plugins: [],
}
