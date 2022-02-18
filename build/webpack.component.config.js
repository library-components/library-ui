// 按需引入的打包配置文件
"use strict";

const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 按需引入的核心工具方法
const { getComponentEntries } = require('./utils/util');

module.exports = {
  mode: "production",
  entry: getComponentEntries('packages'), // 按需引入的关键
  output: {
    path: path.resolve(__dirname, "../dist/"),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
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
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id]-[name].chunk.css'
    }),
  ]
}
