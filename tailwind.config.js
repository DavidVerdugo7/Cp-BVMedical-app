/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  //...
  daisyui: {
    themes: ["synthwave"],
  },

  plugins: [require("daisyui")],
};
