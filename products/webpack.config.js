const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const moduleFederationPlugin = require("webpack/lib/container/moduleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    allowedHosts: ["h78kdq-8081.csb.app"],
  },
  plugins: [
    new moduleFederationPlugin({
      name: "products",
      fileName: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public", "/index.html"),
    }),
  ],
};
