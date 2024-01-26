const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const moduleFederationPlugin = require("webpack/lib/container/moduleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    allowedHosts: ["h78kdq-8080.csb.app"],
  },
  plugins: [
    new moduleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://h78kdq-8081.csb.app/remoteEntry.js",
      },
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
  ],
};
