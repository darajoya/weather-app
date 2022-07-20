const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.pug" })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      /*{
        test: /\.html$/i,
        loader: "html-loader",
      },*/
      {
        test: /\.pug$/i,
        use: ["html-loader", "pug-html-loader"],
      },
    ],
  },
});
