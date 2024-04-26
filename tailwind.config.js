/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    animation: true,
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster"],
      },
    },
  },
  plugins: [],
};
