var webpack = require("webpack");

module.exports = {
	context: __dirname + "/src",
	devtool: "source-map",

	entry: {
		javascript: "./index.js"
	},

	output: {
		filename: "test.js",
		path: __dirname + "/dist"
	}
};
