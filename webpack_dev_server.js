const path = require('path');
const childProcess = require('child_process');
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
var process = 5;
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
    runScript('./build/server.dev.bundle.js', function (err) {
        if (err) throw err;
        console.log('finished running some-script.js');
    });
    callback()
})
const runScript = (scriptPath, callback) => {
    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;
    //const baba = require(scriptPath);
    console.log("coucou");
    console.log(process);
    if (process === 5) {
      process = childProcess.fork(scriptPath);
      // listen for errors as they may prevent the exit event from firing
      process.on('error', function (err) {
          if (invoked) return;
          invoked = true;
          callback(err);
      });
      // execute the callback once the process has finished running
      process.on('exit', function (code) {
          if (invoked) return;
          invoked = true;
          var err = code === 0 ? null : new Error('exit code ' + code);
          callback(err);
      });
    }
}

//use the webpack config
app.use(webpackDevMiddleware(frontCompiler, {
  noInfo: false,
  publicPath: webpackFrontConfiguration.output.publicPath,
  index: "index_front.html",
  quiet: false,
  colors: true,
  timings: true,
}));
// dev
webpackDevMiddleware(backCompiler, {
  noInfo: false,
  publicPath: webpackBackConfiguration.output.publicPath,
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
