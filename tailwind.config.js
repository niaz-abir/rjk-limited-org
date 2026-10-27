/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { ink: "#17251F", forest: "#234B3A", lime: "#D9F078", cream: "#F7F7F2" },
    fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
    boxShadow: { soft: "0 18px 60px rgba(20, 40, 30, .09)" }
  }},
  plugins: []
};
