import 'styles/common.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import indexApp from './routes';
import {store} from './store'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>
  , document.querySelector('.container'));
}

render(indexApp)


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => { render(indexApp) });
}
