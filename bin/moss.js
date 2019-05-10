#! /usr/bin/env node

var blessed = require('blessed'); // Create a screen object.


var screen = blessed.screen({
  smartCSR: true
});
screen.key('q', function () {
  process.exit(0);
});
var yourMusicList = blessed.list({
  top: 0,
  left: 0,
  width: '30%',
  height: '50%',
  border: {
    type: 'line'
  },
  style: {
    selected: {
      fg: 'green',
      bg: 'blue'
    }
  }
});
yourMusicList.setItems(['Your music', 'Browse', 'Radio']);
screen.key('up', function () {
  yourMusicList.up(1);
  screen.render();
});
var playlistList = blessed.list({
  bottom: 0,
  left: 0,
  width: '30%',
  height: '50%',
  border: {
    type: 'line'
  },
  style: {
    selected: {
      fg: 'green',
      bg: 'black'
    }
  }
});
playlistList.setItems(['Playlists', 'Discover Weekly', 'Deep House Relax', 'Ambient Chill', 'This Is: Animal Collective']);
screen.key('up', function () {
  playlistList.up(1);
  screen.render();
});
screen.key('down', function () {
  playlistList.down(1);
  screen.render();
});
var blueBox = blessed.box({
  height: 10,
  width: 10,
  style: {
    fg: 'white',
    bg: 'green'
  },
  draggable: true
});
blueBox.setContent('10 by 10'); // Append the widgets to the screen

screen.append(yourMusicList);
screen.append(blueBox);
screen.append(playlistList); // Render the screen.

screen.render();