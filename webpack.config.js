const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    // ...
    new CleanWebpackPlugin(),
  ],
};
