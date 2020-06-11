const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const decorativeLines = require('./decorative-lines');
const { randomBetween } = require('./utils');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMessages = require('webpack-messages');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    new BrotliPlugin(),
    new WebpackMessages({
      name: 'production',
      logger: str => {
        console.log('\n' + decorativeLines[randomBetween(0, decorativeLines.length - 1)]);
        console.log(`${str}`);
      }
    })
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devtool: 'source-map'
});
