const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  outputDir: "docs",
  publicPath: "/rz-document.github.io",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src")); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "vue-loader"
        },
        {
          loader: require.resolve("./markdown-loader")
        }
      ]
    });
  }
};
