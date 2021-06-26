const { resolve } = require("path");

// node中的api
const appDir = process.cwd();
const resolveApp = (relativePath) => resolve(appDir, relativePath);

module.exports = resolveApp;
