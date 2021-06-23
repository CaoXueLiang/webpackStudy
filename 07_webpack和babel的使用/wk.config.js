const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "build"),
  },
};
