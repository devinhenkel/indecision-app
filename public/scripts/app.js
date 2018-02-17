'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userInfo = {
  name: "Stinky Weaselteats",
  age: 114
};

IndecisionApp.defaultProps = {
  options: []
};

var jsx = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(IndecisionApp, null)
);

var User = function User(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Name: ',
      props.userinfo.name
    ),
    _react2.default.createElement(
      'p',
      null,
      'Age: ',
      props.userinfo.age
    )
  );
};

var approot = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(IndecisionApp, null), approot);

//binding example
var obj = {
  name: "Farty Marty",
  getName: function getName() {
    return this.name;
  }
};

var getName = obj.getName.bind(obj);
//end example
