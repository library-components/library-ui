//webpack.dev.config.js
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true, // 是否压缩
    open: true, //自动打开浏览器
    host: '0.0.0.0',
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
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = merge(baseConfig, devConfig)
