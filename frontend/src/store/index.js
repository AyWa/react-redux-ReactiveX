import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {createEpicMiddleware} from 'redux-observable'
import rootEpic from 'reducers-observable'
import rootReducer from 'reducers'
import browserHistory from 'history/createBrowserHistory'
// graphQl import
import ApolloClient from 'api/graphql'
import {safe} from 'utilities'

let varhistory;
const middlewares = []
if (!process.env.__SERVER__) {
  varhistory= browserHistory()
  middlewares.push(routerMiddleware(varhistory))
}

middlewares.push(ApolloClient.middleware())
const initialState = !process.env.__SERVER__ ? {
  apollo: safe(() => window.__APOLLO_STATE__.apollo, {}),
} : {}
middlewares.push(createEpicMiddleware(rootEpic))
if (process.env.__DEV__) {
  const { createLogger } = require(`redux-logger`);
  middlewares.push(createLogger({collapsed: true}));
}

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      (!process.env.__SERVER__ && process.env.__DEV__ && !!window.__REDUX_DEVTOOLS_EXTENSION__)
        ? window.__REDUX_DEVTOOLS_EXTENSION__(): _ => _,
    ),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export const history = varhistory

export const store = configureStore(initialState)

export const dispatch = store.dispatch
