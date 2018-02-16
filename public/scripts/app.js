'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AddOption = require('./components/AddOption');

var _AddOption2 = _interopRequireDefault(_AddOption);

var _Option = require('./components/Option');

var _Option2 = _interopRequireDefault(_Option);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userInfo = {
  name: "Stinky Weaselteats",
  age: 114
};

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: props.options
    };
    _this.deleteAllOptions = _this.deleteAllOptions.bind(_this);
    _this.deleteOneOption = _this.deleteOneOption.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.pickOption = _this.pickOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        console.log(e.error);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      //console.log(prevState.options.length + '-' + this.state.options.length);
      //if(prevState.options.length !== this.state.options.length){
      var json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data.');
      //}
      //console.log(prevState);
    }
  }, {
    key: 'addOption',
    value: function addOption(optionText) {
      if (!optionText) {
        return 'Please enter a valid option.';
      } else if (this.state.options.indexOf(optionText) > -1) {
        return 'Option already exists.';
      }
      this.setState(function (prevState) {
        return { options: prevState.options.concat([optionText]) };
      });
      console.log(optionText);
    }
  }, {
    key: 'deleteAllOptions',
    value: function deleteAllOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'deleteOneOption',
    value: function deleteOneOption(optionIndex) {
      var newOptions = this.state.options;
      newOptions.splice(optionIndex, 1);
      this.setState(function (prevState) {
        return { options: [].concat(newOptions) };
      });
    }
  }, {
    key: 'pickOption',
    value: function pickOption() {
      var pick = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[pick]);
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = "Knock, knock. Who's there? FART!";
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { title: 'What up?', subtitle: subtitle }),
        _react2.default.createElement(User, { userinfo: userInfo }),
        _react2.default.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          pickOption: this.pickOption
        }),
        _react2.default.createElement(Options, {
          options: this.state.options,
          deleteAllOptions: this.deleteAllOptions,
          deleteOneOption: this.deleteOneOption
        }),
        _react2.default.createElement(_AddOption2.default, {
          addOption: this.addOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(_react2.default.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Options = function Options(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      { onClick: props.deleteAllOptions },
      'Remove All'
    ),
    props.options.length === 0 && _react2.default.createElement(
      'p',
      null,
      'Please add an option to begin.'
    ),
    _react2.default.createElement(
      'ul',
      null,
      props.options.map(function (option, index) {
        return _react2.default.createElement(_Option2.default, {
          key: index,
          index: index,
          option: option,
          deleteOneOption: props.deleteOneOption
        });
      })
    )
  );
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
