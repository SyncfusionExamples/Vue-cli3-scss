const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  productionSourceMap: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@syncfusion/ej2-base/styles/material.css";`,
        sassOptions: {
          includePaths: ["node_modules/@syncfusion", ""]
        }
      }
    }
  },
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    hot: true,
    compress: true
  },
  configureWebpack: {
    devtool: "source-map"
  }
})
