const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    allowedHosts: ["mvn2zl-8081.csb.app"],
  },
  plugins: [
    new moduleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        // "./ProductsIndex": "./src/index",
        "./ProductsIndex": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public", "/index.html"),
    }),
  ],
};
