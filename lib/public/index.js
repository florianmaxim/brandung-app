'use strict';

require('./styles/index.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-register');

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('app'));

//Required for using hot module replacement (comes by webpack-dev-server)
//Needs to sit in the main entry file
if (module.hot) {
  module.hot.accept();
}