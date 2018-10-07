'use strict';

var DEFAULT = {
  _PORT: 8080
};

var path = require('path');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.dev');

var WebpackDevServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};

var app = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);

app.listen(DEFAULT._PORT, function () {
  console.log('Listening on port ' + DEFAULT._PORT + '...');
});