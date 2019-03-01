// client.jsx
/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * Local dependencies
 */
import App from './app';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.hydrate(
  <BrowserRouter>
    <App endpoint={context.ENDPOINT} />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();