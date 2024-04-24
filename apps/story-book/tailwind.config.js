const alikeTailwind = require("style/src/tailwind.js");

module.exports = {
  ...alikeTailwind,
  content: [
    "./*.html",
    "./src/*.vue",
    "./src/**/*.vue",
    "../../packages/**/*.{vue,js,json}",
    "../../packages/**/**/*.{vue,js,json}",
  ],
};
