const path = require('path');
const express = require('express');

import React from 'react';
import { renderToString } from 'react-dom/server';
console.log(process.env.__SERVER__);
import { StaticRouter as Router } from 'react-router-dom';
import App from './frontend/src/routes/index.js';
// import NotFoundPage from './frontend/src/components/Errors/404.jsx';
const app = module.exports = express();
const buildDir = "./build"

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Get our request parameters
//app.use(express.static(path.join(__dirname, buildDir)));
app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, buildDir, "index.html"));
  let markup = '';
  let status = 200;

  const context = {};
  markup = renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>,
  );

  // context.url will contain the URL to
  // redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }

  if (context.is404) {
    status = 404;
  }

  return res.status(status).render('index', { markup });
});

app.listen(8899);
