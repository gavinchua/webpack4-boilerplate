const fs = require('fs');
const webpack = require('webpack');

// Plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const paths = require('./paths');

const pugTemplates = [];
const srcll = fs.readdirSync(paths.dirSrcPug);
srcll.forEach(s => s.endsWith('.pug') && pugTemplates.push(s));

module.exports = {
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      path.join(paths.dirSrcJs, 'app')
    ],
    vendor: [
      'whatwg-fetch'
    ]
  },
  output: {
    path: paths.dirDist,
    filename: 'js/[name].js'
  },
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    ...pugTemplates.map(templateName => new HtmlWebPackPlugin({
      inject: true,
      template: `./src/pug/${templateName}`,
      filename: path.join(paths.dirDist, templateName.replace('.pug', '.html')),
      minify: true,
      alwaysWriteToDisk: true
    })),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
