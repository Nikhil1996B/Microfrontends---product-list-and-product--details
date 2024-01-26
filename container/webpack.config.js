const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    allowedHosts: ["czshfg-8080.csb.app"],
  },
  plugins: [
    new moduleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@https://czshfg-8081.csb.app/remoteEntry.js",
        carts: "carts@https://czshfg-8082.csb.app/remoteEntry.js",
      },
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
  ],
};
