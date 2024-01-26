const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    allowedHosts: ["h78kdq-8080.csb.app"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
  ],
};
