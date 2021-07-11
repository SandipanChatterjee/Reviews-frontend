const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const regeneratorRuntime = require("regenerator-runtime");

module.exports = {
  // entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.js")],
  entry: {
    index: "./src/index",
    indexRoutes: "./src/Routes/index",
    movieRoutes: {
      import: "./src/Routes/MovieRoutes",
      dependOn: "shared",
    },
    dashboardRoutes: {
      import: "./src/Routes/DashboardRoutes",
      dependOn: "shared",
    },
    shared: "@loadable/component",
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: "url-loader?limit=100000",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: [/node_modules/, /\.ejs$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: { esmodules: true } }],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      process: "process/browser",
    },
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
};
