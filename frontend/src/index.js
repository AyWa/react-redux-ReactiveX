import 'styles/common.scss'
import React from 'react';
import ReactDOM from 'react-dom';
// graphql
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'api/graphql'
// import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'
import { history } from 'store'
import indexApp from './routes';
import {store} from './store'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={ApolloClient}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </ApolloProvider>
    </AppContainer>
  , document.querySelector('.container'));
}

render(indexApp)


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => { render(indexApp) });
}
