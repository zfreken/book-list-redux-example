import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import reducers from './Reducers/index';



ReactDom.render(
  <Provider store = {createStore(reducers)} >
    <App />
  </Provider>,
  document.querySelector('#root')

);
