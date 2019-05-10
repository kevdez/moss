function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import React from 'react';
// import blessed from 'blessed';
// import AnimatedBox from './components/AnimatedBox';
// import {render} from 'react-blessed';
// const screen = blessed.screen({
//   autoPadding: true,
//   smartCSR: true,
//   title: 'moss - a Spotify terminal client'
// });
// screen.key(['escape', 'q', 'C-c'], function(ch, key) {
//   return process.exit(0);
// });
// render(<AnimatedBox />, screen, (inst) => console.log('Rendered AnimatedBox!'));
import React, { Component } from "react";
import blessed from "blessed";
import { render } from "react-blessed"; // Rendering a simple centered box

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("box", {
        top: "center",
        left: "center",
        width: "50%",
        height: "50%",
        border: {
          type: "line"
        },
        style: {
          border: {
            fg: "green"
          }
        }
      }, "Hello World!");
    }
  }]);

  return App;
}(Component); // Creating our screen


var screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "moss - a Spotify terminal client"
}); // Adding a way to quit the program

screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
}); // Rendering the React app using our screen

var component = render(React.createElement(App, null), screen);