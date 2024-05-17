const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const vepaarColors = require("./colors.json");

module.exports = {
  content: ["../../packages/**/**/*.{vue,js,json}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "3xl": ["28px", "32px"],
        "4xl": ["32px", "40px"],
        "5xl": ["36px", "42px"],
        "6xl": ["48px", "56px"],
        "7xl": ["60px", "68px"],
        "8xl": ["72px", "80px"],
      },
      borderRadius: {
        none: "0",
        xxs: "12px",
        xs: "16px",
        sm: "24px",
        md: "32px",
        lg: "40px",
        xl: "48px",
        full: "9999px",
      },
      colors: {
        ...vepaarColors,
        danger: colors.red,
        success: colors.green,
        warning: colors.orange,
        info: colors.blue,
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        shimmer: colors.gray["300"],
        whatsappGreen: "#50ed69",
        whatsappTeal: "#309186",
      },
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
        body: ["Inter", ...defaultTheme.fontFamily.sans],
        "rethink-sans": ['"Rethink Sans"', "sans-serif"],
      },
      boxShadow: {
        xs: "0px 0px 6px 0px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
