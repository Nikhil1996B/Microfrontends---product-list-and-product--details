const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: "8082",
    allowedHosts: ["czshfg-8082.csb.app"],
  },
  plugins: [
    new moduleFederationPlugin({
      name: "carts",
      filename: "remoteEntry.js",
      exposes: {
        "./CartsIndex": "./src/index",
      },
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public", "/index.html"),
    }),
  ],
};
