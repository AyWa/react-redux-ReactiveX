const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfiguration = require('./webpack_dev.config.js')

const compiler = webpack(webpackConfiguration);

const app = express();

compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data
    Object.keys(assets).forEach(key => {
      file = path.resolve(__dirname, "build" ,key)
      data = assets[key].source()
      fs.writeFileSync(file, data)
    })
    callback()
})
app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: webpackConfiguration.output.publicPath,
  index: "index.html",
  quiet: false,
  colors: true,
  timings: true,
}));
app.use(webpackHotMiddleware(compiler));

// Get our request parameters
app.use(express.static(path.join(__dirname, "build")));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8899);
