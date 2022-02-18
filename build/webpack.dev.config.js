// 开发环境的配置文件
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, "../examples/main.js"),
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true, // 是否压缩
    open: true, //自动打开浏览器
    host: 'localhost',
    hot: true, //启用webpack的热模块替换功能
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新,
    overlay: {
      warning: true,
      errors: true,
    },
    publicPath: '/',
    //hotOnly: true
    //devServer.hot在没有页面刷新的情况下启用热模块替换作为构建失败时的后备
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
              name: "static/[name]-[hash:8].[ext]" // 属于file-loader的属性
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
              name: "static/[name].[hash:7].[ext]"
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
          name: "static/[name]-[hash:7].min.[ext]" // 属于file-loader的属性
        }
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      // 可以指定文件当模板  让这个文件为入口  读取模板的入口文件
      template: path.resolve(__dirname, "../index.html"),
      // 输出的模板文件，名为index.html, 在dist目录下
      filename: "index.html"
    })
  ],
}

module.exports = merge(baseConfig, devConfig)
