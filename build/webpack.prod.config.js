//webapck.prod.js
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css代码分割与提炼
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // css代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin') // 压缩JS
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin') // 打包进度条
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prodConfig = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  optimization: {
    minimizer: [
      //压缩css
      new OptimizeCssAssetsWebpackPlugin({}),
      // 压缩JS
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  module: {
    rules: [
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:7].css',
      chunkFilename: 'css/[id]-[hash:7].chunk.css',
    }),
    new CleanWebpackPlugin(), // 每次打包自动清空dist目录
    new SimpleProgressWebpackPlugin()
  ],
}

module.exports = merge(baseConfig, prodConfig)
