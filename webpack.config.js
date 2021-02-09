const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[fullhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    // ...
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
