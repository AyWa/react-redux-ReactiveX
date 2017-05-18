const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs                = require('fs');

const nodeModules = {};
 fs.readdirSync('./node_modules')
   .filter(function(x) {
     return ['.bin'].indexOf(x) === -1;
   })
   .forEach(function(mod) {
     nodeModules[mod] = 'commonjs ' + mod;
});
const backend = {
  context: path.resolve(__dirname),
  entry: {
    app: './server.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'dev_server.bundle.js',
  },
  resolve: {
    alias: {
     images: path.resolve(__dirname, './frontend/images')
    },
    modules: [path.resolve(__dirname, "./frontend/src"), "node_modules"],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [{
        test: /\.(scss|css|jpe?g|png|gif|svg)$/,
        loader: 'ignore-loader',
        exclude: /node_modules/,
      }, {
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production"),
         __DEV__: JSON.stringify(false),
         __SERVER__: JSON.stringify(true),
       }
    }),
    new CopyWebpackPlugin([
      { from: 'server_index_dev.ejs', to: 'view/server_index_dev.ejs' },
      { from: 'server_index_prod.ejs', to: 'view/server_index_prod.ejs' },
    ]),
  ],
  externals: nodeModules
};

module.exports = [
    Object.assign({} , backend)
];
