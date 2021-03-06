'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _data = require('../../../data.json');

var _data2 = _interopRequireDefault(_data);

var _config = require('../../../config.json');

var _config2 = _interopRequireDefault(_config);

require('../styles/index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModulesEvents = function (_React$Component) {
  _inherits(ModulesEvents, _React$Component);

  function ModulesEvents(props) {
    _classCallCheck(this, ModulesEvents);

    return _possibleConstructorReturn(this, (ModulesEvents.__proto__ || Object.getPrototypeOf(ModulesEvents)).call(this, props));
  }

  _createClass(ModulesEvents, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { style: {
            border: '3px solid rgba(0,0,0,0.125)',
            borderTop: '0px solid rgba(0,0,0,0.125)'
          } },
        _data2.default.events.map(function (article, index) {
          return _react2.default.createElement(
            'div',
            {
              key: index,
              style: {
                padding: 25,
                borderBottom: '1px solid rgba(0,0,0,0.125)',
                display: 'flex',
                flexDirection: 'row'
              }
            },
            _react2.default.createElement('img', {
              src: article.uri
            }),
            _react2.default.createElement(
              'div',
              { style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginLeft: 15
                } },
              _react2.default.createElement(
                'span',
                { className: 'info' },
                article.date
              ),
              _react2.default.createElement(
                'span',
                { className: 'heading' },
                article.heading
              ),
              _react2.default.createElement(
                'span',
                { className: 'sub-heading' },
                article.subHeading
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '/',
                  className: 'info-link'
                },
                _react2.default.createElement(
                  'span',
                  { className: 'info-link' },
                  '> '
                ),
                _config2.default.articles.more.caption
              )
            )
          );
        })
      );
    }
  }]);

  return ModulesEvents;
}(_react2.default.Component);

exports.default = ModulesEvents;