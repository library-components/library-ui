//webpack.dev.config.js
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

const exampleConfig = {
  mode: 'production',
  entry: path.resolve(__dirname, "../examples/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name]-[hash:7].js",
    chunkFilename: "static/js/[hash:7]-[id].js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(c|sc)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // 这里设置为false
              limit: 10000,
              name: "static/images/[name]-[hash:8].[ext]" // 属于file-loader的属性
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
              name: "static/media/[name].[hash:7].[ext]"
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
          name: "static/fonts/[name]-[hash:7].min.[ext]" // 属于file-loader的属性
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      // 可以指定文件当模板  让这个文件为入口  读取模板的入口文件
      template: path.resolve(__dirname, "../index.html"),
      // 输出的模板文件，名为index.html, 在dist目录下
      filename: "index.html"
    })
  ],
}

module.exports = merge(baseConfig, exampleConfig)
