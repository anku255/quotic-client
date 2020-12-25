/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const plugin = require("tailwindcss/plugin");

const lineClampPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    ".clamp-1": {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "1",
    },
    ".clamp-2": {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "2",
    },
    ".clamp-3": {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "3",
    },
    ".clamp-5": {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "5",
    },
    ".clamp-7": {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "7",
    },
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
});

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  plugins: [lineClampPlugin],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
      spacing: {
        3.5: "0.875rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem",
        37: "9.25rem",
        42: "10.5rem",
        47: "11.5rem",
        "90%": "90%",
        "700-px": "700px",
      },
      maxWidth: {
        "700-px": "700px",
      },
      colors: {
        zircon: "#FCFDFF",
        baliHai: "#869BB3",
        blackRussian: "#000024",
        aliceBlue: "#EFF7FF",
        "baliHai-50": "#869BB31A",
        radicalRed: "#FC2D52",
      },
      boxShadow: {
        primary: "0px 10px 20px #869BB31A",
        secondary: "0px 1px 10px #0000241A",
      },
      letterSpacing: {
        wide: "1.4px",
        wider: "3px",
      },
    },
  },
};
