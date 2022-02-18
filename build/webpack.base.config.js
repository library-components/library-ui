//webpack.base.config.js
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  context: path.resolve(__dirname, "../"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "library-ui.umd.js",
    chunkFilename: "[id].js",
    publicPath: "./",
    library: "library-ui",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"], //取消后缀  引入文件路径就不用加文件后缀了
    alias: {
      vue$: "vue/dist/vue.esm.js", //引入vue
      "@": path.resolve(__dirname, "../src"),
      "~": path.resolve(__dirname, ".."),
      "~/examples": path.resolve(__dirname, "../examples"),
      "~/packages": path.resolve(__dirname, "../packages")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
        loader: "happypack/loader?id=happyBabel",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, "./md-loader/index.js")
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: "happyBabel",
      //如何处理  用法和loader 的配置一样
      loaders: [
        {
          loader: "babel-loader?cacheDirectory=true"
        }
      ],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
      threads: 4 // 线程开启数
    })
  ]
};
