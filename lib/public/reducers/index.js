'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducerNavigation = require('./reducer-navigation');

var _reducerNavigation2 = _interopRequireDefault(_reducerNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({

    navigation: _reducerNavigation2.default

});