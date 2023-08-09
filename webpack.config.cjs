const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: false,
  mode: "development",
  entry: "./src/main.jsx",
  resolve: {
    extensions: ["...", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: ["@babel/preset-react"],
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin(), new HtmlWebpackPlugin()],
};
