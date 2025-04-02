import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const container = ReactDOM.createRoot(document.getElementById('root'));

const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)