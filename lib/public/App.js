'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentNews = require('./container/component-news');

var _componentNews2 = _interopRequireDefault(_componentNews);

var _componentEvents = require('./container/component-events');

var _componentEvents2 = _interopRequireDefault(_componentEvents);

var _componentNavigation = require('./components/component-navigation');

var _componentNavigation2 = _interopRequireDefault(_componentNavigation);

var _reactRouter = require('react-router');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actionsNavigation = require('./actions/actions-navigation');

var ActionsNavigation = _interopRequireWildcard(_actionsNavigation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setMode: ActionsNavigation.setMode
  }, dispatch);
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_componentNavigation2.default, null),
        _react2.default.createElement(
          _reactRouter.Switch,
          null,
          _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: this.props.navigation.mode == 'events' ? _componentEvents2.default : _componentNews2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: '/*', component: this.props.navigation.mode == 'events' ? _componentEvents2.default : _componentNews2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);