const alikeTailwind = require("style/src/tailwind.js");

module.exports = {
  ...alikeTailwind,
  content: [
    "./*.html",
    "./*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./components/*.vue",
    "./components/**/*.vue",
    "./components/**/**.vue",
    "./src/*.{vue,js,json}",
    "./src/**/*.{vue,js,json}",
    "../../packages/**/*.{vue,js,json}",
    "../../packages/**/**/*.{vue,js,json}",
  ],
};
