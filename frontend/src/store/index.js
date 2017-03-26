import {
  createStore,
  // applyMiddleware,
} from 'redux'
import rootReducer from 'reducers'

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(
    //   thunk,
    //   routerMiddleware(history),
    //   sagaMiddleware
    // )
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

export const store = configureStore()

export const dispatch = store.dispatch
