import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import App from './App';
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

render(App)


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App) });
}
