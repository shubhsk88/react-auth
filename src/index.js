import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from './react-auth0';
import App from './App';

import { authConfig } from './auth.config';
import history from './utils/history';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={authConfig.domain}
    client_id={authConfig.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
