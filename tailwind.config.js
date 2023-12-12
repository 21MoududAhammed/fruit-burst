/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
     colors:{
      "fruit-primary": '#F85559',
     }
    },
  },
  plugins: [require("daisyui")],
}

