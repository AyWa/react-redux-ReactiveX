const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs                = require('fs');

const nodeModules = {};
 fs.readdirSync('./serve_prod/node_modules')
   .filter(function(x) {
     return ['.bin'].indexOf(x) === -1;
   })
   .forEach(function(mod) {
     nodeModules[mod] = 'commonjs ' + mod;
});
const backend = {
  context: path.resolve(__dirname),
  entry: {
    app: './test.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: path.resolve(__dirname),
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
        // include: defaultIncluded,
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',// creates style nodes from JS strings
          // translates CSS into CommonJS // compiles Sass to CSS
          use: ['css-loader', 'sass-loader']
        })
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production"),
         __DEV__: JSON.stringify(false),
         __SERVER__: JSON.stringify(true),
       }
    }),
    new ExtractTextPlugin("server_styles.css"),
  ],
  externals: nodeModules
};

module.exports = [
    Object.assign({} , backend)
];