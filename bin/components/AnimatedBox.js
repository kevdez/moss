function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';

var AnimatedBox =
/*#__PURE__*/
function (_Component) {
  _inherits(AnimatedBox, _Component);

  function AnimatedBox(props) {
    var _this;

    _classCallCheck(this, AnimatedBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimatedBox).call(this, props));
    _this.state = {
      position: props.initialPosition || 0,
      toRight: true
    };
    setInterval(function () {
      var _this$state = _this.state,
          position = _this$state.position,
          toRight = _this$state.toRight,
          newDirection = position === (toRight ? 90 : 0) ? !toRight : toRight,
          newPosition = newDirection ? position + 1 : position - 1;

      _this.setState({
        position: newPosition,
        toRight: newDirection
      });
    }, props.time || 33.333333);
    return _this;
  }

  _createClass(AnimatedBox, [{
    key: "render",
    value: function render() {
      var position = "".concat(this.state.position, "%");
      return React.createElement("box", {
        top: "center",
        left: position,
        width: this.props.width || "10%",
        height: this.props.height || "20%",
        border: {
          type: 'line'
        },
        style: {
          bg: 'cyan',
          border: {
            fg: 'blue'
          }
        }
      });
    }
  }]);

  return AnimatedBox;
}(Component);

module.exports = AnimatedBox;