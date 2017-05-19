const path = require('path');
const fse = require('fs-extra');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackFrontConfiguration = require('./test_webpack_dev.config.js').frontend;
const webpackBackConfiguration = require('./test_webpack_dev.config.js').backend;

const backCompiler = webpack(webpackBackConfiguration);
const frontCompiler = webpack(webpackFrontConfiguration);

const app = express();
const backBuildDir = "./build"
const frontBuildDir = `${backBuildDir}/frontend`
const viewBuildDir = `${backBuildDir}/view`

// Delete build folder and create it again
fse.remove(backBuildDir)
  .then(() => {
    console.log('delete build folder success!')
    fse.ensureDir(frontBuildDir)
      .then(() => {
        console.log('create build folder success!')
      })
      .catch(err => {
        console.error(err)
      })
    fse.ensureDir(viewBuildDir)
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
frontCompiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data
    Object.keys(assets).forEach(key => {
      file = path.resolve(__dirname, frontBuildDir , key)
      data = assets[key].source()
      fse.writeFileSync(file, data)
    })
    callback()
})
// plugin to emit in build folder
backCompiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data
    Object.keys(assets).forEach(key => {
      file = path.resolve(__dirname, backBuildDir , key)
      data = assets[key].source()
      fse.writeFileSync(file, data)
    })
    callback()
})

//use the webpack config
// app.use(webpackDevMiddleware(frontCompiler, {
//   noInfo: false,
//   publicPath: webpackFrontConfiguration.output.publicPath,
//   index: "index_front.html",
//   quiet: false,
//   colors: true,
//   timings: true,
// }));
// dev
webpackDevMiddleware(backCompiler, {
  noInfo: false,
  publicPath: webpackBackConfiguration.output.publicPath,
  index: "index_front.html",
  quiet: false,
  colors: true,
  timings: true,
}, a => {
  console.log(a);
})
//use hot reload
app.use(webpackHotMiddleware(frontCompiler));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Get our request parameters
app.use(express.static(path.join(__dirname, frontBuildDir)));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, frontBuildDir, "index_front.html"));
});

app.listen(9999);
