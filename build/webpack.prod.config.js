//webapck.prod.js
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css代码分割与提炼
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // css代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin');                   // 压缩JS
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' ) // 打包进度条
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    optimization: {
        minimizer: [//压缩css
            new OptimizeCssAssetsWebpackPlugin({}),
            // 压缩JS
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(c|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                        // 选项
                                        },
                                    ],
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:7].css',
            chunkFilename: 'css/[id]-[hash:7].chunk.css'
        }),
        new CleanWebpackPlugin(),  // 每次打包自动清空dist目录
        new SimpleProgressWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
}

module.exports = merge(baseConfig, prodConfig)
