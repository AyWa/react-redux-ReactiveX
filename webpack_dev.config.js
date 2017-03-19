const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs                = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


const frontend = {
  context: path.resolve(__dirname, './frontend'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './build/frontend'),
    filename: 'frontend.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index_dev.html',
    favicon: "images/favicon.ico",
    inject: 'body',
  })]
}

module.exports = [
    Object.assign({} , frontend)
];
