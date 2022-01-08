const { resolve } = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	context: resolve(__dirname, "."),
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: resolve(__dirname, "./dist")
	}
};
