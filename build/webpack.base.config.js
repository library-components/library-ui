//webpack.base.config.js
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: path.resolve(__dirname, "../examples/main.js"),
  output: {
    filename: "js/[name].[hash:7].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./",
    library: "antsoo-ui",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"], //取消后缀  引入文件路径就不用加文件后缀了
    alias: {
      vue$: "vue/dist/vue.esm.js", //引入vue
      "@": path.resolve(__dirname, "../src"),
      "~/examples": path.resolve(__dirname, "../examples"),
      "~/packages": path.resolve(__dirname, "../packages")
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all", // 表示将对哪些块进行优化，可选async, initial, all，async对异步加载的模块进行分割，initial对初始模块，all对所有模块
      minSize: 30000, // 加载的模块不小于30kb才进行分割
      maxSize: 0, //
      minChunks: 1, // 生成的chunk，共享该模块的chunk必须不小于１时才分割
      maxAsyncRequests: 5, // 按需加载时的最大并行请求数
      maxInitialRequests: 3, // 入口处的最大并行请求数
      automaticNameDelimiter: "~", // 默认情况下，webpack将使用块的名称和名称生成名称（例如vendors~main.js）。此选项指定用于生成的名称的分隔符
      name: true, // 生成chunk的名字，如果设成true，将根据模块和缓存组配置结合生成名称
      cacheGroups: {
        // 缓存组可以继承和/或覆盖任何选项splitChunks.*; 但是test，priority并且reuseExistingChunk只能在高速缓存组级别配置。要禁用任何默认缓存组，请将其设置为false。
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 控制此缓存组选择的模块
          priority: -10, // 模块可以属于多个缓存组，模块则归于缓存组priority高的
          name: "vendors"
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true //  如果当前块包含已拆分的模块，则将重用它而不是生成新的块。
        }
      }
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
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // 这里设置为false
              limit: 10000,
              name: "images/[name]-[hash:8].[ext]" // 属于file-loader的属性
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // 这里设置为false
              limit: 10000,
              name: "media/[name].[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          esModule: false, // 这里设置为false
          limit: 10000, // size <= 5KB
          name: "fonts/[name]-[hash:7].min.[ext]" // 属于file-loader的属性
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      // 可以指定文件当模板  让这个文件为入口  读取模板的入口文件
      template: path.resolve(__dirname, "../index.html"),
      // 输出的模板文件，名为index.html, 在dist目录下
      filename: "index.html"
    }),
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
