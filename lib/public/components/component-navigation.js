'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../../../config.json');

var _config2 = _interopRequireDefault(_config);

var _data = require('../../../data.json');

var _data2 = _interopRequireDefault(_data);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actionsNavigation = require('../actions/actions-navigation');

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

var ComponentNavigation = function (_React$Component) {
  _inherits(ComponentNavigation, _React$Component);

  function ComponentNavigation(props) {
    _classCallCheck(this, ComponentNavigation);

    return _possibleConstructorReturn(this, (ComponentNavigation.__proto__ || Object.getPrototypeOf(ComponentNavigation)).call(this, props));
  }

  _createClass(ComponentNavigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //console.log(this.props.match.params)
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundImage: 'linear-gradient(rgba(5,125,214,1), rgba(5,115,191,1))',
            height: 50,
            paddingLeft: 10
          } },
        _config2.default.categories.map(function (tab, index) {

          return _react2.default.createElement(
            'button',
            {
              key: index,
              onClick: function onClick() {
                return _this2.props.setMode(tab.value);
              },
              style: {
                marginRight: 1,
                padding: _this2.props.navigation.mode == tab.value ? 10 : 7.5,
                paddingLeft: _this2.props.navigation.mode == tab.value ? 20 : 10,
                paddingRight: _this2.props.navigation.mode == tab.value ? 20 : 10,
                color: 'rgba(51,51,51,1)',
                background: _this2.props.navigation.mode == tab.value ? 'white' : 'rgba(140,191,232,1)',
                fontSize: 12,
                fontWeight: 'bold',
                boxShadow: '0 -1px 1px rgba(0,0,0,0.125)',
                border: 0,
                outline: 0
              } },
            tab.caption
          );
        })
      );
    }
  }]);

  return ComponentNavigation;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComponentNavigation);