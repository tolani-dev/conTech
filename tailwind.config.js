/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontWeight: {
      "medium-bold": "580",
    },
    colors: {
      primary: {
        shades: "#211A41",
        DEFAULT: "#2C2256", //
        tint: "#3359de1a",
      },

      secondary: {
        shades: "#EDEBF4",
        DEFAULT: "#E0C7FF", //
        tint: "#fdf3e0",
      },

      success: {
        shades: "#38B2AC",
        DEFAULT: "#2C7A7B", //
        tint: "#defff4",
      },

      error: {
        shades: "#F56565",
        DEFAULT: "#E53E3E", //
        tint: "#fdeaef",
      },

      info: {
        shades: "#805AD5",
        DEFAULT: "#553C9A", //
        tint: "#E9D8FD",
        light: "#3F4784",
      },

      accent: {
        shades: "#d9d9d9",
        DEFAULT: "#707070", //
        tint: "#F1F1F1",
        light: "#f1f1f1be",
      },
      green: {
        shades: "#1F8946",
        DEFAULT: "#5ef85eba", //
        tint: "#c0dec0c9",
        light: "#c0dec00f",
      },
      grey: {
        shades: "#AEB3CD",
        DEFAULT: "#535875", //
        tint: "#f6f7fb",
      },
      white: {
        shades: "#FAFAFA",
        DEFAULT: "#FFFFFF", //
        tint: "#f6f7fb",
      },
      black: {
        shades: "#3F47841B",
        DEFAULT: "#000000", //
        tint: "#ebecf2",
        light: "#28282B",
      },
    },

    fontFamily: {
      BlinkMacSystemFont: ["BlinkMacSystemFont", "sans"], //
    },
  },
};
// eslint-disable-next-line no-undef
// export const plugins = [require("daisyui")];
