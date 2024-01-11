/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#81E299",
        "light-gray": "#F2F2F7",
        "body-text": "#3D3D3D",
      },
    },
  },
  plugins: [],
};
