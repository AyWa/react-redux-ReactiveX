const path = require('path');
const express = require('express');

import React from 'react';
import { renderToString } from 'react-dom/server';
console.log(process.env.__SERVER__);
import { StaticRouter as Router } from 'react-router-dom';
import App from 'routes/index.js';
import { Provider } from 'react-redux';
import {store} from 'store'
// import NotFoundPage from './frontend/src/components/Errors/404.jsx';
const app = express();
const buildDir = "./build"

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
// Get our request parameters
//app.use(express.static(path.join(__dirname, buildDir)));
app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, buildDir, "index.html"));
  console.log("coucou");
  console.log(req.url);
  let markup = '';
  let status = 200;

  const context = {};
  markup = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </Provider>
  );

  // context.url will contain the URL to
  // redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }

  if (context.is404) {
    status = 404;
  }
  console.log(context);

  return res.status(status).render('index_dev', { markup });
});

app.listen(8899);
