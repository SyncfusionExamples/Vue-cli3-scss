const path = require("path");

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: true,
  css: {
    loaderOptions: {
      sass: {
        includePaths: ["node_modules/@syncfusion",""]
      }
    }
  },
  devServer: {
    public: "127.0.0.1:8080",
    hot: true,
    compress: true
  },
  configureWebpack: {
    devtool: "source-map"
  }
};
