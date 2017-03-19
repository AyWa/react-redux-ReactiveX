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
    template: 'index_prod.html',
    favicon: "images/favicon.ico",
    inject: 'body',
  })]
}
const backend = {
  context: path.resolve(__dirname, './backend'),
  entry: {
    app: './index.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'backend.bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
  externals: nodeModules
};

module.exports = [
    Object.assign({} , frontend),
    Object.assign({} , backend)
];
