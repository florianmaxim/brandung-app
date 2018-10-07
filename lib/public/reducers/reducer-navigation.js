'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var init = {
  mode: Math.floor(Math.random() * 2) + 1 > 1 ? 'news' : 'events'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments[1];


  switch (action.type) {

    case "SET_MODE":
      {
        return Object.assign({}, state, {
          mode: action.payload
        });
      }

  }

  return state;
};