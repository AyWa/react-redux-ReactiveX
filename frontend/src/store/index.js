import {
  createStore,
  applyMiddleware,
} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {createEpicMiddleware} from 'redux-observable'
import rootEpic from 'reducers-observable'
import rootReducer from 'reducers'
import createHistory from 'history/createBrowserHistory'

let varhistory;
const middlewares = []
if (!process.env.__SERVER__) {
  varhistory= createHistory()
  middlewares.push(routerMiddleware(varhistory))
}
middlewares.push(createEpicMiddleware(rootEpic))

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  middlewares.push(createLogger({collapsed: true}));
}



function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
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

export const store = configureStore()

export const dispatch = store.dispatch
