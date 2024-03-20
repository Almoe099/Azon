import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/store';
import { csrfFetch, restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import * as productActions from './store/product';
import * as reviewActions from './store/review';
import './reset.css';
import './index.css';

const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  restoreCSRF();
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.productActions = productActions;
  window.reviewActions = reviewActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
