import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';

const GRAPHQL_ENDPOINT = "https://api.graph.cool/simple/v1/cjnu0mxiv825v0137el5mt4q8";

if (!GRAPHQL_ENDPOINT) {
  throw Error("GRAPHQL_ENDPOINTが設定されていません。");
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_ENDPOINT
  }),
  cache: new InMemoryCache()
});

const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(
  ApolloApp,
  document.getElementById('root')
);

serviceWorker.unregister();
