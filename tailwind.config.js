/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary" : "#F62500",
        "btn" : "#FF6347",
        "input" : "#7E322513",
        "placeholder" : "#7E322550",

      },
      backgroundImage: {
        'breadcrumb' : "url(./assets/img/breadcrumb.png)"
      }
    },
  },
  plugins: [],
}

