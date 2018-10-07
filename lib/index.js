'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _App = require('./public/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var DEFAULT = {
  _PORT: 8000

  //If it there is anything serveable in here: serve it.
  //Note: If the index route doesn't work look if there's an index file in here...
};app.use('/', _express2.default.static(_path2.default.resolve(__dirname, 'public')));

app.get('*', function (req, res) {

  var context = {};

  var html = _server2.default.renderToString(_react2.default.createElement(
    _reactRouter.StaticRouter,
    {
      location: req.url,
      context: context
    },
    _react2.default.createElement(_App2.default, null)
  ));

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write('<!doctype html><html><head></heady><body><div id="app">' + html + '</div><script src="/vendor.js"></script><script src="/bundle.js"></script></body></html>');
    res.end();
  }
});

app.listen(DEFAULT._PORT, function () {
  console.log('Listening on port ' + DEFAULT._PORT + '...');
});