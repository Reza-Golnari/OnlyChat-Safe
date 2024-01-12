/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
      },
      colors: {
        primary: "#007AFF",
        secondary: {
          100: "#FFB5E1",
          500: "#FF00A8",
          900: "#951D65",
        },
        green: "#81E299",
        "light-gray": "#F2F2F7",
        "body-text": "#3D3D3D",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
