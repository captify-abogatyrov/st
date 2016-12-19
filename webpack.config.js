const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPatch: 'src',
  },
  devServer: {
    contentBase: __dirname + "dist",
    compress: true,
    port: 8002
  },
};