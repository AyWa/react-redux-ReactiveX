// server
const path = require('path');
const express = require('express');

// universal app
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from 'routes/index.js';
import { Provider } from 'react-redux';
import {store} from 'store'

// const directory __dirname === ./build
const viewDir = "./view"
const frontBuild = "./frontend"

// init express app
const app = express();

// init template engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, viewDir));

// Get our static request parameters
app.use(express.static(path.join(__dirname, frontBuild)));

//handle call
app.get('*', (req, res) => {
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

  return res.status(status).render('server_index_dev', { markup });
});

app.listen(8899);