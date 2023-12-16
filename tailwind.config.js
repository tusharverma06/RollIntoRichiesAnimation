/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#030303",
        },
      },
      screens: {
        "3xl": { min: "1700px" },
      },
    },
  },
  plugins: [],
};
