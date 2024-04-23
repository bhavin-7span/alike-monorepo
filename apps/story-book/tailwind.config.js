const alikeTailwind = require("style/src/tailwind.js");

console.log("CHECK==>",alikeTailwind);

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
