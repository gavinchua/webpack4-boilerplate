const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.common');

const address = require('ip').address;
const { PORT } = require('./const');

const paths = require('./paths');

// Plugins
const WebpackMessages = require('webpack-messages');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: `http://${address()}:${PORT}/`
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: 'style-loader' },
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
        'NODE_ENV': JSON.stringify('development'),
        'PDF_FOLDER': JSON.stringify('/assets/pdf/')
      }
    }),
    new WebpackMessages({
      name: 'development',
      logger: str => {
        console.log(`${str}`);
      }
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    before: function(app, server) {
      server._watch(paths.dirSrcPug);
    },
    compress: true,
    quiet: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      timings: false,
      version: false
    },
    hot: true,
    lazy: false,
    host: address(),
    port: PORT,
    clientLogLevel: 'error',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});