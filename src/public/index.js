require('babel-register');

import './styles/index.scss';

import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import App from './App';

ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));

//Required for using hot module replacement (comes by webpack-dev-server)
//Needs to sit in the main entry file
if(module.hot) {
  module.hot.accept();
}
