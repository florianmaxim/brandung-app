"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setMode = function setMode(mode) {

  return function (dispatch) {

    dispatch({ type: "SET_MODE", payload: mode });
  };
};

exports.setMode = setMode;