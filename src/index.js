// node modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// src modules
import './styles/base.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
