import 'isomorphic-fetch';
// server
import path from 'path';
import express from 'express';
import prerender from 'prerender-node';

// universal app
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from 'routes/index.js';
import {
  ApolloClient,
  ApolloProvider,
  getDataFromTree,
  renderToStringWithData
} from 'react-apollo';
import {networkInterface} from 'api/graphql'
import {store} from 'store'

const apolloClient = new ApolloClient({
  ssrMode: true,
  networkInterface,
})
// const directory __dirname === ./build
const viewDir = "./view"
const frontBuild = "./frontend"

// config
const port = process.env.PORT || 8888;

// init express app
const app = express();

// init template engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, viewDir));

// Get our static request parameters
app.use(express.static(path.join(__dirname, frontBuild)));

// set up our middleware for prerender app for crawler
app.use(prerender);

// handle call
if (process.env.__DEV__) {
  app.get('/__webpack_hmr', (req, res) => {
    res.status(404);
  })
}

app.get('*', (req, res) => {
  console.log(req.url);
  let markup = '';
  let status = 200;

  const context = {};
  const AppFront = (
    <ApolloProvider client={apolloClient} store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </ApolloProvider>
  )

  renderToStringWithData(AppFront).then((markup) => {
    const data = apolloClient.store.getState().apollo.data;
    // We are ready to render for real
    const initialState = {
      apollo: {data},
    }
    return res.status(status).render(
      'server_index_dev',
      {
        markup,
        initialState,
      }
    )
  });
});
console.log(`:) you can check :) : http://localhost: ${port}`);
app.listen(port);
