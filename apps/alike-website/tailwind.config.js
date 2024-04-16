const alikeTailwind = require("style/src/tailwind.js");

module.exports = {
  ...alikeTailwind,
  content: [
    "./*.html",
    "./src/*.{vue,js,json}",
    "./src/**/*.{vue,js,json}",
    "../../packages/**/*.{vue,js,json}",
    "../../packages/**/**/*.{vue,js,json}",
  ],
};
