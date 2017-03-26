const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs                = require('fs');
const CompressionPlugin = require("compression-webpack-plugin");
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
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './build/frontend'),
    filename: 'frontend.bundle.js',
  },
  resolve: {
    alias: {
     images: path.resolve(__dirname, './frontend/images')
    },
    modules: [path.resolve(__dirname, "./frontend/src"), "node_modules"],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        //  include: defaultIncluded,
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
         'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
         {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
         ],
      },{
        // include: defaultIncluded,
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',// creates style nodes from JS strings
          // translates CSS into CommonJS // compiles Sass to CSS
          use: ['css-loader', 'sass-loader']
        })
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production"),
         __DEV__: JSON.stringify(false),
       }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index_prod.html',
      favicon: "images/favicon.ico",
      inject: 'body',
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: true,
    }),
    new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
		})
  ]
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production"),
         __DEV__: JSON.stringify(false),
       }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: true,
    })
  ],
  externals: nodeModules
};

module.exports = [
    Object.assign({} , frontend),
    Object.assign({} , backend)
];
