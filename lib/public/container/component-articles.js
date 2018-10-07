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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModulesNews = function (_React$Component) {
  _inherits(ModulesNews, _React$Component);

  function ModulesNews(props) {
    _classCallCheck(this, ModulesNews);

    return _possibleConstructorReturn(this, (ModulesNews.__proto__ || Object.getPrototypeOf(ModulesNews)).call(this, props));
  }

  _createClass(ModulesNews, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { style: {
            border: '3px solid rgba(0,0,0,0.125)',
            borderTop: '0px solid rgba(0,0,0,0.125)'
          } },
        _data2.default.articles.map(function (article, index) {
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
              src: article.uri,
              style: {
                width: 125,
                height: 100,
                border: '3px solid rgba(0,0,0,0.125)'
              }
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
                { style: {
                    color: 'rgba(0,0,0,1)',
                    fontSize: 11
                  } },
                article.date
              ),
              _react2.default.createElement(
                'span',
                { style: {
                    color: 'rgba(0,127,215,1)',
                    fontSize: 18
                  } },
                article.heading
              ),
              _react2.default.createElement(
                'span',
                { style: {
                    color: 'rgba(0,0,0,1)',
                    fontSize: 12
                  } },
                article.subHeading
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '/',
                  style: {
                    color: 'black',
                    fontSize: 13,
                    fontWeight: 'bold',
                    textDecoration: 'none'
                  }
                },
                _react2.default.createElement(
                  'span',
                  { style: {
                      color: 'rgba(0,127,215,1)',
                      fontSize: 15,
                      margin: 5
                    } },
                  '>'
                ),
                _config2.default.articles.more.caption
              )
            )
          );
        })
      );
    }
  }]);

  return ModulesNews;
}(_react2.default.Component);

exports.default = ModulesNews;