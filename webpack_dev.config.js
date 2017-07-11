const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs                = require('fs');

const nodeModules = {};
 fs.readdirSync('./node_modules')
   .filter(function(x) {
     return ['.bin'].indexOf(x) === -1;
   })
   .forEach(function(mod) {
     nodeModules[mod] = 'commonjs ' + mod;
});

const frontend  = {
  context: path.resolve(__dirname, './frontend'),
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      './src/index.js',
    ]
  },
  output: {
    filename: 'frontend.bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
     images: path.resolve(__dirname, './frontend/images')
    },
    modules: [path.resolve(__dirname, "./frontend/src"), "node_modules"],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  devtool: 'eval',
  module: {
    rules: [
      {
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
        test: /\.(scss|css)$/,
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
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("development"),
         __DEV__: JSON.stringify(true),
       }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index_dev.html',
      favicon: "images/favicon.ico",
      inject: 'body',
      filename: 'index_front.html',
    })
  ],
}

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
    filename: 'server.dev.bundle.js',
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
        test: /\.(css|scss|jpe?g|png|gif|svg)$/,
        loader: 'ignore-loader',
        exclude: /node_modules/,
      },{
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
         NODE_ENV: JSON.stringify("development"),
         __DEV__: JSON.stringify(true),
         __SERVER__: JSON.stringify(true),
       }
    }),
  ],
  externals: nodeModules
};

module.exports = {
    frontend: Object.assign({} , frontend),
    backend: Object.assign({} , backend)
};
