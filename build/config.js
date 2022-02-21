const path = require('path')

exports.alias = { // 配置别名
  "@": path.resolve(__dirname, "../src"),
  "~": path.resolve(__dirname, ".."),
  "~/examples": path.resolve(__dirname, "../examples"),
  "~/packages": path.resolve(__dirname, "../packages")
};
