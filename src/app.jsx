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
import { render } from "react-blessed";

// Rendering a simple centered box
class App extends Component {
  render() {
    return (
      <box
        top="center"
        left="center"
        width="50%"
        height="50%"
        border={{ type: "line" }}
        style={{ border: { fg: "green" } }}
      >
        Hello World!
      </box>
    );
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "moss - a Spotify terminal client"
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
