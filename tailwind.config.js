const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  important: false,
  theme: {
    colors: {
      ...colors,
      primary: {
        light: "#007bff", // TODO change to match design
        DEFAULT: "#3E8EF7", // TODO change to match design
      },
      secondary: {
        DEFAULT: "#868e96",
      },
      dark: {
        light: "#2d2d2d",
        DEFAULT: "#58666c",
      },
      light: {
        DEFAULT: "#F1F4F5",
      },
      gray: {
        dark: "#343a40",
        DEFAULT: "#868e96",
      },
      table: {
        light: "#76838f",
        DEFAULT: "#fbfdfd",
        dark: "#F3F7F9",
        text: "#526069",
        lightGray: "#e4eaec",
      },
      darkBlue: {
        DEFAULT: "#263238",
      },
    },
    extend: {
      backgroundColor: ["active"],
      screens: {
        wide: "1440px",
        large: "1024px",
        medium: "768px",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
      textColor: ["disabled"],
      borderWidth: ["last"],
      margin: ["first", "last"],
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
