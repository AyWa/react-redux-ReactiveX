const path = require('path');
const fse = require('fs-extra');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfiguration = require('./webpack_dev.config.js')

const compiler = webpack(webpackConfiguration);

const app = express();
const buildDir = "./build/frontend"

// Delete build folder and create it again
fse.remove(buildDir)
  .then(() => {
    console.log('delete build folder success!')
    fse.ensureDir(buildDir)
      .then(() => {
        console.log('create build folder success!')
      })
      .catch(err => {
        console.error(err)
      })
  })
  .catch(err => {
    console.error(err)
  })

// plugin to emit in build folder
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data
    Object.keys(assets).forEach(key => {
      file = path.resolve(__dirname, buildDir , key)
      data = assets[key].source()
      fse.writeFileSync(file, data)
    })
    callback()
})
//use the webpack config
app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: webpackConfiguration.output.publicPath,
  index: "index_front.html",
  quiet: false,
  colors: true,
  timings: true,
}));
//use hot reload
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Get our request parameters
app.use(express.static(path.join(__dirname, buildDir)));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, buildDir, "index_front.html"));
});

app.listen(8999);
