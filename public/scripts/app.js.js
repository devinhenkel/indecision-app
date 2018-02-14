'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      //options: ["Thing 1", "Thing 2", "Thing 3", "Thing 5!"]
      options: []
    };
    _this.deleteAllOptions = _this.deleteAllOptions.bind(_this);
    _this.deleteOneOption = _this.deleteOneOption.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.pickOption = _this.pickOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'addOption',
    value: function addOption(optionText) {
      if (!optionText) {
        return 'Please enter a valid option.';
      } else if (this.state.options.indexOf(optionText) > -1) {
        return 'Option already exists.';
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([optionText])
        };
      });
      console.log(optionText);
    }
  }, {
    key: 'deleteAllOptions',
    value: function deleteAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'deleteOneOption',
    value: function deleteOneOption(optionIndex) {
      var newOptions = this.state.options;
      newOptions.splice(optionIndex, 1);
      this.setState(function (prevState) {
        return {
          options: newOptions
        };
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
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: 'Fart knocker.', subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          pickOption: this.pickOption
        }),
        React.createElement(Options, {
          options: this.state.options,
          deleteAllOptions: this.deleteAllOptions,
          deleteOneOption: this.deleteOneOption
        }),
        React.createElement(AddOption, {
          addOption: this.addOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      this.props;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle,
          '.'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.pickOption,
            disabled: !this.props.hasOptions
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Options here...'
        ),
        React.createElement(
          'button',
          { onClick: this.props.deleteAllOptions },
          'Remove All'
        ),
        React.createElement(
          'p',
          null,
          'Options length: ',
          this.props.options.length
        ),
        React.createElement(
          'ul',
          null,
          this.props.options.map(function (option, index) {
            return React.createElement(Option, { key: index, index: index, option: option, deleteOneOption: _this5.props.deleteOneOption });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var RemoveOption = function (_React$Component5) {
  _inherits(RemoveOption, _React$Component5);

  function RemoveOption(props) {
    _classCallCheck(this, RemoveOption);

    // This binding is necessary to make `this` work in the callback
    var _this6 = _possibleConstructorReturn(this, (RemoveOption.__proto__ || Object.getPrototypeOf(RemoveOption)).call(this, props));

    _this6.handleRemoveOption = _this6.handleRemoveOption.bind(_this6);
    return _this6;
  }

  _createClass(RemoveOption, [{
    key: 'handleRemoveOption',
    value: function handleRemoveOption(e) {
      //alert("remove it!");
      console.log(this.props.index);
      this.props.deleteOneOption(this.props.index);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { index: this.props.index, onClick: this.handleRemoveOption },
        'X'
      );
    }
  }]);

  return RemoveOption;
}(React.Component);

var Option = function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option(props) {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Option: ',
          this.props.option,
          React.createElement(RemoveOption, {
            index: this.props.index,
            deleteOneOption: this.props.deleteOneOption
          })
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component7) {
  _inherits(AddOption, _React$Component7);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this8 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this8.submitOption = _this8.submitOption.bind(_this8);
    _this8.state = {
      error: undefined
    };
    return _this8;
  }

  _createClass(AddOption, [{
    key: 'submitOption',
    value: function submitOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      if (option) {

        e.target.elements.option.value = '';
        this.setState(function () {
          return {
            error: error
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.submitOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var jsx = React.createElement(
  'div',
  null,
  React.createElement(IndecisionApp, null)
);

var approot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), approot);

//binding example
var obj = {
  name: "Farty Marty",
  getName: function getName() {
    return this.name;
  }
};

var getName = obj.getName.bind(obj);
//end example
